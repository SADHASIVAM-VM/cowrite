import React, { useEffect, useState } from "react";
import blogimg from '/blogimg2.webp'
import ai from '../assets/homeImg/article/ai.jpg'
import productivity from '../assets/homeImg/article/productvity.jpg'
import health from '../assets/homeImg/article/health.jpg'
import Construction from '../assets/homeImg/article/construction.jpg'
import { ArrowRightCircle, StarIcon, User2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

const URLs = import.meta.env.VITE_BASEURL;
const Home = ()=> {
  const uuname =  "user"
  const fetchIIP = async () => {
    try {
      // Fetch the IP
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ip = ipData.ip;

      // Send the IP and user data to the server
      const response = await fetch(`${URLs}/ips/getiips/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: uuname , 
          ip,
        }),
      });
      const result = await response.json();

      console.log('Server Response:');
    } catch (error) {
      console.error('Error fetching IP or sending data:');
    }
  };

  useEffect(() => {
    
    fetchIIP();
  },[])


  // testimonials

  const testimonials = [
      {
        "name": "Emily Johnson",
        "feedback": "CoWrite Blog always keeps me updated with the latest tech trends. I love the insightful and easy-to-understand articles!",
        "rating": 5
      },
      {
        "name": "Mark Thompson",
        "feedback": "A fantastic blog with a great mix of tech, lifestyle, and personal growth content. Highly recommended!",
        "rating": 5
      },
      {
        "name": "Sophia Martinez",
        "feedback": "The lifestyle hacks on CoWrite have genuinely improved my daily routine. It's my go-to blog for useful tips!",
        "rating": 4.5
      },
      {
        "name": "Daniel Lee",
        "feedback": "I appreciate the fresh perspectives on CoWrite. The personal growth stories are truly inspiring!",
        "rating": 5
      },
      {
        "name": "Jessica Brown",
        "feedback": "CoWrite Blog is well-organized and easy to navigate. The content is always relevant and engaging!",
        "rating": 4.5
      },
      {
        "name": "Michael Davis",
        "feedback": "I found so many practical tips on CoWrite. The articles are well-researched and incredibly helpful!",
        "rating": 5
      },
      {
        "name": "Rachel Wilson",
        "feedback": "CoWrite is my favorite blog! The content is diverse, and I always learn something new.",
        "rating": 5
      },
      {
        "name": "David Anderson",
        "feedback": "I love how CoWrite presents complex topics in a simple and engaging way. It makes learning enjoyable!",
        "rating": 4.5
      },
      {
        "name": "Olivia Carter",
        "feedback": "This blog is a must-read for anyone looking to stay informed and motivated. Keep up the great work!",
        "rating": 5
      },
      {
        "name": "Ethan Robinson",
        "feedback": "CoWrite Blog stands out with its quality content and fresh insights. I look forward to every new post!",
        "rating": 5
      }
    ]
  

  
  



  return (
   <>
    <div className="space-y ">
   
      {/* Hero Section */}
      <section className="text-white flex flex-col md:flex-row items-center relative py-16  text-center  herosvg">
        <div className="black"></div>
      <div className="z-10 p-5 flex flex-col  items-center">
                <h1 className="text-2xl md:text-6xl lg:text-8xl  hd">{"<h1>"}<span className="text-yellow-400 hd font-bold"> CoWrite </span> {"</h1>"}</h1>
                <h3 className="my-2 text-sm md:text-xl font-medium ">Where Creativity Meets Collaboration
                </h3>
                <p className="text-sm md:text-[16px] text-[#f4f4f4] lg:w-[50%] lg:text-lg mb-6  text-justify">
      At CoWrite Blog, we believe that the best ideas are born through 
      collaboration and creativity. Whether you're an aspiring writer, 
      a seasoned storyteller, or just someone looking for inspiration, 
      our platform is designed to spark your imagination. Dive into a 
      world of insightful articles, thought-provoking ideas, and a vibrant 
      community that celebrates the power of words. Let’s create, share, 
      and grow together—one story at a time.
      
      
                </p>
                <button className="border-b  border-[#2b2b2b]  font-medium px-6 py-3  transition-all  ">
                  <span className="flex justify-center text-sm  gap-3 hover:gap-5 hover:text-yellow-400 transition-all">Explore Articles <ArrowRightCircle size={'20px'}/></span>
                </button>
              </div>
        
      </section>

    
{/* What is CoWrite Blog */}
      <section className="py-16 px-2 md:px-5 flex flex-col md:flex-row items-center ">
      
      <div className="md:w-1/2 order-1 ">
          <img src={blogimg} alt="" />
      </div>
      
        <div className="md:w-1/2 md:order-1 space-y-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl  hq">What is CoWrite Blog?</h2>
          <p className="text-sm md:text-[16px] opacity-70 ">
          CoWrite Blog is a place where you can discover interesting and useful content on various topics like tech, lifestyle, and personal growth. Whether you're looking for the latest trends, helpful tips, or inspiring stories, we’ve got you covered. Our goal is to share knowledge in a simple and engaging way to keep you informed and inspired!
          </p>
        </div>

      </section>

{/* cons */}
<section className="py-16 md:px-5 px-2">

    {/* Content Section */}
    <div className="w-full px-2 md:px-5 space-y-4">
      <h2 className="text-2xl md:text-4xl lg:text-6xl hq ">
      CoWrite – Learn from Others, Share with the World
      </h2>
      <p className="text-sm opacity-70 md:text-[16px] mb-6 text-justify">
       CoWrite is a platform designed for those who love to explore new ideas and share knowledge with others. Whether you're discovering something new from someone or teaching valuable insights to others, CoWrite is the perfect space to connect, learn, and grow together.

Our blog covers a wide range of topics, from the latest tech trends to lifestyle hacks and personal growth insights. We believe that everyone has something valuable to share, and through CoWrite, we aim to create a community where knowledge flows freely. Whether you're a tech enthusiast looking to stay updated, a curious learner eager to explore new perspectives, or someone passionate about sharing experiences, CoWrite is here to inspire and empower you.

With expert-backed content, personal stories, and practical tips, CoWrite ensures that you’re always gaining meaningful knowledge. Our easy-to-read articles help simplify complex topics, making learning enjoyable and accessible for everyone.

At CoWrite, we encourage an open exchange of ideas, where learning is a two-way journey—you can pick up something new from someone and, in turn, teach and inspire others with your experiences. Join us in creating a space where curiosity meets expertise, and knowledge becomes a shared adventure.

Stay informed, stay inspired, and become a part of the CoWrite community—where every post brings a fresh perspective and an opportunity to grow. 🚀
      </p>
      <button className="border-b  border-[#2b2b2b]  font-medium text-sm p-3  transition-all  ">
            <span className="flex justify-center gap-3 hover:gap-5 hover:text-yellow-400 transition-all">Learn More <ArrowRightCircle size={"20px"}/></span>
          </button>
  </div>
</section>


{/* Popular Articles */}
<section className="py-16 md:px-5 px-2">
        <div className=" mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-6xl hq ">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8">
  {[
    { img: ai, title: "The Rise of AI in 2024", desc: "Explore how artificial intelligence is shaping the future of technology." },
    { img: productivity, title: "Productivity Hacks", desc: "Learn how to maximize your efficiency and achieve more each day." },
    { img: health, title: "Healthy Living Tips", desc: "Simple steps to maintain a balanced and healthy lifestyle." },
    { img: Construction, title: "The Future India!", desc: "Evaluation of Indian Construction and Architecture." }
  ].map((item, index) => (
    <div key={index} className="border p-1 rounded-lg overflow-hidden shadow-lg">
      <img src={item.img} alt={item.title} className="object-cover w-full h-48 md:h-56 lg:h-64 rounded-lg" />
      <div className="p-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{item.title}</h3>
        <p className="text-sm md:text-base opacity-70">{item.desc}</p>
      </div>
    </div>
  ))}
</div>

          
        </div>

      </section> 


{/* testimonials */}

<section className="py-16 md:px-5 px-2">

<h1 className="text-2xl md:text-4xl lg:text-6xl hq mb-4 ">Testimonials</h1>
  <div className="flex justify-center items-center w-screen relative">
    
    <Carousel>
      <div className="flex absolute bottom-[-50px] left-[50%]">
      <CarouselPrevious/>
      <CarouselNext/>
      </div>
    <CarouselContent className="md:space-x-4  flex items-center w-[90vw]">
    {
      testimonials.map((e, index)=> (
      
      <CarouselItem key={index} className="lg:basis-1/3 border rounded-md p-5 space-y-3 ml-4">
        <div className="space-y-2">
            <User2/>
            <div className="flex gap-2 ">
            <p className="text-blue-500">{e.name}</p>
            
            <p className="flex items-center gap-1">| {e.rating} <StarIcon fill="yellow" color="none" size={15}/></p>

            </div>
            
          </div>

          <div className="">
            <p className="text-sm">{e.feedback}</p>
          </div>
      </CarouselItem>
    ))}
    </CarouselContent>
    
</Carousel>


  
     
  </div>
</section>





      {/* FAQ Section */}
      <section className=" py-16 md:px-5 px-2">
        <div className="max-w-4xl  mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-6xl hq mb-6 md:text-center ">FAQs</h2>
          <div className="space-y-4">
            <div className=" p-2 rounded shadow-md border py-5">
              <h3 className="text-sm lg:text-[16px] font-bold">How often is content updated?</h3>
              <p className="text-sm opacity-50">
                We publish new articles weekly to ensure fresh and engaging
                content.
              </p>
            </div>
            <div className="p-4 rounded shadow-md border py-5">
              <h3 className="text-sm lg:text-[16px] font-bold">
                Can I contribute to CoWrite Blog?
              </h3>
              <p className="text-sm opacity-50">
                Yes, we welcome guest writers! Reach out to us to share your
                ideas.
              </p>
            </div>
            <div className="p-4 rounded shadow-md border py-5">
              <h3 className="text-sm lg:text-[16px] font-bold">What topics do you cover?</h3>
              <p className="text-sm opacity-50">
                We cover tech, lifestyle, productivity, personal growth, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Categories */}
      <section className="py-16 px-2 md:px-5 my-10 patternBg">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-4xl lg:text-6xl hq mb-8 text-center">
      Explore Fields
    </h2>
    <div className="flex flex-wrap justify-center gap-10 category">
      <div className="text-sm bg-blue-100 text-blue-800 px-4 py-2 rounded shadow">
        Technology
      </div>
      <div className="text-sm bg-green-100 text-green-800 px-4 py-2 rounded shadow">
        Environment
      </div>
      <div className=" text-sm bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow">
        Education
      </div>
      <div className="text-sm bg-red-100 text-red-800 px-4 py-2 rounded shadow">
        Healthcare
      </div>
      <div className="text-sm bg-purple-100 text-purple-800 px-4 py-2 rounded shadow">
        Art & Design
      </div>
      <div className="text-sm bg-pink-100 text-pink-800 px-4 py-2 rounded shadow">
        Social Work
      </div>
      <div className="text-sm bg-teal-100 text-teal-800 px-4 py-2 rounded shadow">
        Business
      </div>
      <div className="text-sm bg-orange-100 text-orange-800 px-4 py-2 rounded shadow">
        Sports
      </div>
      <div className="text-sm bg-gray-100 text-gray-800 px-4 py-2 rounded shadow">
        History
      </div>
      <div className="text-sm bg-indigo-100 text-indigo-800 px-4 py-2 rounded shadow">
        Astronomy
      </div>
      <div className="text-sm bg-cyan-100 text-cyan-800 px-4 py-2 rounded shadow">
        Science
      </div>
      <div className="text-sm bg-lime-100 text-lime-800 px-4 py-2 rounded shadow">
        Agriculture
      </div>
    </div>
  </div>
</section>

    </div>
   </>
  );
}

export default Home;
