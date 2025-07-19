import React, { useEffect, useMemo, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { useUser } from '@clerk/clerk-react';
import loading from '../assets/loading/spinner.svg';
import { SkeletonCard } from '../components/skeleton';
import { Search, User2 } from 'lucide-react';
import Navbar from '../components/Header';
import { Skeleton } from '../components/ui/skeleton';
import { useNavigate } from 'react-router-dom';
const URLs = import.meta.env.VITE_BASEURL;

const BlogListing = () => {
  const { isLoaded } = useUser();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchNow, setSearchNow] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
 const navigate = useNavigate()


  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${URLs}/post/`);
        const result = await response.json();
        setData(result.data || []);
        setFilteredData(result.data || []);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    let updatedData = [...data];

    // Search filtering
    if (searchNow) {
      updatedData = updatedData.filter((item) =>
        item?.title?.toLowerCase().includes(searchNow.toLowerCase())
      );
    }

    // Topic filtering
    if (topicFilter) {
      updatedData = updatedData.filter((item) =>
        item?.topic?.toLowerCase() === topicFilter.toLowerCase()
      );
    }

    // Sorting
    if (sortOption) {
      if (sortOption === 'popular') {
        updatedData.sort((a, b) => b.popularity - a.popularity); // Example: assuming "popularity" exists
      } else if (sortOption === 'most_viewed') {
        updatedData.sort((a, b) => b.views - a.views); // Assuming "views" exists
      } else if (sortOption === 'most_liked') {
        updatedData.sort((a, b) => b.likes - a.likes); // Assuming "likes" exists
      }
    }

    setFilteredData(updatedData);
  }, [searchNow, topicFilter, sortOption, data]);

  //random heroblog 

  const heroblog = useMemo(()=>{
    // return data[Math.round(Math.random(data?.length)*data?.length)]
    return data[11]
  })
  return (
  <div className='min-h-screen bg-white space-y-6 w-full max-w-6xl mx-auto  flex flex-col justify-self-center '>
    <Navbar />

    {/* Hero Header */}
    <div className="bg-[url('/br.jpg')] bg-cover bg-no-repeat bg-bottom relative h-[150px] text-white py-5 px-4 md:rounded-3xl">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold mb-4 ">Blog</h1>
        <p>Learn, Search, Read, Share</p>
        <div className="absolute -bottom-6 flex justify-center w-full left-0">
   <div className="relative w-[70%] lg:w-[60%]">
           <input
            type="text"
            placeholder="Search articles..."
            className=" w-full md:pl-10 p-3 pl-10 md:p-5 rounded-2xl shadow-md text-black focus:outline-none"
            onChange={(e) => setSearchNow(e.target.value)}
          />
          <Search size={20} className="absolute left-3 top-3 md:top-5 text-gray-500" />
   </div>
        </div>
      </div>
    </div>

{/* Category Tabs */}
    <div className="w-full flex justify-center mx-auto px-4 py-6">
      <div className="flex gap-4 overflow-scroll pb-3">
        {['All', 'Technology', 'News', 'Design', 'Branding', 'Web', 'Product', 'Dev'].map((tag) => (
          <button
            key={tag}
            onClick={() => setTopicFilter(tag === 'All' ? '' : tag.toLowerCase())}
            className={`px-4 py-2 text-sm ${
              topicFilter === tag.toLowerCase() || (tag === 'All' && topicFilter === '')
                ? 'bg-violet-400 rounded-full font-bold border-orange-500 text-white'
                : ' text-gray-600 shadow-none'
            } shadow`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>

 {
  heroblog == null ?
 <div className="flex flex-col lg:flex-row gap-6 space-y-3 p-2">
      <Skeleton className="h-[350px] w-full md:w-[60%] rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  :
  (
  <>
    {/* hero blog */}
<div className=" flex lg:flex-row flex-col gap-7 px-2" onClick={()=> navigate('/blog/'+heroblog?._id) }>

{/* img */}

<div className="xl:w-1/2 w-full">
{/* <img src={'/bb1.jpg'} alt="" className='w-full object-cover h-[350px] rounded-2xl' /> */}
<img src={heroblog?.image} alt="" className='w-full object-cover h-[350px] rounded-2xl' />
</div>

{/* content */}

<div className="xl:w-1/2 w-full space-y-3 flex justify-between flex-col">
  <p className='text-xl font-medium text-gray-500'>{heroblog?.category || "General"}</p>

  <h3 className='text-2xl xl:text-4xl font-bold text-blue-900'>{heroblog?.title}</h3>

  <p className='text-sm text-gray-700 text-justify'>{heroblog?.description}</p>

  {/* author */}

   <div className='flex items-center gap-2'>
                <User2 className='border rounded-full' size={36}/>
                <div className="py-5">
                  <p className="text-[12px] text-gray-500">{heroblog?.username || "sadhasivam"}</p>
                  <p className="text-[12px] text-gray-500">Apr 11, 2004</p>
                </div>
              </div>
</div>

</div>
</>)
 }



   {/* Blog Cards Grid */}
    <div className="w-full mx-auto mt-10 px-2">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.length > 0 ? 
        
          filteredData?.length > 0 ? (
            filteredData.map((e) => (
        
              <BlogCard key={e._id} item={e}/>)


            ))

           
            : (
            <div className="col-span-full flex justify-center items-center py-10">
              <img src="/noresult.png" alt="No Results" className=" opacity-60" />
            </div>
        )
         : (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) }
        
      </div>
           
    </div>



    <p className="text-sm text-center text-gray-400 my-10">love from CoWrite ❤️</p>

  </div>
);

};

export default BlogListing;
