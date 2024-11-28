import {Edit, Edit2, Trash, Trash2 } from 'lucide-react'
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
  




// import blog from '../assets/blogexp.webp'
const BlogCard = ({title, img, date, id, del}) => {
    const [delEditId, setDelEditId] = useState('');
   // console.log(img)
    const URLs = import.meta.env.VITE_BASEURL
    //console.log(URLs)
    const navigate = useNavigate()
 


    const formatDate =(postDate)=>{
        const date = new Date(postDate);
        return new Intl.DateTimeFormat('en-GB',{
            day:"2-digit",
            month:"short",
            year:'numeric'
        }).format(date)
    }

    // delete 

    const handleDeleteBlog =async()=>{
       const response =  await fetch(`${URLs}/post/${delEditId}`,
        {
          method:"DELETE"
        }
      )

      if(response.ok){
        toast.success("BLOG Deleted")
        window.location.reload()
      }
    }
    const handleEditBlog = async()=>{
      const response =  await fetch(`${URLs}/post/${delEditId}`,
        {
          method:"PUT"
        }
      )

    }
  return (
  
        <div className=""  >
           
          {
            del &&  <div className= " flex gap-3 float-end mr-5 mb-3">

                
            <div onClick={()=> setDelEditId(id)}>
            <AlertDialog>
<AlertDialogTrigger><Trash2 color='red'/></AlertDialogTrigger>
<AlertDialogContent>
<AlertDialogHeader>
  <AlertDialogTitle > Are you absolutely sure?</AlertDialogTitle>
  <AlertDialogDescription>
    This action cannot be undone. This will permanently delete your account
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

            <button><Edit color='blue' /></button>
        </div>
          }

            <div className="img p-2 hover:p-1 border-2 border-[#d8d8d8] hover:border-[#84ff71f7] rounded-md w-full md:h-[300px]  inline-flex transition-all" onClick={()=> navigate('/blog/'+id)}>
                    <img src={`${URLs}/`+img} alt="" className='object-contain rounded-md w-full h-full transition-all cursor-pointer' />
            </div>
            <div className="flex space-y-1 flex-col mt-2">
                <p className="font-bold hq text-2xl ">
                    {title}
                </p>
                <p className='opacity-50 text-sm font-mono font-bold'>{date && formatDate(date)}</p>
            </div>
        </div>
   
  )
}

export default BlogCard
