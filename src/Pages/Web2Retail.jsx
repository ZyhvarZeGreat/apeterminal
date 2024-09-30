import React from 'react'
import './Retail.css'
import about_icon from '../assets/About/icon-about.svg'
import efficient from '../assets/About/efficient.svg'
import none from '../assets/About/icon-none.svg'
import verify from '../assets/About/verify.svg'
import together from '../assets/About/strong-apes-tgoether-background.png'
import cta1 from '../assets/About/cta-1.png'
import cta2 from '../assets/About/cta-2.png'
import cta3 from '../assets/About/cta-3.png'
import glowGreen from '../assets/About/glow-green.png'
import glowBlue from '../assets/About/glow-blue.png'
import iconUserRapidly from '../assets/About/icon-user-rapidly.svg'
import rapidContent from '../assets/About/image-rapidly-content.png'
import Graphic from '../assets/About/Graphic.png'
import launchIcon from '../assets/About/icon-ape-launchpad.svg'
import readMore from '../assets/About/button-read-more.svg'
import quarterly from '../assets/About/image-quarterly.png'
import switchPink from '../assets/About/icon-switch-pink.svg'
import okPink from '../assets/About/icon-ok-pink.svg'
import questionPink from '../assets/About/increased-question-launchpad.svg'
import roi from '../assets/About/roi.svg'
import rocket from '../assets/About/rocket.svg'
import marketCap from '../assets/About/market-cap.svg'
import ok from '../assets/About/ok.svg'
import trading from '../assets/About/trading.svg'
import iconX from '../assets/About/icon-x (1).svg'
import iconTelegram from '../assets/About/icon-telegram (1).svg'
import arrowDown from '../assets/About/footer-arrow (1).svg'
import logo from '../assets/logo.svg'
import AboutHeader from '../Sections/AboutHeader'

