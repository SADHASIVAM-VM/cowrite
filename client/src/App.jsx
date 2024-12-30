import React, { useContext } from 'react'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import BlogListing from './pages/BlogListing'
import PostArea from './pages/PostArea'
import { ThemeProvider } from './components/Themeproviders'
import SingleBlog from './pages/SingleBlog'
import './App.css'
import ProtectedRoutes from './ProtectedRoutes'
import Signin from './components/Signin'
import { Toaster } from 'react-hot-toast'
import { useMyContext } from './config/CommonContext'
import Myblogs from './components/myblogs'
const App = () => {
const {theme} = useMyContext();
console.log(theme)
  const routers = createBrowserRouter([
    {
      element:<Layout/>,
      children:[
        {
          element:<Signin/>,
          path:'/signin'
        }
        ,
        {
          path:'/',
          element:<Home/>
        },
        {
          element:(
            <ProtectedRoutes>
              
              <PostArea/>
            </ProtectedRoutes>
          
          ),
          path:'/post'
        },
        {
          element:(
            <ProtectedRoutes>
              
              <BlogListing/>
            </ProtectedRoutes>
       
          ),
          path:'/blogs'

        },
        {
          element:(
            <ProtectedRoutes>
              
              <SingleBlog/>
            </ProtectedRoutes>
           
          ),
          path:'/blog/:id'

        }
      ]
    }
  ])
  return (
    <ThemeProvider defaultTheme='light'>
      <Toaster/>
      <RouterProvider router={routers} />
    </ThemeProvider>  
  )
}

export default App
