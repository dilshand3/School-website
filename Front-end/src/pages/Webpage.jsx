import React from 'react';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Webpage = () => {
  return (
    <>
   <Navbar/>
   <main id='main-item'>
    <Home/>
    <Footer/>
   </main>
    </>
  )
}

export default Webpage
