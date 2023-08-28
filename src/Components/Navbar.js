import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <div className='logo-title'>
                    <div className='logo'>
                        <FaRegPaperPlane />
                    </div>
                    <div className='title'>bonsai</div>
                </div>
                <ul>
                    <li>Product <BiChevronDown /></li>
                    <li>Templates <BiChevronDown /></li>
                    <li>Pricing</li>
                    <li>Reviews</li>
                </ul>

                <div className='buttons'>
                    <button className='btn1'>Log In</button>
                    <button className='btn2'>Start Free</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar