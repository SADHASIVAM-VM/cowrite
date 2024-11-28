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


const URLs = import.meta.env.VITE_BASEURL
const SingleBlog = () => {
  const {id} = useParams()
  // console.log(id)
  const [data, setData] =useState()
useEffect(()=>{
  const load =async ()=>{
     const fetchUrl =  await fetch(URLs+'/post/'+id);
     const result = await fetchUrl.json()
     const data = result.data[0]  
     setData(data)   
  }
  load();
},[])
console.log(data)
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
      <BreadcrumbPage> <p className='logo '>{data.title.length >30 ? `${data.title.slice(0, 30)}....`:data.title}</p></BreadcrumbPage>
    </BreadcrumbItem>
    <BreadcrumbItem>
    <BreadcrumbSeparator>
     | <span className='hq'>{formatDate(data.postAt)}</span> | 5 min read
    </BreadcrumbSeparator></BreadcrumbItem>
  </BreadcrumbList>
    </Breadcrumb>

  
     </div>

       <h1 className='text-4xl'>{data.title}</h1>
        <p className='opacity-80 my-5 mb-10 '>{data.description}</p>

      <div className="flex flex-col md:flex-row gap-5 relative">
        <div className="md:w-3/4 order-2 md:order-1">
       
        <div className="opacity-70" dangerouslySetInnerHTML={{__html: data.content}} >
    
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
