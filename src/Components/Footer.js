import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div>Made with❤️ by Tushar</div>
            <div>&copy;Copyright {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer