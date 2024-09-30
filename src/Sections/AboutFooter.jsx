import React from 'react'
import iconX from '../assets/About/icon-x (1).svg'
import iconTelegram from '../assets/About/icon-telegram (1).svg'
import arrowDown from '../assets/About/footer-arrow (1).svg'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const AboutFooter = () => {
    return (
        <footer className=' mx-auto max-w-[1200px] '>
            <Link to='/' className="footerlogo"><img src={logo} alt="Ape Terminal" className="logo" /></Link>

            <div className="footercon">
                <div className="footer3">
                    <h2>Join our community</h2>
                    <div className="socialscon">
                        <a href="https://t.me/ApeTerminalChat" target="_blank" rel="noopener noreferrer"><img src={iconTelegram} alt="Ape Terminal Telegram" /></a>
                        <a href="https://twitter.com/apeterminal" target="_blank" rel="noopener noreferrer"><img src={iconX} alt="Ape Terminal X" /></a>
                    </div>
                </div>
                <div className="footer2">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="https://apeterminal.io/faq">FAQ</a></li>
                        <li><a href="https://app.apeterminal.io/">Yield App</a></li>
                        <li><a href="https://www.apeterminal.io/transparency">Transparency</a></li>
                    </ul>
                </div>
                <div className="footer1">
                    <h2>Products</h2>
                    <ul>
                        <li><a href="#">Yield App</a></li>
                        <li><a href="https://www.apearcade.gg/">Ape Arcade</a></li>
                    </ul>
                </div>
            </div>

            <div className="footernote">
                <p><span className="footerleft">Ape Terminal © 2024. All rights reserved.</span> <span className="footerlinks"> <a href="https://www.apeterminal.io/terms-of-service"><span>Terms &amp; Conditions</span> <img src={arrowDown} alt="footer arrow" /></a> <a href="https://www.apeterminal.io/privacy-policy"><span>Privacy Policy</span> <img src={arrowDown} alt="footer arrow" /></a></span></p>
            </div>

        </footer>
    )
}

export default AboutFooter
