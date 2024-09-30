import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const AboutHeader = () => {
    return (
        <div className="ape1 font-hellix">
            <header>
                <Link to='/' className="logolink">
                    <img src={logo} alt="Ape Terminal" className="logo" />
                </Link>
                <div id="main-nav">
                    <div className="mobilesub">
                        <img src="assets/images/logo-mobile.svg" alt="Ape Terminal" className="logomob" />
                        <ul className="navigation">
                            <li>
                                <Link to="/about">About</Link>
                                <ul className="dropdown">
                                    <li><Link to="/about/">Web3 General</Link></li>
                                    <li>
                                        <Link to="/about/web2-institutions">Web2 Institutions</Link>
                                    </li>
                                    <li><Link to="/about/web2-retail">Web2 Retail</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Launchpad</Link></li>
                            <li>
                                <Link to="/transparency">Transparency</Link>
                            </li>
                            <li>
                                <Link to="/activator/">Ape Activator</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mobile-button"><span></span></div>
                {/* /.mobile-button */}
            </header>
        </div>
    )
}

export default AboutHeader
