import React, { useState } from 'react'
import PostPanel from '../components/PostPanel'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { ArrowUpRight, MessageCircle, PenSquareIcon, PlusCircle, Scale3D } from 'lucide-react'
import Myblogs from '../components/myblogs'
import { useUser } from '@clerk/clerk-react'
import { useMyContext } from '../config/CommonContext'

const PostArea = () => {
   const username = useUser().user.username
  
  const {MenuSwitch, setMenuSwitch} = useMyContext();
  return (
    <div className='flex flex-col md:flex-row gap-5 relative'>
      {/* menu condition */}
      {/* <MenuIcon onclick={()=> toggle}/> */}
      <aside className='hidden  h-[90vh] md:w-[300px] border-r-2 sticky top-0  md:flex flex-col justify-between p-5 z-10'>
    
      <div className="flex gap-5 flex-col overflow-hidden">
       <button className='bg-[#f8d1ff] rounded-lg px-5 py-2 border  flex gap-2 items-center' onClick={()=> setMenuSwitch("newpost")}><PlusCircle />New Post</button>
       <button className=' rounded-lg px-5 py-2 border border-[#d8d8d8] flex gap-2 items-center' onClick={()=> setMenuSwitch("myblog")}><PenSquareIcon/> My Blogs</button>
       <button className=' rounded-lg px-5 py-2 border border-[#d8d8d8] flex gap-2 items-center' onClick={()=> setMenuSwitch("newpost")}><Scale3D/> Insights</button>
       <button className=' rounded-lg px-5 py-2 border border-[#d8d8d8] flex gap-2 items-center' onClick={()=> setMenuSwitch("newpost")}><MessageCircle/> Comments</button>
      </div>

{/* profile */}
<div className="absolute bottom-5 bg-white rounded-lg px-5 py-2 border border-[#d8d8d8] flex gap-2 items-center">
<Avatar >
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
<h1 className='flex gap-3'>{username}<ArrowUpRight/></h1>
</div>
        
      </aside>

      <div className="md:w-3/4 min-h-[70vh] overflow-scroll mb-10">
      {MenuSwitch == "newpost" && <PostPanel/>}
      {MenuSwitch == "myblog" && <Myblogs/>}
      
      </div>
    </div>
  )
}

export default PostArea
