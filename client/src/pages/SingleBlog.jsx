import React, { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { AudioLines, LucideCircleStop, Pause, Play, Repeat2, Star } from "lucide-react";
import CommentBox from "../components/comment";
import loading from "../assets/loading/spinner.svg";
import { useMyContext } from "../config/CommonContext";
import Navbar from "../components/Header";


const BASE_URL = import.meta.env.VITE_BASEURL;

const SingleBlog = () => {




  const navigate = useNavigate()
  const { id } = useParams();
  // console.log(id)
  const { user } = useUser(); 
  const userId = user?.id;
  const { stared, setStared } = useMyContext();
  const [blog, setBlog] = useState(null); // Blog state
console.log(blog)
  // Fetch Blog Data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${BASE_URL}/post/${id}`);
        const result = await response.json();
        if (result.data.length > 0) {
          setBlog(result.data[0]); // Set blog data
        } else {
          toast.error("Blog not found!");
        }
      } catch (error) {
        toast.error("Failed to fetch blog data.");
        navigate('/*')
      
      }
    };
    fetchBlog();
  }, [id]);

  // Save Blog Function
  const saveBlog = async () => {
    if (!userId) return toast.error("Sign in to save blogs!");

    setStared(true);
    const data = { saveBlogId: id, user_id: userId, star: true };

    try {
      const response = await fetch(`${BASE_URL}/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 400) {
        toast.error("Already saved!");
      } else {
        toast.success("Blog saved successfully!");
      }
    } catch (error) {
      toast.error("Error saving blog.");
    }
  };

  // Remove Blog from Saved
  const removeBlog = async () => {
    if (!userId) return toast.error("Sign in to remove saved blogs!");

    setStared(false);
    try {
      const response = await fetch(`${BASE_URL}/save/${id}?user_id=${userId}`, {
        method: "DELETE",
      });
      const resData = await response.json();
      toast.success(resData.msg || "Removed from saved.");
    } catch (error) {
      toast.error("Error removing saved blog.");
    }
  };

  console.log(blog)
  // Format Date
  const formatDate =(postDate)=>{
    const date = new Date(postDate);
    return new Intl.DateTimeFormat('en-GB',{
        day:"2-digit",
        month:"short",
        year:'numeric'
    }).format(date)
  }
  const defaultImage = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  return (
    
    <div className="lg:w-[60vw] mx-auto ">
    <Navbar/>
      {blog ? (
        <div className="px-2">
          {/* Breadcrumb Navigation */}
          <nav className="text-gray-500 text-sm mb-4">
            <a href="/" className="hover:text-black">Home</a> &gt;
            <a href="/blogs" className="hover:text-black"> Blogs</a> &gt;
            <span className="text-black"> {blog.title.length > 30 ? `${blog.title.slice(0, 30)}...` : blog.title}</span>
          </nav>

          {/* Blog Header */}
           <p className="text-gray-600 text-[12px] my-2">{formatDate(blog.postAt) } • 8 min read</p>
          
          <div className="  text-center">
            <h1 className="lg:text-4xl text-3xl font-bold my-3 ">{blog.title}</h1>
            {/* <button onClick={stared ? removeBlog : saveBlog} className="text-red-500">
              <Star fill={stared ? "red" : "none"} />
            </button> */}
          </div>
         <div className="text-center ">
            <i className="">{blog.description}</i>
            
          </div>

          {/* Featured Image */}
          <div className="w-full my-6 justify-center flex ">
            {/* <img src={blog.image.includes('uploads/')? `${BASE_URL}/${blog.image}`: blog.image} loading="lazy" alt="Blog" className="w-full h-[400px] rounded-md object-center object-cover" */}
            <img src={blog.image} loading="lazy" alt="Blog" className="w-full h-[400px] rounded-md object-center object-cover"
            onError={(e)=> e.target.src = defaultImage} />
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none text-justify text-opacity-75 text-[current] leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }} />
          <ReadAloud text={blog.content}/>

          {/* Blog Author */}
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-md my-6">
            
            <div>
              <h3 className="font-semibold">Atuthor : <span className="font-semibold">{blog.username || "user"}</span></h3>
              
            </div>
          </div>

          {/* Comments Section */}
          <CommentBox id={id} key={id} />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <img src={loading} alt="Loading" className="w-16" />
        </div>
      )}
    </div>
  );
};

export default SingleBlog;


export const ReadAloud = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef(null);

  const handlePlay = () => {
    // If paused, just resume
    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    // If already speaking, cancel current speech before restarting
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.0; // 0.1 to 10, normal is 1
    utterance.pitch = 1; // 0 to 2, normal is 1

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handlePause = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }} className="fixed left-0 bottom-3 w-full justify-center inline-flex ">
      <div className="bg-black text-white text-sm space-x-4 p-2 rounded-xl">
      <button onClick={handlePlay} className="bg-white rounded-full p-1 text-black">
        
        {isSpeaking && !isPaused ? <Repeat2 size={12}/>: <Play size={12}/>}
      </button>
      <button onClick={handlePause} disabled={!isSpeaking || isPaused} className="bg-white rounded-full p-1 text-black">
        <Pause size={12}/>
      </button>
      <button onClick={handleResume} disabled={!isPaused} className="bg-white rounded-full p-1 text-black">
        <AudioLines size={12}/>
      </button>
      <button onClick={handleStop} disabled={!isSpeaking} className="bg-red-400 rounded-full p-1 text-white">
        <LucideCircleStop size={12}/>
      </button>
      </div>
    </div>
  );
};


