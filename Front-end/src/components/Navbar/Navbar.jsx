import React from 'react';
import "./Navbar.css";
import { Image } from '../../../public/Image';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        
            <header className='navbar'>
                <img src={Image.schoolLogo} alt="ScholLogo" />
                 <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Facility</li>
                    <li>Programe</li>
                    <li>Contact</li>
                 </ul>
                 <i class='bx bx-menu-alt-right' undefined id='hamburger' ></i>
            </header>
    )
}

export default Navbar
