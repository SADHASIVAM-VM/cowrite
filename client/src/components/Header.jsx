import { Briefcase, HeartIcon, LogInIcon, Menu } from 'lucide-react'
import React, {useState } from 'react'
import { ModeToggle } from './toogle'
import { useLocation, useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react'


const Header = () => {
 const {isSignedIn}= useUser()
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {pathname}= useLocation();

  return (
    <div className='flex justify-between items-center h-[70px] px-5 md:px-16'>
      
      {/* logo */}
      <div className="">
        <h1 className='text-2xl logo'>Co<span className='text-yellow-300'>Write</span></h1>
      </div>

      {/* menu */}
      <div className="shadow-md md-px-5 p-2 rounded-full">
      <div className="hidden md:flex">
        <ul className='flex space-x-2'>
          <li>Home</li>
          <li>Blogs</li>
          <li>Saved</li>
          <li>My Space</li>
        </ul>
      </div>
    <div className="md:hidden">
      <Menu onClick={()=> setOpen(!open)} className='cursor-pointer'/>
      {
        open &&
      <div className="absolute left-0 top-[70px] z-20 bg-white w-full flex justify-center p-5">
        <ul className='space-y-3'>
        <li>Home</li>
        <li>Blogs</li>
        <li>Saved</li>
        <li>My Space</li>
      </ul>
      </div>

      }
    </div>

      </div>

      {/* login */}
      <div className="flex items-center justify-center gap-2">
      <div className="flex">
       <ModeToggle onClick={()=> setOpen(!open)}/>
      </div>
      <div className="">
            
            <SignedOut>
            
            {isSignedIn || pathname == '/' &&
              <button  className='rounded-md flex  p-2 gap-2 button-83' role='button'onClick={()=> navigate('/signin')} ><LogInIcon/> </button>
            }
    
            </SignedOut>
         <SignedIn >
          <div className="flex gap-5">
            <UserButton appearance={{elements:{avatarBox:" outline outline-offset-1 outline-green-400"}}} className="w-20">
              <UserButton.MenuItems>
                <UserButton.Link  labelIcon={<Briefcase className='w-3'/>} label='My Blogs' href='/applicant'/>
                <UserButton.Link  labelIcon={<HeartIcon className='w-3'/>} label='Fav Blogs' href='/savedjob'/>
              </UserButton.MenuItems>
            </UserButton>
          </div>
          </SignedIn>
          </div>

      </div>

      

    </div>
  )
}

export default Header
