import React from 'react'
import './About.css'
import about_icon from '../assets/About/icon-about.svg'
import efficient from '../assets/About/efficient.svg'
import none from '../assets/About/icon-none.svg'
import verify from '../assets/About/verify.svg'
import together from '../assets/About/strong-apes-tgoether-background.png'
import cta1 from '../assets/About/cta-1.png'
import cta2 from '../assets/About/cta-2.png'
// import cta3 from '../assets/About/cta-3.png'
import glowGreen from '../assets/About/glow-green.png'
import glowBlue from '../assets/About/glow-blue.png'
import iconUserRapidly from '../assets/About/icon-user-rapidly.svg'
import rapidContent from '../assets/About/image-rapidly-content.png'
import Graphic from '../assets/About/Graphic.png'
import launchIcon from '../assets/About/icon-ape-launchpad.svg'
import readMore from '../assets/About/button-read-more.svg'
import quarterly from '../assets/About/image-quarterly.png'
import roi from '../assets/About/roi.svg'
import rocket from '../assets/About/rocket.svg'
import marketCap from '../assets/About/market-cap.svg'
import ok from '../assets/About/ok.svg'
import trading from '../assets/About/trading.svg'
import wallet from '../assets/About/wallet.svg'
import bg from '../assets/About/header-about.png'
import logo from '../assets/logo.svg'
const About = () => {
    return (
        <div className={`bg-[url(${bg})] font-hellix`}>
            <div className="ape1 font-hellix">
                <header>
                    <a href="https://www.apeterminal.io/" className="logolink">
                        <img src={logo} alt="Ape Terminal" className="logo" />
                    </a>
                    <div id="main-nav">
                        <div className="mobilesub">
                            <img src="assets/images/logo-mobile.svg" alt="Ape Terminal" className="logomob" />
                            <ul className="navigation">
                                <li>
                                    <a href="#">About</a>
                                    <ul className="dropdown">
                                        <li><a href="/about/">Web3 General</a></li>
                                        <li>
                                            <a href="/about/web2-institutions">Web2 Institutions</a>
                                        </li>
                                        <li><a href="/about/web2-retail">Web2 Retail</a></li>
                                    </ul>
                                </li>
                                <li><a href="https://www.apeterminal.io/">Launchpad</a></li>
                                <li>
                                    <a href="https://www.apeterminal.io/transparency">Transparency</a>
                                </li>
                                <li>
                                    <a href="https://www.apeterminal.io/activator/">Ape Activator</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mobile-button"><span></span></div>
                    {/* /.mobile-button */}
                </header>
            </div>
            <div className="ape2">

                <div className="header-about">
                    <div className="box-content-header">
                        <div className="box-about-pes">
                            <img src={about_icon} alt="About Apes Icon" />
                            <p className="ape-about-apes">About Apes</p>
                        </div>
                        <div className="box-ape-terminal">
                            <p className="label-ape-terminal font-hellix">Ape Terminal</p>
                            <p className="label-ape-manifesto">Manifesto</p>
                        </div>
                        <div className="box-list-item-ape-terminal">
                            <a className="ape-terminal-item" href="#">
                                <img src={efficient} alt="Zero Upfront Costs" />
                                <p className="label-zero">Zero Upfront Costs</p>
                            </a>
                            <a className="ape-terminal-item-green" href="#">
                                <img src={none} alt="Non-Token Gated" />
                                <p className="label-non">Non-Token Gated</p>
                            </a>
                            <a className="ape-terminal-item" href="#">
                                <img src={verify} alt="No KYC Required" />
                                <p className="label-no">No KYC Required</p>
                            </a>
                        </div>
                        <div className="info-ape-terminal">
                            Ape Terminal is Web3's most liquid primary market, connected to over
                            $1.7B+ assets and servicing more than 500,000+ customers.
                        </div>
                        <a href="https://www.apeterminal.io/" className="button-started">Get Started</a>
                    </div>
                </div>
                <div className="featured-cta">
                    <img src={together} alt="Strong Apes Together" className="strongapes" />
                    <div className="box-cta-info container">
                        <p className="value-user-join">
                            <span className="value-customers font-hellix">Join 500,000+ Users</span>
                        </p>
                        <p className="des-value-user font-hellix">
                            Accessing the Industry's Highest ROI Sales
                        </p>
                        <div className="featured-cta-container">
                            <div className="featured-cta-item">
                                <img src={cta1} alt="Assets Connected" />
                                <div className="box-info-item">
                                    <p className="value">$1,756,581,920+</p>
                                    <p className="des-value-assets des-value">Assets Connected</p>
                                </div>
                            </div>
                            <div className="featured-cta-item">
                                <img src={cta2} alt="Average ROI" />
                                <div className="box-info-item">
                                    <p className="value">1,300%</p>
                                    <p className="des-value-average des-value">Average ROI</p>
                                </div>
                            </div>
                            <div className="featured-cta-item">
                                <img src="assets/images/about/cta-3.png" alt="Countries" />
                                <div className="box-info-item-left">
                                    <p className="value">50+</p>
                                    <p className="des-value-countries des-value">Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-rapidly container">
                    <img src={glowGreen} alt="Glow Green" className="blurbackright" />
                    <div className="box-info-rapidly">
                        <div className="info-rapidly">
                            <div className="box-user">
                                <div className="content-user">
                                    <img src={iconUserRapidly} alt="Rapidly Growing Users Icon" />
                                    <span className="label-user">Users</span>
                                </div>
                            </div>
                            <p className="text-rapidly">Rapidly Growing Userbase</p>
                            <p className="des-rapidly">
                                <span className="value-rapidly">
                                    Ape Terminal has amassed 500,000+ active
                                </span>
                                <span className="color-green"><br />accounts,</span> and is rapidly
                                growing at over 4,000 active accounts per day.
                            </p>
                        </div>
                        <div className="image-rapidly">
                            <img src={rapidContent} alt="Rapidly Growing Content" />
                        </div>
                    </div>
                </div>
                <div className="featured-ape-launchpad container">
                    <img src={glowBlue} alt="Glow Blue" className="blurbackleft" />
                    <div className="box-info-launchpad">
                        <div className="image-launchpad">
                            <img src={Graphic} alt="Launchpad Graphic" />
                        </div>
                        <div className="info-launchpad">
                            <div className="box-user">
                                <div className="content-user">
                                    <img src={launchIcon} alt="Ape Launchpad Icon" />
                                    <span className="label-user">Ape Launchpad</span>
                                </div>
                            </div>
                            <p className="text-launchpad">
                                Why <br />
                                Ape Terminal?
                            </p>
                            <p className="des-ape-launchpad font-hellix">
                                We connect over 500,000+ users with the most promising startups in
                                crypto.
                            </p>
                            <a href="https://www.apeterminal.io/" className="button-learn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="featured-ape-card container">
                    <div className="card-grid">
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={marketCap} alt="Market Cap" />
                                </div>
                            </div>
                            <h3>Highest ROI Sales</h3>
                            <p>We work with the best, and the results speak for themselves.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={ok} alt="Non-Token Gated" />
                                </div>
                            </div>
                            <h3>Non-Token Gated Model</h3>
                            <p>Zero exposure to depreciating launchpad native tokens.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={rocket} alt="Rocket" />
                                </div>
                            </div>
                            <h3>Superior Listings</h3>
                            <p>
                                Startups launching on primary exchanges perform the best. We
                                ensure ours do.
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={roi} alt="ROI" />
                                </div>
                            </div>
                            <h3>Limitless Opening Day Volume</h3>
                            <p>
                                Ape Terminal launches have a proven track record of capturing the
                                highest market volume on opening day.
                            </p>
                        </div>

                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={trading} alt="Trading" />
                                </div>
                            </div>
                            <h3>Infinite Post-Launch Liquidity</h3>
                            <p>
                                The industry’s only launchpad that enables startups to secure
                                follow-on funding beyond their token sale.
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={wallet} alt="Wallet" />
                                </div>
                            </div>
                            <h3>Non-Refundable Model</h3>
                            <p>
                                We take full responsibility for users without penalizing founders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="featured-ape-quarterly container">
                    <img src={glowGreen} alt="Glow Green" className="blurbackright" />
                    <div className="box-info-quarterly">
                        <div className="box-content">
                            <p>Quarterly <br />Launchpad Report</p>
                            <span className="readmore"><a href="assets/docs/launchpad-report-web3-general.pdf"><img
                                src={readMore} alt="Read More" /></a></span>
                        </div>
                        <div className="image-quarterly">
                            <img src={quarterly} alt="Quarterly Report" />
                        </div>
                    </div>
                </div>
                <div className="featured-ape-join-future container">
                    <img src={together} alt="Strong Apes Together"
                        className="strongapes strongapes2" />
                    <div className="box-text-join">
                        <h3>Join the Future of Crypto</h3>
                        <p>Get started today with zero upfront costs.</p>
                        <a href="https://www.apeterminal.io/" className="button-started">Get Started</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About
