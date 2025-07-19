import React from "react";
import Navbar from '../components/Header'
import { ArrowDownToDot, Asterisk, ChevronRightIcon, CloudLightningIcon, FingerprintIcon, LeafIcon, LucideMousePointer2, RssIcon, Sparkles, User2 } from "lucide-react";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import BlogCard from '../components/BlogCard'
import { useNavigate } from "react-router-dom";





const articles = [
  {
    "user_id": "user_2sF4b1lHoMcWdwTWIDx6woCrv8u",
    "_id": "blog_001",
    "title": "The Rise of AI in 2024",
    "content": "Explore how artificial intelligence is shaping the future of technology. From automation and machine learning to ethical considerations and economic impacts, AI continues to redefine the way we live, work, and connect.",
    "description": "Explore how artificial intelligence is shaping the future of technology.",
    "postedAt": "2025-07-16T10:00:00Z",
    "image": "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    "category": "Technology"
  },
  {
    "user_id": "user_2sF4b1lHoMcWdwTWIDx6woCrv8u",
    "_id": "blog_002",
    "title": "Productivity Hacks",
    "content": "Learn how to maximize your efficiency and achieve more each day by applying proven productivity techniques. From time-blocking and habit stacking to digital decluttering, discover strategies that help you stay focused and deliver results.",
    "description": "Learn how to maximize your efficiency and achieve more each day.",
    "postedAt": "2025-07-14T09:30:00Z",
    "image": "https://t4.ftcdn.net/jpg/02/44/34/09/360_F_244340965_p5a0I0Wlt06GurRnBB9uEN8GPYjXrgFX.jpg",
    "category": "Lifestyle"
  },
  {
    "user_id": "user_2sF4b1lHoMcWdwTWIDx6woCrv8u",
    "_id": "blog_003",
    "title": "Healthy Living Tips",
    "content": "Simple steps to maintain a balanced and healthy lifestyle include staying active, eating whole foods, getting enough sleep, and managing stress. This blog offers practical advice to boost your physical and mental well-being.",
    "description": "Simple steps to maintain a balanced and healthy lifestyle.",
    "postedAt": "2025-07-10T08:00:00Z",
    "image": "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    "category": "Health"
  },
]

const faqs = [
  {
    question: "How often is content updated?",
    answer: "We publish new articles weekly to ensure fresh and engaging content.",
  },
  {
    question: "Can I contribute to CoWrite Blog?",
    answer: "Yes, we welcome guest writers! Reach out to us to share your ideas.",
  },
  {
    question: "What topics do you cover?",
    answer: "We cover tech, lifestyle, productivity, personal growth, and more.",
  },
];

const tags = [
  "Technology", "Environment", "Education", "Healthcare", "Art & Design", "Social Work",
  "Business", "Sports", "History", "Astronomy", "Science", "Agriculture",
];

const testimonials = [
  {
    name: "Sophia Turner",
    rating: 5,
    feedback:
      "CoWrite has completely changed the way I approach blogging. The content is insightful and easy to digest. Highly recommend!",
  },
  {
    name: "Aarav Patel",
    rating: 4,
    feedback:
      "I’ve learned so much about productivity and tech trends from this blog. The design is clean and the writing is top-notch.",
  },
  {
    name: "Liam Johnson",
    rating: 5,
    feedback:
      "I love the diversity of topics covered on CoWrite. Whether it’s personal growth or AI, there’s always something valuable.",
  },
  {
    name: "Fatima Noor",
    rating: 4,
    feedback:
      "The articles are well-researched and thoughtfully written. I especially enjoy the lifestyle tips and expert insights.",
  },
  {
    name: "Carlos Mendoza",
    rating: 5,
    feedback:
      "An excellent platform for both readers and writers. I’ve even contributed a piece and the experience was fantastic!",
  },
];



const Home = () => {

  return (
    <div className="home">
      <div className="max-w-7xl mx-auto">
        <Navbar/>
      </div>
      <div className="">
        <HeroSection />
        <AboutSection />
        {/* <ContentSection /> */}
        <PopularArticles />
        <FaqSection />
        <CategoryTags />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;


export const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className=" z-40">
      <div className="bg-gradient-to-b from-black via-purple-900 to-white py-32 relative text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Stories that
          <span className="block text-purple-300 animate-bounce">inspire</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-white/80 font-bold mb-12 max-w-2xl mx-auto leading-relaxed ">
          Discover thoughtful articles about design, technology, and the creative process from our community of writers.
        </p>

        <div className="flex gap-4 justify-center items-center">
          <button className="bg-violet-500 text-sm md:text-md  text-white px-8 py-4 rounded-lg hover:bg-violet-400  transition-all duration-200 flex items-center gap-2 font-medium" onClick={()=> navigate('/blogs')}>
            Start Reading
            <ArrowRight size={20} className="animate-pulse" />
          </button>
          <button className="text-white text-sm md:text-md  px-8 py-4 rounded-lg border border-gray-200 hover:text-black hover:bg-gray-50 transition-all duration-200 font-medium" onClick={()=> navigate('/blogs')}>
            Browse Topics
          </button>
        </div>
      </div>
    </section>
  );
};

