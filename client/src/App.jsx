import React, { useContext } from 'react'
import {  BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogListing from './pages/BlogListing'
import PostArea from './pages/PostArea'
import { ThemeProvider } from './components/Themeproviders'
import SingleBlog from './pages/SingleBlog'
import './App.css'

import Signin from './components/Signin'
import { Toaster } from 'react-hot-toast'
import { useMyContext } from './config/CommonContext'
import Myblogs from './components/myblogs'
import Save from './pages/Save'
import NotFound from './pages/Notfound'
import PrivateRoute from './Route/privateRoute'

import { ClerkProvider, RedirectToSignIn  } from '@clerk/clerk-react'

const App = () => {
const {theme} = useMyContext();
console.log(theme)

  return (
    <ThemeProvider defaultTheme='light'>
      <Toaster/>
     
    <BrowserRouter>
    <Routes>
      {/* public routes */}
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<RedirectToSignIn />} />
          <Route path='/blogs' element={<BlogListing/>}/>

          {/* private routes */}
          
          
          <Route path='/blog/:id' element={<PrivateRoute><SingleBlog/>  </PrivateRoute>}/>
          <Route path='/post' element={<PrivateRoute><PostArea/></PrivateRoute>}/>
          <Route path='/save' element={<PrivateRoute><Save/></PrivateRoute>}/>
         
        
          

        </Routes>
    </BrowserRouter>
  </ThemeProvider>  
  )
}

export default App
