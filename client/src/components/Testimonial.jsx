import React from "react";
import { Play, User2 } from "lucide-react";
import { motion } from "motion/react";
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
   {
    name: "Lia",
    rating: 5,
    feedback:
      "I love the diversity of topics covered on CoWrite. Whether it’s personal growth or AI, there’s always something valuable. I’ve learned so much about productivity and tech trends from this blog. The design is clean and the writing is top-notch.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Label */}
        <div className="flex justify-center">
          <motion.span initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 0.6, ease: "easeOut" }} className="px-4 py-1 text-sm rounded-full bg-gray-800 border shadow-sm">
            Testimonials
          </motion.span>
        </div>

        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 0.6,delay:.2, ease: "easeOut" }}  className="text-2xl sm:text-3xl lg:text-5xl text-black font-semibold  text-center mt-6">
          People just like you <br />
          are already using <span className="bg-black px-3 rounded-xl text-[#e5ff75]">CoWrite</span>
        </motion.h2>

        {/* Cards */}
        <div  className="grid md:grid-cols-3 gap-6 mt-12">
      
    {
      testimonials.map((testimonial, index)=>
           <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 0.6, delay:.1 * index , ease: "easeOut" }}  className="bg-white border rounded-2xl  md:odd:row-span-2 lg:last:col-span-2 shadow-sm p-6 flex flex-col justify-between">
            <p className="text-gray-700 text-[14px] mb-4">
              “{testimonial.feedback}”
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <User2 className="bg-black rounded-full"/>
              <div>
                <p className="font-semibold text-gray-600 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.rating} ⭐ </p>
              </div>
            </div>
          </motion.div>
      )
    }


        </div>
      </div>
    </section>
  );
};

export default Testimonials;
