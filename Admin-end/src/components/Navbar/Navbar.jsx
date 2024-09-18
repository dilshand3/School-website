import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        
        <div className="admin-panel">
          ADMIN PANEL
        </div>
        <div className="logo">
          <span>DAV PUBLIC</span>
          <small>SCHOOL</small>
        </div>
        <Link to="/feedback" className='notification'><i class='bx bxs-bell'></i></Link>
      </nav>
      
    </>
  )
}

export default Navbar
