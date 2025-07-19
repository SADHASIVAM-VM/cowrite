import React from 'react'

import PostPanel from '../components/PostPanel'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip"

import { ArrowUpRight, LucidePanelTopClose, MessageCircle, PenSquareIcon, PlusCircle, Scale3D } from 'lucide-react'

import Myblogs from '../components/myblogs'
import { useUser } from '@clerk/clerk-react'
import { useMyContext } from '../config/CommonContext'
import Navbar from '../components/Header'

const PostArea = () => {
   const username = useUser().user.username
  
  const {MenuSwitch, setMenuSwitch} = useMyContext();
  return (
  <>
  <div className="px-5">
    <Navbar/>
</div>
    <div className='flex flex-col md:flex-row gap-5 relative'>
      

      {/* menu condition */}
      {/* <MenuIcon onclick={()=> toggle}/> */}

      

      <div className="flex overflow-scroll py-5 gap-2 md:gap-5 md:hidden  px-2 md:px-5">
     
      <TooltipProvider>
      <Tooltip>
    <TooltipTrigger>
    <button className={`${MenuSwitch == "newpost" && `border-yellow-400` } rounded-lg px-5 py-2 border  `} onClick={()=> setMenuSwitch("newpost")}><PlusCircle /></button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Create Post</p>
    </TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger>
    <button className={`${MenuSwitch == "myblog" && `border-yellow-400` } rounded-lg px-5 py-2 border`} onClick={()=> setMenuSwitch("myblog")}><PenSquareIcon/> </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>My Blogs</p>
    </TooltipContent>
  </Tooltip>
      
 
  <Tooltip>
    <TooltipTrigger>
    <button className={`${MenuSwitch == "insight" && `border-yellow-400` } rounded-lg px-5 py-2 border`} onClick={()=> setMenuSwitch("insight")}><Scale3D/> </button>

    </TooltipTrigger>
    <TooltipContent>
      <p>insight</p>
    </TooltipContent>
  </Tooltip>
 
  <Tooltip>
    <TooltipTrigger>
    <button className={`${MenuSwitch == "comment" && `border-yellow-400` } rounded-lg px-5 py-2 border `} onClick={()=> setMenuSwitch("comment")}><MessageCircle/> </button>

    </TooltipTrigger>
    <TooltipContent>
      <p>Comments</p>
    </TooltipContent>
  </Tooltip>


      </TooltipProvider>


      </div>
      <aside className='hidden  h-[90vh] md:w-[300px] border-r-2 sticky top-0  md:flex flex-col justify-between p-5 z-10'>
    
      <div className="flex gap-5 flex-col overflow-hidden">
       <button className={`${MenuSwitch == "newpost" && `border-yellow-400` } rounded-lg px-5 py-2 border  flex gap-2 items-center`}  onClick={()=> setMenuSwitch("newpost")}><PlusCircle />New Post</button>
       <button className={`${MenuSwitch == "myblog" && `border-yellow-400` } rounded-lg px-5 py-2 border  flex gap-2 items-center`}  onClick={()=> setMenuSwitch("myblog")}><PenSquareIcon/> My Blogs</button>
       <button className={`${MenuSwitch == "insight" && `border-yellow-400` } rounded-lg px-5 py-2 border  flex gap-2 items-center`}  onClick={()=> setMenuSwitch("insight")}><Scale3D/> Insights</button>
       <button className={`${MenuSwitch == "comment" && `border-yellow-400` } rounded-lg px-5 py-2 border  flex gap-2 items-center`}  onClick={()=> setMenuSwitch("comment")}><MessageCircle/> Comments</button>
      </div>

{/* profile */}
<div className="absolute bottom-5 bg-transparent rounded-lg px-5 py-1  border flex gap-2 items-center">
<Avatar >
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>co</AvatarFallback>
</Avatar>
<h1 className='flex gap-3 '>{username}<ArrowUpRight/></h1>
</div>
        
      </aside>

      <div className="md:w-3/4 min-h-[70vh] px-5 overflow-scroll mb-10">
      {MenuSwitch == "newpost" && <PostPanel/>}
      {MenuSwitch == "myblog" && <Myblogs/>}
      {MenuSwitch == "insight" && <Deop/>}
      {MenuSwitch == "comment" && <Deop/>}
      
      </div>
    </div>
  </>
  )
}

export default PostArea

export const Deop=()=>{
 
    return (
    <section className="flex flex-col items-center justify-center min-h-[300px] bg-yellow-100 border border-yellow-300 rounded-lg p-6 text-center">
      <LucidePanelTopClose className="text-yellow-600 text-5xl mb-4 animate-bounce" />
      <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
        This Component is Under Construction
      </h2>
      <p className="text-yellow-700">
        We’re working hard to finish this feature. Please check back soon.
      </p>
    </section>
  );
}