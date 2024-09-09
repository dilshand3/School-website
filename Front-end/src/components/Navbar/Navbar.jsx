import React, { useEffect, useState } from 'react'
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
          <li>Home</li>
          <li>About</li>
          <li>Programe</li>
          <li>Contact Us</li>
        </ul>
        <i class='bx bxs-user-circle'></i>
      </header>
    </>
  )
}

export default Navbar
