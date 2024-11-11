import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  const inst = () => {
    window.location.href = "https://www.instagram.com/verma__ji302/"
  }
  return (
    <>
      <section className='main-footer'>
        <section className='footer' id='footer'>
          <div className="footer-box footer-one">
            <h4>GET IN TOUCH</h4>
            <p>Address: Chak 7STG, Khushal Nagar, Suratgarh - Hanumangarh Rd, Near Toll Plaza, Rajasthan 335801</p>
            <p>Corporate Office: Office No. 1521, 15th floor, Galaxy Diamond Plaza, Sector 4 Greater Noida (West), U.P</p>
            <p>Phone: (+91) 7240453567  /  (+91) 999 134 11</p>
            <p>Email: help@davschool.com</p>
          </div>
          <div className="footer-box two">
            <h4>HELP & SUPPORT</h4>
            <div className="footer-two">
              <ul>
                <li>24x7 Live Help</li>
                <li>About Us</li>
                <li>Programs</li>
                <li>Events</li>
              </ul>
              <ul>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>

          </div>
          <div className="footer-box">
            <h4>SOCIAL MEDIA</h4>
            <i onClick={() => inst()} className='bx bxl-facebook'></i>
            <i onClick={() => inst()} className='bx bxl-instagram' ></i>
            <i onClick={() => inst()} className='bx bxl-twitter' ></i>
            <i onClick={() => inst()} className='bx bxl-linkedin' ></i>
            <i onClick={() => inst()} className='bx bxl-youtube'></i>
          </div>
        </section>
        <p id='footer-right'>	&#169; All right reserved to DAV SCHOOL 2024 Ltd. || developed & managed by <Link className="footer-portfolio-url" to="https://dilshan-woad.vercel.app/">dilshan</Link></p>
      </section>
    </>
  )
}

export default Footer
