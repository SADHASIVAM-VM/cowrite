import React from "react";
import Navbar from "../components/Header";
import {
  ChevronRightIcon,
  CloudLightningIcon,
  FingerprintIcon,
  MoveRight,
  RssIcon,
  Sparkles,
  BookOpen,
  DollarSign,
  ShoppingCart,
  Sun,
  Factory,
  Leaf,
  PencilLine, MessageCircle,
} from "lucide-react";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonial";
import { delay, motion } from "motion/react"

const articles = [
  {
    user_id: "user_2sF4b1lHoMcWdwTWIDx6woCrv8u",
    _id: "blog_001",
    title: "The Rise of AI in 2024",
    content:
      "Explore how artificial intelligence is shaping the future of technology. From automation and machine learning to ethical considerations and economic impacts, AI continues to redefine the way we live, work, and connect.",
    description:
      "Explore how artificial intelligence is shaping the future of technology.",
    postedAt: "2025-07-16T10:00:00Z",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    category: "Technology",
  },
  {
    user_id: "user_2sF4b1lHoMcWdwTWIDx6woCrv8u",
    _id: "blog_002",
    title: "Productivity Hacks",
    content:
      "Learn how to maximize your efficiency and achieve more each day by applying proven productivity techniques. From time-blocking and habit stacking to digital decluttering, discover strategies that help you stay focused and deliver results.",
    description:
      "Learn how to maximize your efficiency and achieve more each day.",
    postedAt: "2025-07-14T09:30:00Z",
    image:
      "https://t4.ftcdn.net/jpg/02/44/34/09/360_F_244340965_p5a0I0Wlt06GurRnBB9uEN8GPYjXrgFX.jpg",
    category: "Lifestyle",
  },
  {
    user_id: "user_2sF4b1lHoMcWdwTWIDx6woCrv8u",
    _id: "blog_003",
    title: "Healthy Living Tips",
    content:
      "Simple steps to maintain a balanced and healthy lifestyle include staying active, eating whole foods, getting enough sleep, and managing stress. This blog offers practical advice to boost your physical and mental well-being.",
    description: "Simple steps to maintain a balanced and healthy lifestyle.",
    postedAt: "2025-07-10T08:00:00Z",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    category: "Health",
  },
];

const faqs = [
  {
    question: "How often is content updated?",
    answer:
      "We publish new articles weekly to ensure fresh and engaging content.",
  },
  {
    question: "Can I contribute to CoWrite Blog?",
    answer:
      "Yes, we welcome guest writers! Reach out to us to share your ideas.",
  },
  {
    question: "What topics do you cover?",
    answer:
      "We cover tech, lifestyle, productivity, personal growth, and more.",
  },
];

const tags = [
  "Technology",
  "Environment",
  "Education",
  "Healthcare",
  "Art & Design",
  "Social Work",
  "Business",
  "Sports",
  "History",
  "Astronomy",
  "Science",
  "Agriculture",
];