const Web2Retail = () => {
    return (
        <div className={`  bg-[url(https://www.apeterminal.io/activator/assets/images/background.png)] bg-no-repeat bg-contain bg-top`}>
            <AboutHeader />
            <div className="ape2 max-w-full">

                <div className="header-about">
                    <div className="box-content-header">
                        <div className="box-about-pes">
                            <img src={about_icon} alt="About Apes Icon" />
                            <p className="ape-about-apes">About Apes</p>
                        </div>
                        <div className="box-ape-terminal">
                            <p className="label-ape-terminal">Ape Terminal</p>
                            <p className="label-ape-manifesto">Manifesto</p>
                        </div>
                        <div className="box-list-item-ape-terminal">
                            <a className="ape-terminal-item">
                                <img src={efficient} alt="Zero Upfront Costs" />
                                <p className="label-zero">Zero Upfront Costs</p>
                            </a>
                            <a className="ape-terminal-item-green">
                                <img src={none} alt="Non-Token Gated" />
                                <p className="label-non">Non-Token Gated</p>
                            </a>
                            <a className="ape-terminal-item">
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
                <div className="featured-cta max-w-[1200px] mx-auto  ">
                    <img src={together} alt="strong apes together" className="strongapes  max-w-[200%]  strongapes2" />
                    <div className="box-cta-info max-w-[1200px] container">
                        <p className="value-user-join">
                            <span className="value-customers">Join 500,000+ Users</span>
                        </p>
                        <p className="des-value-user">Accessing the Industry's Highest ROI Sales</p>
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
                                <img src={cta3} alt="Countries" />
                                <div className="box-info-item-left">
                                    <p className="value">50+</p>
                                    <p className="des-value-countries des-value">Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-rapidly max-w-[1200px] container">
                    <div className="box-info-rapidly">
                        <img className="image-glow" src={glowGreen} alt="Glow" />
                        <div className="info-rapidly">
                            <div className="box-user">
                                <div className="content-user">
                                    <img src={iconUserRapidly} alt="Userbase Icon" />
                                    <span className="label-user">Userbase</span>
                                </div>
                            </div>
                            <p className="text-rapidly">Fastest-Growing Primary Market</p>
                            <p className="des-rapidly">
                                <span className="value-rapidly">
                                    Ape Terminal has amassed 500,000+ active
                                </span>
                                <span className="color-green"><br />accounts,</span> and is rapidly growing at over 4,000 active accounts per
                                day.
                            </p>
                        </div>
                        <div className="image-rapidly">
                            <img src={rapidContent} alt="Rapid Growth" />
                        </div>
                    </div>
                </div>
                <div className="featured-ape-questions-launchpads max-w-[1200px] container">
                    <div className="box-content-launchpad">
                        <h1>
                            What are Launchpads?
                        </h1>
                        <p>Launchpads grant early access to the most lucrative tokens in crypto, before they reach mainstream
                            availability.</p>
                    </div>
                    <div className="box-card-grid-tokens">
                        <div className="card-item">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={okPink} alt="Guaranteed Returns" />
                                </div>
                            </div>
                            <div className="box-content-card">
                                <h3>Guaranteed Returns</h3>
                                <p>Receive liquid returns in under 30 days.</p>
                            </div>
                        </div>
                        <div className="border-right"></div>
                        <div className="card-item card-item-seconds">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={questionPink} alt="Increased Success Rate" />
                                </div>
                            </div>
                            <div className="box-content-card">
                                <h3>Increased Success Rate</h3>
                                <p>Access the highest-growth assets, typically restricted to the average investor.</p>
                            </div>
                        </div>
                        <div className="border-right"></div>
                        <div className="card-item">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={switchPink} alt="Aligned Incentives" />
                                </div>
                            </div>
                            <div className="box-content-card">
                                <h3>Aligned Incentives</h3>
                                <p>Share in a startup’s success alongside founding teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-ape-launchpad max-w-[1200px] container whyapeterminal">
                    <img className="blurbackleft" src={glowBlue} alt="Glow" />
                    <div className="box-info-launchpad">
                        <div className="image-launchpad">
                            <img src={Graphic} alt="Graphic" />
                        </div>
                        <img className="image-glow-ape-launchpad" src="assets/images/about/glow-ape-launchpad.png" alt="Glow Ape Launchpad" />
                        <div className="info-launchpad">
                            <div className="box-user">
                                <div className="content-user">
                                    <img src={launchIcon} alt="Ape Launchpad Icon" />
                                    <span className="label-user">Ape Launchpad</span>
                                </div>
                            </div>
                            <p className="text-launchpad">
                                Why <br />Ape Terminal?
                            </p>
                            <p className="des-ape-launchpad">
                                We provide individuals with first access to the most promising startups in crypto.
                            </p>
                            <a href="https://www.apeterminal.io/" className="button-learn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="featured-ape-card max-w-[1200px] container">
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
                            <p>Zero exposure and risk to depreciating launchpad native tokens.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={rocket} alt="Rocket" />
                                </div>
                            </div>
                            <h3>Superior Listings</h3>
                            <p>
                                Startups launching on primary exchanges perform the best. We ensure
                                ours do.
                            </p>
                        </div>
                    </div>
                    <div className="card-grid-seconds">
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
                            <h3>Zero Upfront Costs</h3>
                            <p>
                                The only launchpad where you can fund startups without spending tens of thousands on assets.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="featured-ape-quarterly max-w-[1200px] container">
                    <div className="box-info-quarterly">
                        <img src={glowGreen} alt="Glow Green" className="blurbackright blurrightgreen" />
                        <div className="box-content">
                            <p>Quarterly <br />Launchpad Report</p>
                            <span className="readmore"><a href="assets/docs/launchpad-report-web2-retail.pdf"><img src={readMore} alt="Read More" /></a></span>
                        </div>
                        <div className="image-quarterly">
                            <img src={quarterly} alt="Quarterly Report" />
                        </div>
                    </div>
                </div>
                <div className="featured-ape-join-future max-w-[1200px] container">
                    <img src={together} alt="strong apes together" className="strongapes  max-w-[200%]  strongapes2" />
                    <div className="box-text-join">
                        <h3>Start Your Crypto Journey Today</h3>
                        <p>Get started today with zero upfront costs today.</p>
                        <a href="https://www.apeterminal.io/" className="button-started">Join Now</a>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Web2Retail
