import React from 'react';
import Home from '../components/Home/Home';
import Addmision from '../components/Addmision/Addmision';
import {RouterProvider,createBrowserRouter } from "react-router-dom"
import Layout from './Layout';
import About from '../components/About/About';
import Learnmore from '../components/Learnmore/Learnmore';
import Feedback from '../components/Feedback/Feedback';

const Webpage = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/",
          element : <>
          <Home/><About/><Addmision/>
          </>
        }, 
      ],
     
    },
    {
      path : "/learn-more",
      element : <Learnmore/>
    },
    {
      path : "/feedback",
      element : <Feedback/>
    }
  ])

  return (
    <>
    <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default Webpage