const categories = [
  {
    title: "Education",
    articleCount: 4,
    description:
      "Explore innovative teaching methods and tools transforming the education sector.",
    iconBackgroundColor: "bg-purple-100",
    iconSrc: null, // Replaced with Lucide icon
    iconComponent: "BookOpen", // Lucide icon name
    color: "bg-purple-50",
  },
  {
    title: "Finance",
    articleCount: 6,
    description:
      "Learn about cutting-edge solutions shaping the future of financial services.",
    iconBackgroundColor: "bg-teal-100",
    iconSrc: null,
    iconComponent: "DollarSign", // Lucide icon name
    color: "bg-teal-50",
  },
  {
    title: "Retail",
    articleCount: 3,
    description:
      "Discover trends and strategies boosting e-commerce and retail experiences.",
    iconBackgroundColor: "bg-pink-100",
    iconSrc: null,
    iconComponent: "ShoppingCart", // Lucide icon name
    color: "bg-pink-50",
  },
  {
    title: "Energy",
    articleCount: 5,
    description:
      "Stay updated on sustainable technologies driving the energy industry forward.",
    iconBackgroundColor: "bg-yellow-100",
    iconSrc: null,
    iconComponent: "Sun", // Lucide icon name
    color: "bg-yellow-50",
  },
  {
    title: "Manufacturing",
    articleCount: 4,
    description:
      "Gain insights into automation and smart solutions in manufacturing processes.",
    iconBackgroundColor: "bg-indigo-100",
    iconSrc: null,
    iconComponent: "Factory", // Lucide icon name
    color: "bg-indigo-50",
  },
  {
    title: "Agriculture",
    articleCount: 3,
    description:
      "Explore advancements in precision farming and agricultural technology.",
    iconBackgroundColor: "bg-green-100",
    iconSrc: null,
    iconComponent: "Leaf", // Lucide icon name
    color: "bg-green-50",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="">
        <HeroSection />
         <ValueProposition/>
         
        <PopularArticles />
        <Testimonials />
        <CategoryTags />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section  className="relative z-40 h-[90vh]">

<div className="absolute top-0 lef-0 w-full h-full">
  <img src="https://www.chromethemer.com/download/hd-wallpapers/dark-space-3840x2160.jpg" alt="" className="w-full h-full object-cover object-center"/>
</div>

<motion.div initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{once:true}}
            transition={{ duration: 0.6 , delay:.6, ease: "easeOut" }} className="absolute top-0 lef-0 w-full h-full bg-black/50">

</motion.div>
      {/* Background gradient */}
      <div className=" py-32 relative text-center text-white overflow-hidden">
        {/* Floating Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-40 h-40 bg-[#e5ff75]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-24 w-52 h-52 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-300"></div>
        </div>

        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: 50 }}       
      whileInView={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.6, delay: 0.3 }} 
      viewport={{ once: true }}   className="relative text-5xl md:text-6xl lg:text-7xl font- mb-6 tracking-tight">
          Endless Ideas. One Place to
          <span className="block tet bg-clip-text text-[#e5ff75] animate-gradient">
            Explore...
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 50 }}       
      whileInView={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.6, delay: 0.6 }} 
      viewport={{ once: true }}   className="relative text-md lg:text-xl font-light text-white/80 mb-12 max-w-4xl mx-auto ">
          From trending topics to personal stories, our blog is where curiosity
          meets community. Read, comment, and share your own experiences while
          learning from others.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 50 }}       
      whileInView={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.6, delay: 0.8, ease:"backInOut" }} 
      viewport={{ once: true }}   className="relative flex justify-center items-center">
          <button
            className="bg-orange-500 text-sm md:text-md text-white px-6 py-3 rounded-lg hover:bg-orange-400 transition-all duration-200 flex items-center gap-2 font-medium shadow-sm "
            onClick={() => navigate("/blogs")}
          >
            Start Reading
            <ArrowRight size={20} className="animate-pulse" />
          </button>
        
        </motion.div>
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
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay:.3, ease: "easeOut" }} viewport={{ once: true }} className="text-3xl md:text-5xl text-gray-900">
            The Best Articles <br />
            <span className="text-gray-500 font-semibold">
              Tailored Just for You
            </span>
          </motion.h2>
          <button
            className="text-white flex items-center gap-2 text-xs bg-violet-400 px-3 py-2 rounded hover:bg-gray-800 text-sm"
            onClick={() => navigate("/blogs")}
          >
            see all <ChevronRightIcon size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <BlogCard
              key={index}
              item={item}
              onClick={() => navigate("/blogs")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutSection = () => (
  <section className="px-4 md:px-12  py-20 bg-white flex flex-col md:flex-row items-center justify-center gap-10">
    <div className="md:w-1/2">
      <img
        src={"/pr3d.jpg"}
        alt="About CoWrite Blog"
        className=" w-full object-cover rounded-3xl"
      />
    </div>
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Your Story Deserves to Be Told, <br />
        <span className="text-gray-600">CoWrite Makes It Easy.</span>
      </h2>
      <div className="max-w-5xl ">
        <div className="flex items-start gap-2">
          <p className="mt-1 bg-green-200 rounded-full p-1">
            <Sparkles className="text-green-400" size={"22px"} />
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Cowrite is a collaborative writing platform designed to help you
            focus on what matters most — your words. Whether you're crafting a
            personal blog, creating documentation, or publishing long-form
            content, Cowrite offers a seamless and distraction-free environment
            to bring your ideas to life.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <p className="mt-1 bg-yellow-400 rounded-full p-1">
            <CloudLightningIcon className="text-yellow-200" size={"22px"} />
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Built with speed, simplicity, and productivity in mind, Cowrite
            supports intelligent writing suggestions, clean formatting, and
            real-time collaboration. Its minimalist UI is built to get out of
            your way so you can concentrate on writing and editing with clarity.
            With smart autosave, Markdown support, and an intuitive editor
            experience, you can publish faster and revise with confidence.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <p className="mt-1 bg-red-200 rounded-full p-1">
            <FingerprintIcon className="text-red-400" size={"22px"} />
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Cowrite is more than just a blog tool — it's a writing companion
            built for clarity, focus, and flow. Try it out, and let your writing
            speak for itself.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const CategoryTags = () => {
  return (
    <section className="py-16 px-2 md:px-5  patternBg bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true}}
                    transition={{ duration: 0.6, ease: "easeOut" }} className="text-2xl sm:text-3xl lg:text-5xl text-center font-semibold text-gray-900 mb-6">
          Explore Fields
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              indx={index}
              title={category.title}
              articleCount={category.articleCount}
              description={category.description}
              iconBackgroundColor={category.iconBackgroundColor}
              iconSrc={category.iconSrc}
              clr={category.color}
              iconComponent={category.iconComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CategoryCard = ({
  indx,
  title,
  articleCount,
  description,
  iconBackgroundColor,
  clr,
  iconComponent,
}) => {
  const IconComponent = {
    BookOpen,
    DollarSign,
    ShoppingCart,
    Sun,
    Factory,
    Leaf,
  }[iconComponent];
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.6, delay:.1 * indx , ease: "easeOut" }}
      className={`p-6 sticky top-2 rounded-lg shadow-sm flex flex-col justify-between   ${clr} lg:last:col-span-2 ${
        indx == 2 || indx == 3 ? "lg:row-span-2" : "lg:row-span-1"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{articleCount} articles</p>
        </div>
        <a
          href="/blogs"
          className="text-gray-500 hover:text-gray-900 bg-white p-2 rounded-full"
        >
          <MoveRight color="black" />
        </a>
      </div>
      <p className="text-gray-600 text-sm sm:text-lg mb-4">{description}</p>
      <div className={` rounded-lg flex items-center justify-center`}>
        {/* Replace with your actual icon component or image */}
        <IconComponent
          className={`${iconBackgroundColor} rounded-full p-1  size-12 text-gray-700`}
        />
      </div>
    </motion.div>
  );
};



export const features = [
  {
    icon: <PencilLine className="w-8 h-8 text-[#e5ff75]" />,
    title: "Share Stories",
    desc: "Write and share your unique experiences, ideas, and insights with a curious audience.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-[#e5ff75]" />,
    title: "Join Conversations",
    desc: "Engage with writers and readers through comments, discussions, and thoughtful feedback.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#e5ff75]" />,
    title: "Learn & Explore",
    desc: "Discover new perspectives, trending topics, and real-life lessons from diverse voices.",
  },
];


// value propogation

const ValueProposition = () => {
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // spacing between animations
    },
  },
};

// Variants for each item
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};



   return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-900"
          >
            Why Read Here?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-600 mt-3 max-w-2xl mx-auto"
          >
            Our platform is built for curious minds who want to connect, share,
            and grow through stories and conversations.
          </motion.p>
        </div>

        {/* Features Grid with staggered children */}
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <motion.div initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration:.3, delay: index * 0.1 , ease: "linear" }} className="flex items-center justify-center w-14 h-14 rounded-full bg-black mb-4">
                {feature.icon}
              </motion.div>
              <motion.h3 initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration:.3, delay: index * 0.2 , ease: "linear" }} className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </motion.h3>
              <motion.p initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration:.3, delay: index * 0.2 , ease: "linear" }} className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


