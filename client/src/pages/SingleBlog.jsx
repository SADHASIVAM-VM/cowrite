import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"

import CommentBox from '../components/comment'
import { useParams } from 'react-router-dom'
import loading from '../assets/loading/spinner.svg'
import { Star, StarOff } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'
import { useMyContext } from '../config/CommonContext'
import toast from 'react-hot-toast'


const URLs = import.meta.env.VITE_BASEURL

const SingleBlog = () => {
  const user_id = useUser().user.id;
console.log(user_id)
  const {id} = useParams()
  // console.log(id)
  const [data, setData] =useState()
  const {stared,setStared} = useMyContext();
  


useEffect(()=>{
  const load =async ()=>{
     const fetchUrl =  await fetch(URLs+'/post/'+id);
     const result = await fetchUrl.json()
     const data = result.data[0]  
     setData(data)   
  }
  load();

},[])

// save blog or postBlog
const saveBlog =async()=>{
  setStared(true)
  const data ={
      saveBlogId:id,
      user_id:user_id,
      star:true
    
  }
 await fetch(`${URLs}/save`,{
  method:"POST",
  headers:{
    'Content-Type': 'application/json' 
  },
  body:JSON.stringify(data)
 }).then((res)=> {
  if(res.status == "400"){
     toast.error("already Exist");
  }
  else{
    toast.success("Successfully Saved");
  }
 })

}

// remove blog from Saved
const removeBlog =async()=>{
  setStared(false)
  console.log("delete")
 
 await fetch(`${URLs}/save/${id}?user_id=${user_id}`,
  {method:"DELETE"})
  .then((res)=> (res.json()))
  .then((res)=> toast.success(res.msg))
  .catch(()=> toast.error("err"))
}


// date format
const formatDate =(postDate)=>{
  const date = new Date(postDate);
  return new Intl.DateTimeFormat('en-GB',{
      day:"2-digit",
      month:"short",
      year:'numeric'
  }).format(date)
}
  return (
    <>
    {
      data && data != null ?
      <div className='p-5'>
     <div className="my-5 ">
     <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage> <p className=' '>{data.title.length >30 ? `${data.title.slice(0, 30)}....`:data.title}</p></BreadcrumbPage>
    </BreadcrumbItem>    
  </BreadcrumbList>
    </Breadcrumb>

  
     </div>

       <div className="flex items-center justify-between gap-5">
       <h1 className='text-2xl font-bold text-wrap'>{data.title}</h1>
       <span className='pr-5' ><Star fill={stared&&stared?'red':''}  onClick={stared != true ? saveBlog : removeBlog}/></span>
       </div>
        <p className='opacity-70  my-5 mb-10 '>{data.description}</p>

      <div className="flex flex-col md:flex-row gap-5 relative">
        <div className="md:w-3/4 order-2 md:order-1">
       
        <div className="opacity-70 w-full" dangerouslySetInnerHTML={{__html: data.content}} >
    
        </div>
        </div>

        <div className="md:w-1/4 order-1 relative">
        <img src={`${URLs}/${data.image}`} alt="image" className='w-full border rounded-md shadow-sm sticky top-5'/>
        </div>
      </div>

      <CommentBox id={id} key={id}/>
    </div>
    : <div className="flex justify-center items-center w-full h-[90vh] ">
      <img src={loading} alt="" className='w-16'/>
    </div>

}</>
  )
}

export default SingleBlog
