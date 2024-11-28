import React, { useEffect, useState } from 'react';
import BlogCard from '../components/blogCard';
import { useUser } from '@clerk/clerk-react';
import loading from '../assets/loading/spinner.svg';
import { SkeletonCard } from '../components/skeleton';

const URLs = import.meta.env.VITE_BASEURL;

const BlogListing = () => {
  const { isLoaded } = useUser();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchNow, setSearchNow] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

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

  return (
    <>
      {!isLoaded ? (
        <div className="flex justify-center w-full h-[90vh] bg-opacity-70">
          <img src={loading} alt="Loading" className="w-16" />
        </div>
      ) : (
        <div>
          {/* Search and Filters */}
          <div className="flex p-2 md:p-5 gap-5">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 rounded-lg p-2 border-[#d8d8d8] flex-1"
              onChange={(e) => setSearchNow(e.target.value)}
            />
            <div className="flex flex-1 gap-2 md:gap-5 justify-end">
              <select
                className="border-2 rounded-lg p-2 border-[#d8d8d8]"
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
              >
                <option value="" selected>
                  Topics
                </option>
                <option value="ai">AI</option>
                <option value="fashion">Fashion</option>
                <option value="money">Money</option>
                <option value="technical">Technical</option>
              </select>
              <select
                className="border-2 rounded-lg p-2 border-[#d8d8d8]"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="popular">Popular</option>
                <option value="most_viewed">Most Viewed</option>
                <option value="most_liked">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div className="p-4">
            <h1 className="font-bold mb-2 text-[#413f3f]">Tags</h1>
            <div className="flex flex-wrap gap-5 mb-4">
              {['AI', 'Money', 'Technical', 'Code'].map((tag, idx) => (
                <div
                  key={idx}
                  className="bg-[#f4f4f4] p-3 text-center rounded-lg cursor-pointer"
                  onClick={() => setTopicFilter(tag.toLowerCase())}
                >
                  <p className="font-bold">{tag}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Blogs */}
          <h1 className="text-2xl md:text-4xl font-bold mb-5">Blogs:</h1>
          <div className="grid md:grid-cols-3 gap-5 p-2">
            {
              data && data.length > 0 ?
              (filteredData.length > 0 ? (
                filteredData.map((e) => (
                  <BlogCard
                    key={e._id}
                    title={e.title}
                    img={e.image}
                    date={e.postAt}
                    id={e._id}
                  />
                ))
              ) : (
                <div className="flex justify-center items-center w-screen">
                  <img src="/noresult.png" alt="No Results" className="object-fit" />
                </div>
              ))
              :<>
              <SkeletonCard/>
              <SkeletonCard/>
              <SkeletonCard/>
              </>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default BlogListing;
