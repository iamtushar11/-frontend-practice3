import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import "./Cards.css"
import monthimg from "../images/2months.svg"
import { FaCheck } from "react-icons/fa6"

const Cards = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = val => {
        setChecked(val)
    }
    return (
        <div className='card-conatiner'>
            <div className='background'></div>
            <div className='card-wrapper'>
                <div className='card-padding'>
                    <div className='conatiner-large'>
                        <div className='content'>
                            <div className='left-content'>
                                <h1 className='content-heading'>

                                    Plans & Pricing
                                </h1>

                            </div>
                            <div className='right-content'>
                                <div className='monthly'>Monthly</div>
                                <div className='toggle'>
                                    <ReactSwitch
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='yearly'>Yearly</div>
                                <img src={monthimg} alt='' className='month-free' />
                            </div>
                        </div>

                        {/* Cards */}
                        <div className='cards'>
                            <div className='card card1'>
                                <div className='card-details'>
                                    <div className='card-heading'><h3>Starter</h3></div>
                                    <p className='paragraph'>Ideal for freelancers and contractors just starting out.</p>
                                    <div className='prices'>
                                        <span className='dollar'>$</span>
                                        <span className='price-tag'>24</span>
                                        <span className='per-month'>/months</span>
                                    </div>
                                    <div className='list'>
                                        <div className='list-item'><FaCheck />All Templates</div>
                                        <div className='list-item'><FaCheck />Unlimited Clients amd Projects</div>
                                        <div className='list-item'><FaCheck />Invoicing & Payments</div>
                                        <div className='list-item'><FaCheck />Proposal & Contracts</div>
                                        <div className='list-item'><FaCheck />Tasks & Time Tracking</div>
                                        <div className='list-item'><FaCheck />Client CRM</div>
                                        <div className='list-item'><FaCheck />Expens Tracker</div>
                                        <div className='list-item'><FaCheck />UpTo 5 project collab</div>
                                    </div>

                                </div>
                                <div className='btn1-card btn-card1'>Start Free</div>
                            </div>



                            <div className='card card1'>
                                <div className='card-details'>

                                    <div className='card-heading'><h3>Proffesional</h3></div>
                                    <p className='paragraph'>Everything a growing independent business needs to thrive.</p>
                                    <div className='prices'>
                                        <span className='dollar'>$</span>
                                        <span className='price-tag'>39</span>
                                        <span className='per-month'>/month</span>
                                    </div>
                                    <div className='list'>
                                        <div className='list-item'><FaCheck />Everything in Starter plus...</div>
                                        <div className='list-item'><FaCheck />Custom Branding</div>
                                        <div className='list-item'><FaCheck />Forms & Questionnaires</div>
                                        <div className='list-item'><FaCheck />Workflow Automations</div>
                                        <div className='list-item'><FaCheck />Client Portal</div>
                                        <div className='list-item'><FaCheck />QuickBooks Integration</div>
                                        <div className='list-item'><FaCheck />Calendly Integration</div>
                                        <div className='list-item'><FaCheck />Zapier Integration</div>
                                    </div>

                                </div>
                                <div className='btn1-card btn-card2'>
                                    Start free
                                </div>
                                <div className='popular'>
                                    <div >Most Popular</div>
                                </div>
                            </div>


                            <div className='card card1'>
                                <div className='card-details'>
                                    <div className='card-heading'><h3>Business</h3></div>
                                    <p className='paragraph'>The perfect package for small businesses and agencies.</p>
                                    <div className='prices'>
                                        <span className='dollar'>$</span>
                                        <span className='price-tag'>79</span>
                                        <span className='per-month'>/months</span>
                                    </div>
                                    <div className='list'>
                                        <div className='list-item'><FaCheck />Everything in Starter and Professional plus...</div>
                                        <div className='list-item'><FaCheck />Subcontractor Management</div>
                                        <div className='list-item'><FaCheck />Hiring Agreement Templates (1099 contracts)s</div>
                                        <div className='list-item'><FaCheck />Subcontractor Onboarding</div>
                                        <div className='list-item'><FaCheck />Tasks & Time Tracking</div>
                                        <div className='list-item'><FaCheck />Talent Pool</div>
                                        <div className='list-item'><FaCheck />Accountant Access</div>
                                        <div className='list-item'><FaCheck />Connect Multiple Bank Accounts</div>
                                    </div>

                                </div>
                                <div className='btn1-card btn3-card'>Start Free</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Cards