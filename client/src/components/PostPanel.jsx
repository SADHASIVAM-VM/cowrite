import { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ResizeModule from "@botom/quill-resize-module";
import { SendHorizonal } from "lucide-react";
import { useAuth, useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import upload from "../assets/icons/upload.jpg";
import spinners from "../assets/loading/spinner.svg";
import { useMyContext } from "../config/CommonContext";

Quill.register("modules/resize", ResizeModule);

const URLs = import.meta.env.VITE_BASEURL;

function PostPanel() {
  const { editBlog, setEditBlog, setMenuSwitch } = useMyContext();

  const ids = useAuth().userId;
  const username = useUser().user.username;

  const quillRef = useRef(null);
  const [blogData, setBlogData] = useState({
    user_id: '',
    username: '',
    title: "",
    description: "",
    content: "",
    // image: null,
    imageUrl:"",
    category:""
  });

  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [imgErr, setImgErr] = useState(null);

  useEffect(() => {
    if (editBlog) {
      setBlogData({
        user_id: editBlog.user_id,
        username: editBlog.username,
        title: editBlog.title,
        description: editBlog.description,
        content: editBlog.content,
        imageUrl: editBlog.imageUrl,
        category:editBlog.category
      });
      setFileName(editBlog.imageName || "");
    }
  }, [editBlog]);
  console.log(editBlog)

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({ ...prev, [name]: value }));
  };

  // const HandleFileChange = (e) => {
  //   const { name } = e.target;
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImgErr(false);
  //   }
  //   setFileName(file.name);
  //   setBlogData((prev) => ({ ...prev, [name]: file }));
  // };

  const handleQuillChange = (value) => {
    setBlogData((prev) => ({ ...prev, content: value }));
  };

  const postBlog = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("user_id", ids);
      formData.append("username", username);
      formData.append("title", blogData.title);
      formData.append("description", blogData.description);
      formData.append("content", JSON.stringify(blogData.content));
      formData.append("category", blogData.category);
      formData.append("imageUrl", blogData.imageUrl);

      // if (blogData.image) {
      //   formData.append("image", blogData.image);
      // }

      const endpoint = editBlog ? `${URLs}/post/${editBlog._id}` : `${URLs}/post`;
      const method = editBlog ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method : method,
        body: formData 
      });
      
      if (response.ok) {
        setLoading(false);
        toast.success(editBlog ? "Blog updated successfully" : "Blog created successfully");
       // setBlogData({ user_id: '', title: "", description: "", content: "", image: null,category:"", });
        setBlogData({ user_id: '', title: "", description: "", content: "",category:"", imageUrl:"" });
        // setImgErr(null);
        // setFileName("");
        setEditBlog(null);
      } else {
        setLoading(false);
        toast.error("Failed to post blog");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      toast.error("An error occurred while saving the blog");
    }
  };

  const onsubmitting = (e) => {
    e.preventDefault();
    postBlog();
  };

  return (
    <div className="p-2 relative">
      <h1 className="text-3xl hq mb-2">{editBlog ?"Update Blog":"Create A Blog"}</h1>
      <form action="" className="space-y-2" onSubmit={onsubmitting}>
               {/* post button */}

               {
                !loading ? 
                <button type="submit" className="border bg-violet-700 text-white float-right  w-52 h-[50px] px-3 mb-3 rounded-md">{editBlog ? "Update" : "Post"}</button>
                :
                <button disabled={true} className="border bg-violet-400 text-white float-right  w-52 h-[50px] px-3 mb-3 rounded-md">{"Processing...."}</button>
                
              }
       <div className="space-y-4 ">
       <input
          name="title"
          required
          type="text"
          placeholder="Blog Title"
          value={blogData.title}
          className="border-2 w-full bg-transparent py-4 px-5 rounded-md"
          onChange={changeHandle}
       
        />
        <textarea
          required
          name="description"
          placeholder="Short Description..."
          value={blogData.description}
          className="border-2 bg-transparent w-full p-5 rounded-md"
          onChange={changeHandle}
        />
       
       </div>

{
  blogData.imageUrl &&   <img src={blogData?.imageUrl} className="w-52 h-20 rounded-xl object-contain"/>

}
        <div className="flex justify-between gap-5 items-center">
          {/* image file hidden for temperaory */}
          {/* <div className="">
          <label htmlFor="img" className={imgErr ? "border border-red-500" : "border flex items-center px-2 rounded-md"}>
          <img src={upload} className="w-16 " alt="Upload" />
          <span className="opacity-60 ml-2">{fileName || "Select Image"}</span >
        </label>
        <input id="img" name="image" type="file" onChange={HandleFileChange} />
        
          </div>
           */}
           <div className="lg:flex flex-1">
             <input
          name="imageUrl"
          required
          type="text"
          placeholder="Paste a image Url, Ex: https://www.example-image.com/image.jpg"
          value={blogData.imageUrl}
          className="border-2 w-full bg-transparent py-4 px-5 rounded-md"
          onChange={changeHandle}
       
        />
           </div>

          <div className="flex-1">
             <input
          name="category"
          required
          type="text"
          placeholder="Category"
          value={blogData.category}
          className="border-2 w-full bg-transparent py-4 px-5 rounded-md"
          onChange={changeHandle}
       
        />
          </div>
       </div>
        
  </form>


      {/* Quill */}
      <div className="my-3">
      <ReactQuill className="h-[250px]" ref={quillRef} theme="snow" modules={{ toolbar: true }} value={blogData.content} onChange={handleQuillChange} />
      </div>
 
      {/* {loading && <div className="loading-spinner absolute bg-black bg-opacity-30 w-full top-0 left-0 h-full z-10 flex justify-center items-center"><img src={spinners} alt="" className="w-[50px] z-10"/></div>}
 */}

    </div>

   
  );
}

export default PostPanel;
