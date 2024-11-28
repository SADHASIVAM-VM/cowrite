import { SignIn, SignUp } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Signin = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

    const [visibleSignIn, setVisibleSignIn] = useState(true);
    useEffect(()=>{
        if(visibleSignIn){
          document.body.classList.add("no_scroll")
        }
        else{
          document.body.classList.remove("no_scroll")
        }
        return ()=> document.body.classList.remove("no_scroll")
      },[visibleSignIn, pathname])
  return(<>{
    visibleSignIn &&
    <div className=" fixed left-0 flex bg-black w-screen h-screen z-20 justify-center items-center top-0" onClick={(e)=>  {
        if(e.target === e.currentTarget){
            setVisibleSignIn(false)

        }
      }}>
    <div className="z-20">
      <SignIn />
    </div>
    </div>
    }
    {
      !visibleSignIn && <section class="min-h-screen flex flex-col justify-center items-center text-white">
      <div class="  rounded-lg p-8  text-center">
        <h2 class="text-2xl md:text-4xl hd font-semibold  mb-4 animate-pulse text-[#ff4141]">Please Login or Sign Up</h2>
        <p class=" mb-6">Access your account to continue.</p>
        <div class="flex flex-col md:flex-row gap-4">
          <button
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
           onClick={()=> {window.location.reload()}}>
            Login
          </button>
          <button
            class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out"
            onClick={()=> <SignUp/>}>
            Sign Up
          </button>
        </div>
        <button
          class="mt-6 text-blue-500 hover:underline focus:outline-none transition-all duration-300 ease-in-out"
          onClick={()=> navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </section>
    
    }
    </>
  )
}

export default Signin