export const ContentSection = () => (
  <section className="md:px-5 px-2 py-5">
    <h2 className="text-2xl md:text-4xl lg:text-6xl hq">
      CoWrite – Learn from Others, Share with the World
    </h2>
    <p className="text-sm opacity-70 md:text-[16px] mb-6">
      {/* full paragraph content from original */}
    </p>
  </section>
);



export const PopularArticles = () => {

  const navigate = useNavigate()
  return(
  <section className="py-20 px-4 md:px-12 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          The Best Articles <br />
          <span className="text-gray-500">Tailored Just for You</span>
        </h2>
        <button className="text-white flex items-center gap-2 text-xs bg-violet-400 px-3 py-2 rounded hover:bg-gray-800 text-sm" onClick={()=> navigate('/blogs')}>
          View All <ChevronRightIcon size={18}/>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item, index) => (
          <BlogCard key={index} item={item} onClick={()=> navigate('/blogs')}/>
        ))}
      </div>
    </div>
  </section>
);


}
// export const About = () => {
//   return (
//     <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">About Cowrite</h2>
//         <p className="text-lg leading-relaxed text-gray-700 mb-4">
//           Cowrite is a collaborative writing platform designed to help you focus on what matters most — your words. Whether you're crafting a personal blog, creating documentation, or publishing long-form content, Cowrite offers a seamless and distraction-free environment to bring your ideas to life.
//         </p>
//         <p className="text-lg leading-relaxed text-gray-700 mb-4">
//           Built with speed, simplicity, and productivity in mind, Cowrite supports intelligent writing suggestions, clean formatting, and real-time collaboration. Its minimalist UI is built to get out of your way so you can concentrate on writing and editing with clarity. With smart autosave, Markdown support, and an intuitive editor experience, you can publish faster and revise with confidence.
//         </p>
//         <p className="text-lg leading-relaxed text-gray-700 mb-4">
//           We've recently introduced UI improvements and several editor enhancements that make it even easier to navigate, format, and manage your content. Whether you're writing alone or with a team, Cowrite scales with your workflow.
//         </p>
//         <p className="text-lg leading-relaxed text-gray-700">
//           Cowrite is more than just a blog tool — it's a writing companion built for clarity, focus, and flow. Try it out, and let your writing speak for itself.
//         </p>
//       </div>
//     </section>
//   );
// };



export const AboutSection = () => (
  <section className="px-4 md:px-12  py-20 bg-white flex flex-col md:flex-row items-center justify-center gap-10">
    <div className="md:w-1/2">
      <img src={'/pr3d.jpg'} alt="About CoWrite Blog" className=" w-full object-cover rounded-3xl" />
    </div>
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Your Story Deserves to Be Told, <br />
        <span className="text-gray-600">CoWrite Makes It Easy.</span>
      </h2>
      <div className="max-w-5xl ">
       
       <div className="flex items-start gap-2">
           <p className="mt-1 bg-green-200 rounded-full p-1">
            <Sparkles className="text-green-400"  size={'22px'}/>
           </p>
<p className="text-lg leading-relaxed text-gray-700 mb-4">
         Cowrite is a collaborative writing platform designed to help you focus on what matters most — your words. Whether you're crafting a personal blog, creating documentation, or publishing long-form content, Cowrite offers a seamless and distraction-free environment to bring your ideas to life.
        </p>
       </div>
        
        <div className="flex items-start gap-2">
           <p className="mt-1 bg-yellow-400 rounded-full p-1">
            <CloudLightningIcon className="text-yellow-200" size={'22px'}/>
           </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Built with speed, simplicity, and productivity in mind, Cowrite supports intelligent writing suggestions, clean formatting, and real-time collaboration. Its minimalist UI is built to get out of your way so you can concentrate on writing and editing with clarity. With smart autosave, Markdown support, and an intuitive editor experience, you can publish faster and revise with confidence.
        </p>
      </div>

      <div className="flex items-start gap-2">
           <p className="mt-1 bg-red-200 rounded-full p-1">
            <FingerprintIcon className="text-red-400"  size={'22px'}/>
           </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Cowrite is more than just a blog tool — it's a writing companion built for clarity, focus, and flow. Try it out, and let your writing speak for itself.
        </p>
        </div>
      </div>
    </div>
  </section>
);




export const FaqSection = () => (
  <section className="py-16 md:px-5 px-2 bg-white text-black">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="p-4 rounded shadow-md border py-5">
            <h3 className="text-sm lg:text-[16px] font-bold">{faq.question}</h3>
            <p className="text-sm opacity-50">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);



export const CategoryTags = () => {
  return (
    <section className="py-16 px-2 md:px-5  patternBg bg-white text-black">
<div className="max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Explore Fields</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {tags.map((tag, i) => (
        <div
          key={i}
          className={`text-sm px-4 py-2 rounded shadow ${
            i % 2 === 0 ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
</div>
    </section>
  );
};

