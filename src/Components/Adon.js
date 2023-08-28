import React from 'react'
import "./Adon.css"
import { FaAngleRight } from "react-icons/fa6";
const Adon = () => {
    return (
        <div className='adon'>
            <div className='background-adon'></div>
            <div className='adon-heading'>
                <h3 className='adon-heading2'>Super Charge your work with add-ons</h3>
            </div>
            <div className='adon-container'>
                <div className='adon-box'>
                    <div className='adon-box1'>
                        <div className='tagline'>Collaborators</div>
                        <p className='para-adon'>Invite other users to specific projects for limited access and functionality.</p>
                    </div>

                </div>
                <div className='charges'>
                    Free
                </div>
            </div>

            <div className='adon-container'>
                <div className='adon-box'>
                    <div className='adon-box1'>
                        <div className='tagline'>Partners</div>
                        <p className='para-adon'>Invite other users for full account access and company management.</p>
                    </div>

                </div>
                <div className='charges'>
                    $9<span className='per-month-adon'>/month</span>
                </div>
            </div>

            <div className='adon-container'>
                <div className='adon-box'>
                    <div className='adon-box1'>
                        <div className='tagline'>Bonsai Tax</div>
                        <p className='para-adon'>Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
                        <div className='learn'>LEARN MORE <FaAngleRight /> </div>
                    </div>

                </div>
                <div className='charges'>
                    $10<span className='per-month-adon'>/month</span>
                </div>
            </div>
        </div>
    )
}

export default Adon