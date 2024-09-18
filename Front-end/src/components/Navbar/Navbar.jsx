import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`navbar ${isScrolled ? 'scroll-nav' : ''}`} id='navbar'>
       <div className="logo">
        <span>DAV PUBLIC</span>
        <small>SCHOOL</small>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#admission">Admission</a></li>
          <li><a href="#footer">Contact Us</a></li>
        </ul>
        <Link to="/feedback"><i class='bx bx-message-alt-dots'></i></Link>
       
      </header>
    </>
  )
}

export default Navbar
