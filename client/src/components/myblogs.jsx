import React, { useContext, useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { useUser} from '@clerk/clerk-react'
import empty from '/empty.png'

const URLs = import.meta.env.VITE_BASEURL
const Myblogs = () => {

  
  const [data, setData] = useState();
  const user_id = useUser().user.id

  const delEdit =  true;

  useEffect(()=>{
  const loadData =async ()=>{
      const data = await fetch(URLs+'/user/'+user_id)
      const result = await(data.json())
      setData(result.data)
      
      
  }
  loadData()
  },[])

  console.log(data)
  return (
    <div>

    <h1 className='text-2xl md:text-4xl font-bold mb-5 hq '>My Blogs :</h1>
    <div className="grid md:grid-cols-3 gap-5">
        {
          data && data.length > 0 && data?.map((e)=> 
          <BlogCard title={e.title} key={e._id} 
          img={e.image} date={e.postAt} id={e._id} 
          del={delEdit} EditContent={e}/> )
          
        }
    </div>
    {
      data ==0 &&
      <p className='flex justify-center w-full'> <img src={empty} alt="" className='md:w-1/2'/></p>}
    </div>
  )
}

export default Myblogs
