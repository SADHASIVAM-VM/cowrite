import {ArrowUpRightFromCircle, Edit, Edit2, Trash, Trash2, User2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "./ui/alert-dialog"
import toast from 'react-hot-toast'
import { useMyContext } from '../config/CommonContext'



const defaultImage = "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg";


const BlogCard = ({item,id, del,EditContent,star}) => {
  console.log(item)
    const [delEditId, setDelEditId] = useState('');
  
    const BASE_URL = import.meta.env.VITE_BASEURL
    //console.log(BASE_URL)
    const navigate = useNavigate()
    const {editBlog, setEditBlog, setMenuSwitch, setStared} = useMyContext()
    console.log(star)
    setStared(star);
 

    const formatDate =(postDate)=>{
        const date = new Date(postDate);
        return new Intl.DateTimeFormat('en-GB',{
            day:"2-digit",
            month:"short"
        }).format(date)
    }

    // delete 
   console.log(delEditId);
    const handleDeleteBlog =async()=>{
       const response =  await fetch(`${BASE_URL}/post/${delEditId}`,
        {
          method:"DELETE"
        }
      )

      if(responsitem.ok){
        toast.success("BLOG Deleted")
        window.location.reload()
      }
    }
    const handleEditBlog = async()=>{
      setEditBlog(EditContent)
      setMenuSwitch("newpost")
    }
  return (
  
        <div className='flex flex-col hover:cursor-pointer' >
           
         <div className="">
           {
            del &&  <div className= "items-center flex gap-3 float-end mr-5">

                
            <div onClick={()=> setDelEditId(id)}>
            <AlertDialog>
<AlertDialogTrigger><Trash2 color='red'/></AlertDialogTrigger>
<AlertDialogContent>
<AlertDialogHeader>
  <AlertDialogTitle > Are you sure?</AlertDialogTitle>
  <AlertDialogDescription>
    This action cannot be undonitem. This will permanently delete your Blog
    and remove your data from our servers.
  </AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
  <AlertDialogCancel>Cancel</AlertDialogCancel>
  <AlertDialogAction><button onClick={handleDeleteBlog}>Continue</button></AlertDialogAction>
</AlertDialogFooter>
</AlertDialogContent>
            </AlertDialog>
            </div>

            <button onClick={()=>handleEditBlog(id)}><Edit color='blue' /></button>

        </div>
          }
         </div>

            <div className="min-h-[350px] flex flex-col gap-5 group" onClick={()=> navigate('/blog/'+item?._id)}>
            
            {/* img */}
            
            <div className="w-full relative ">
            {/* <img src={item.image.includes('uploads/')? `${BASE_URL}/${item.image}`: item.image} alt="" className='w-full object-cover h-[250px] rounded-2xl' /> */}
            <img src={item?.image} alt=""  className='w-full object-cover h-[250px] rounded-2xl' />
            
            {/* <LazyImage
             key={item._id}
          src={item.image}
          alt={`Image ${item + 1}`}
className='w-full object-cover h-[250px] rounded-2xl'
        
            /> */}
            <div className="bg-black/40  duration-300 transition-all  hidden group-hover:flex w-full h-full left-0 justify-center items-center absolute top-0 rounded-2xl">
              <span className='bg-black p-2 rounded-full animate-bounce'>
                <ArrowUpRightFromCircle color='white' className='animate-pulse'/>
              </span>
            </div>
            </div>
            
            {/* content */}
            
            <div className="w-full space-y-2">
              <p className=' font-medium text-gray-500 capitalize'>{item?.category || "General"}</p>
            
              <h3 className='text-xl xl:text-2xl font-bold text-blue-900'>{item?.title.length >45 ? (item?.title).slice(0,45)+'...'
              :item?.title}
              </h3>
            
              <p className='text-sm text-wrap text-gray-700'>{item?.description.length >150 ? (item?.description).slice(0,150)+'...'
              :item?.description}</p>
            
              {/* author */}
            
              <div className='flex items-center gap-2'>
                <User2 className='border rounded-full text-black' size={36}/>
                <div className="py-5">
                  <p className="text-[12px] text-gray-500">{item?.username || "sadhasivam"}</p>
                  <p className="text-[12px] text-gray-500">{ new Date(item?.postedAt).toDateString()  } </p>
                </div>
              </div>
            </div>
            
            </div>
            

     
        </div>
   
  )
}

export default BlogCard
