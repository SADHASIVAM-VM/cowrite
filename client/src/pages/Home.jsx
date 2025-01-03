import React, { useEffect, useState } from "react";
import burger from '../assets/homeImg/hero.png'
import blogimg from '/blogimg2.webp'
import boyRunning from '../assets/homeImg/sec2.png'
import ai from '../assets/homeImg/article/ai.jpg'
import productivity from '../assets/homeImg/article/productvity.jpg'
import health from '../assets/homeImg/article/health.jpg'
import Construction from '../assets/homeImg/article/construction.jpg'
import { ArrowRightCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
const URLs = import.meta.env.VITE_BASEURL;
const Home = ()=> {
  const loaded = useUser().isLoaded
  if(loaded){
    const uuname =  useUser().user.fullName
  }
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
          name: uuname, 
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



  return (
    <div className=" ">
      {/* Hero Section */}
      <section className=" flex flex-col md:flex-row items-center relative py-16 px-8 text-center md:text-left  md:h-[600px]">
      
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold  hq">Welcome to <span className="text-yellow-400 hd">CoWrite</span> Blog</h1>
          <h3 className="my-2 opacity-70 hq text-2xl">Where Creativity Meets Collaboration
          </h3>
          <p className="text-lg mb-6 opacity-50 text-justify">
At CoWrite Blog, we believe that the best ideas are born through collaboration and creativity. Whether you're an aspiring writer, a seasoned storyteller, or just someone looking for inspiration, our platform is designed to spark your imagination. Dive into a world of insightful articles, thought-provoking ideas, and a vibrant community that celebrates the power of words. Let’s create, share, and grow together—one story at a time.


          </p>
          <button className="border-b  border-[#2b2b2b]  font-medium px-6 py-3  transition-all  ">
            <span className="flex justify-center gap-3 hover:gap-5 hover:text-yellow-400 transition-all">Explore Articles <ArrowRightCircle/></span>
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
        <img src={burger} alt="" className="object-cover w-[500px] md:w-[600px] md:h-[600px]" />
        </div>
      </section>

    
{/* What is CoWrite Blog */}
      <section className="py-16 px-8 flex flex-col md:flex-row items-center ">
      
      <div className="md:w-1/2 order-1 ">
          <img src={blogimg} alt="" />
      </div>
      
        <div className="md:w-1/2 md:order-1">
          <h2 className="text-4xl font-semibold mb-4 hq">What is CoWrite Blog?</h2>
          <p className="text-lg opacity-50 ">
            CoWrite Blog is your go-to platform for exploring diverse content.
            From tech trends and lifestyle hacks to personal growth stories and
            more, our mission is to empower readers with meaningful knowledge
            and fresh perspectives.
          </p>
        </div>

      </section>

{/* Popular Articles */}
  <section className="py-16 px-8">
        <div className=" mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-center hq ">
            Popular Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-white">

            <div className="md:w-[300px] h-[300px] relative">
              <img src={ai} alt="" className="object-cover w-full h-full rounded-lg  opacity-70"/>
              
           
        <div className="absolute top-0 p-10 ">
              <h3 className="font-semibold mb-2 text-4xl hq">The Rise of AI in 2024</h3>
              <p className="">
                Explore how artificial intelligence is shaping the future of
                technology.
              </p>
            </div>
            </div>

            <div className="md:w-[300px] h-[300px] relative">
              <img src={productivity} alt="" className="object-cover w-full h-full rounded-lg  opacity-70"/>
              
           
        <div className="absolute top-0 p-10">
              <h3 className="font-semibold mb-2 text-4xl hq">Productivity Hacks</h3>
              <p className="">
                Learn how to maximize your efficiency and achieve more each day..
              </p>
            </div>
            </div>

            <div className="md:w-[300px] h-[300px] relative">
              <img src={health} alt="" className="object-cover w-full h-full rounded-lg  opacity-70"/>
              
           
        <div className="absolute top-0 p-10">
              <h3 className="font-semibold mb-2 text-4xl hq">Healthy Living Tips</h3>
              <p className="">
              Simple steps to maintain a balanced and healthy lifestyle..
              </p>
            </div>
            </div>

            <div className="md:w-[300px] h-[300px] relative">
              <img src={Construction} alt="" className="object-cover w-full h-full rounded-lg  opacity-70"/>
              
           
        <div className="absolute top-0 p-10">
              <h3 className="font-semibold mb-2 text-4xl hq">The Future India !</h3>
              <p className="">
                Evaluation of Indian Construction and Architecture.
              </p>
            </div>
            </div>


          </div>
        </div>

      </section> 


      <section className="py-16">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
    {/* Content Section */}
    <div className="lg:w-1/2 px-6 text-center lg:text-left">
      <h2 className="text-5xl font-bold hq mb-4">
        Enjoy Life's Moments
      </h2>
      <p className="text-lg opacity-50 mb-6">
        Life is full of beautiful moments waiting to be cherished. From simple
        joys to grand adventures, let’s celebrate the experiences that make us
        smile.
      </p>
      <button className="border-b  border-[#2b2b2b]  font-medium px-6 py-3  transition-all  ">
            <span className="flex justify-center gap-3 hover:gap-5 hover:text-yellow-400 transition-all">Learn More <ArrowRightCircle/></span>
          </button>


    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 mt-8 lg:mt-0 px-6">
      <img
        src={boyRunning}
        alt="Enjoy Life"
        className="w-full"
      />
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className=" py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl hq font-semibold mb-6 text-center">FAQs</h2>
          <div className="space-y-4">
            <div className=" p-4 rounded shadow-md border">
              <h3 className="font-semibold">How often is content updated?</h3>
              <p className="opacity-50">
                We publish new articles weekly to ensure fresh and engaging
                content.
              </p>
            </div>
            <div className="p-4 rounded shadow-md border">
              <h3 className="font-semibold">
                Can I contribute to CoWrite Blog?
              </h3>
              <p className="opacity-50">
                Yes, we welcome guest writers! Reach out to us to share your
                ideas.
              </p>
            </div>
            <div className="p-4 rounded shadow-md border">
              <h3 className="font-semibold">What topics do you cover?</h3>
              <p className="opacity-50">
                We cover tech, lifestyle, productivity, personal growth, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Categories */}
      <section className="py-16 px-8 my-10 patternBg">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-5xl hq font-semibold mb-6 text-center">
      Explore Fields
    </h2>
    <div className="flex flex-wrap justify-center gap-10 category">
      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded shadow">
        Technology
      </div>
      <div className="bg-green-100 text-green-800 px-4 py-2 rounded shadow">
        Environment
      </div>
      <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow">
        Education
      </div>
      <div className="bg-red-100 text-red-800 px-4 py-2 rounded shadow">
        Healthcare
      </div>
      <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded shadow">
        Art & Design
      </div>
      <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded shadow">
        Social Work
      </div>
      <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded shadow">
        Business
      </div>
      <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded shadow">
        Sports
      </div>
      <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded shadow">
        History
      </div>
      <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded shadow">
        Astronomy
      </div>
      <div className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded shadow">
        Science
      </div>
      <div className="bg-lime-100 text-lime-800 px-4 py-2 rounded shadow">
        Agriculture
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
