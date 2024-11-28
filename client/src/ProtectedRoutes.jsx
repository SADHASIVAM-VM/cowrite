import React, { useEffect, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from "react-router";
import loading from './assets/loading/spinner.svg'
import { RefreshCw } from 'lucide-react';
const ProtectedRoutes = ({children}) => {
  const navigate = useNavigate();
 const [ImgLoading, setImgLoading] = useState(true)

const { isLoaded, userId} = useAuth()

const outTime = ()=>{ 
  setTimeout(()=>{
  if(!isLoaded){
    console.log("stopped")
    setImgLoading(false)
  }
},30*1000)

}

useEffect(()=>{
 outTime()
},[])

if(!isLoaded) return <div className="flex justify-center items-center h-[90vh] w-full">
 {
  ImgLoading ? <img src={loading} alt="" className='w-20 ' />
  : <div className="flex flex-col  gap-4">
    <p className=''>Sorry the server is busy </p> 
    <p onClick={outTime} className='border px-2 py-2 rounded-md hover:bg-[#aad6ffcc] flex justify-center gap-4'><code className=''>Enter F5</code> <RefreshCw/> </p>
  </div>
 }
</div>

if(!userId){ 
    return navigate('/signin')
}

  return <>{children}</>
}

export default ProtectedRoutes
