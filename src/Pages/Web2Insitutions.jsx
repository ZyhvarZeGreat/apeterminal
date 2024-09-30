import React from 'react';
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
import glowPurple from '../assets/Institution/glow-purple.png'
import quarterly from '../assets/About/image-quarterly.png'
import roi from '../assets/About/roi.svg'
import rocket from '../assets/About/rocket.svg'
import marketCap from '../assets/About/market-cap.svg'
import ok from '../assets/About/ok.svg'
import trading from '../assets/About/trading.svg'
import wallet from '../assets/About/wallet.svg'
import fundRaising from '../assets/Institution/increased-question-launchpad (2).svg'
import userGrowth from '../assets/Institution/user-question-launchpad.svg'
import primaryLiqudity from '../assets/Institution/liquity-question-launchpad.svg'
import rocketQuestion from '../assets/Institution/rocket-question-launchpad.svg'
import tailored from '../assets/Institution/icon-tailored.svg'
import AboutHeader from '../Sections/AboutHeader'


const Web2Institutions = () => {
    return (
        <div className={`    bg-[url(https://www.apeterminal.io/activator/assets/images/background.png)] bg-no-repeat bg-contain bg-top`}>

            <AboutHeader />

            <div className="header-about mx-auto max-w-[1200px] ">
                <div className="box-content-header ">
                    <div className="box-about-pes">
                        <img src={about_icon} alt="About Apes Icon" />
                        <p className="ape-about-apes">About Apes</p>
                    </div>
                    <div className="box-ape-terminal">
                        <p className="label-ape-terminal font-hellix">Ape Terminal</p>
                        <p className="label-ape-manifesto">Manifesto</p>
                    </div>
                    <div className="info-ape-terminal font-hellix">
                        Ape Terminal is Web3's most liquid primary market, connected to over
                        $1.7B+ assets and servicing more than 500,000+ customers.
                    </div>
                    <div className="des-ape-terminal">
                        Trusted by over 300+ crypto-native startups eager to work with the industry's leading accelerator, operating
                        in 50+ countries worldwide.
                    </div>
                    <a href="https://www.apeterminal.io/" className="button-started">Get Started</a>
                </div>
            </div>

            <div className="featured-cta mx-auto max-w-[1200px] ">
                <img src={together} alt="Strong Apes Together" className="strongapes" />
                <div className="box-cta-info container">
                    <p className="value-user-join">
                        <span className="value-customers font-hellix">500,000+ Customers Worldwide</span>
                    </p>
                    <p className="des-value-user">Joining the Industry's Highest ROI Sales</p>
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
            <div className="featured-rapidly  font-hellix mx-auto max-w-[1200px] container">
                <div className="box-info-rapidly">
                    <img className="blurbackright blurrightgreen" src={glowGreen} alt="Glow" />
                    <div className="info-rapidly">
                        <div className="box-user">
                            <div className="content-user">
                                <img src={iconUserRapidly} alt="User Icon" />
                                <span className="label-user">Userbase</span>
                            </div>
                        </div>
                        <p className="text-rapidly font-hellix">Fastest-Growing Primary Market</p>
                        <p className="des-rapidly">
                            <span className="value-rapidly">
                                Ape Terminal has amassed 500,000+ active
                            </span>
                            <span className="color-green"><br />accounts,</span> and is rapidly growing at over 4,000 active accounts per
                            day.
                        </p>
                    </div>
                    <div className="image-rapidly">
                        <img src={rapidContent} alt="Rapidly Growing Content" />
                    </div>
                </div>
            </div>
            <div className="featured-ape-questions-launchpads  mx-auto max-w-[1200px] container">
                <div className="box-content-launchpad font-hellix ">
                    <h1 className='font-hellix'>What are Launchpads?</h1>
                    <p>Launchpads enable startups to raise capital from retail investors in exchange for tokens.</p>
                </div>
                <div className="box-card-grid">
                    <img className="blurbackleft blurbackpurple" src={glowPurple} alt="Glow Image Launchpad" />
                    <div className="card-grid-launchpad">
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={fundRaising} alt="Increased Fundraising" />
                                </div>
                            </div>
                            <h4>Increased Fundraising</h4>
                            <p>Raise significantly more capital than traditional startups.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={primaryLiqudity} alt="Primary Liquidity" />
                                </div>
                            </div>
                            <h4>Primary Liquidity</h4>
                            <p>Benefit from greater liquidity through centralized exchange listings, which record higher trading volumes
                                than the vast majority of stock markets.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={userGrowth} alt="User Growth" />
                                </div>
                            </div>
                            <h4>User Growth</h4>
                            <p>Attract a broader user base, and integrate them into your community.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <div className="card-image">
                                    <img src={rocketQuestion} alt="Rapid Monetization" />
                                </div>
                            </div>
                            <h4>Rapid Monetization</h4>
                            <p>Achieve nearly 10x faster profit turnover in your first year, reaching monetization quicker than
                                traditional startups.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-ape-launchpad container  mx-auto max-w-[1200px] whyapeterminal">
                <img className="blurbackright" src={glowBlue} alt="Glow" />
                <div className="box-info-launchpad">
                    <div className="info-launchpad">
                        <div className="box-user">
                            <div className="content-user">
                                <img src={launchIcon} alt="Launchpad Icon" />
                                <span className="label-user font-hellix">Launchpad</span>
                            </div>
                        </div>
                        <p className="text-launchpad font-hellix">Why <br />Ape Terminal?</p>
                        <p className="des-ape-launchpad">The results speak for themselves.</p>
                        <a href="https://1pgfqay9slw.typeform.com/to/Y7yqWlMH?typeform-source=gcc.apeterminal.io" className="button-learn">Apply to Ape Terminal</a>
                    </div>
                    <div className="image-launchpad">
                        <img src={Graphic} alt="Graphic" />
                    </div>
                </div>
            </div>
            <div className="featured-ape-card  mx-auto max-w-[1200px] container">
                <div className="card-grid-four">
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={marketCap} alt="Market Cap" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Highest ROI Sales</h3>
                        <p>We work with the best, and the results speak for themselves.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={rocket} alt="Rocket" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Superior Listings</h3>
                        <p>Startups launching on primary exchanges perform the best. We ensure ours do.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={verify} alt="Verify" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Minimal Upfront Costs</h3>
                        <p>We don’t charge founders hefty fees.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={tailored} alt="Tailored Approach" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Tailored Approach</h3>
                        <p>We accelerate a limited number of startups at a time.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={roi} alt="ROI" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Limitless Opening Day Volume</h3>
                        <p>Ape Terminal launches have a proven track record of capturing the highest market volume on opening day.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={ok} alt="OK" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Non-Token Gated Model</h3>
                        <p>Zero exposure to depreciating launchpad native tokens.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={trading} alt="Trading" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Infinite Post-Launch Liquidity</h3>
                        <p>The industry’s only launchpad that enables startups to secure follow-on funding beyond their token sale.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <div className="card-image">
                                <img src={wallet} alt="Wallet" />
                            </div>
                        </div>
                        <h3 className='font-hellix'>Non-Refundable Model</h3>
                        <p>We take full responsibility for users without penalizing founders.</p>
                    </div>
                </div>
            </div>
            <div className="featured-ape-startups mx-auto max-w-[1200px]  container">
                <h1 className='font-hellix'>We Position Startups<br /> for Success at Every Stage</h1>
                <div className="card-grid-startups">
                    <div className="card-grid-item font-hellix">
                        <p>We support startups at their earliest stages.</p>
                        <ul>
                            <li>
                                <strong>23%</strong> of Ape Terminal startups applied <br /> at the ideation phase.
                            </li>
                        </ul>
                    </div>
                    <div className="border-right"></div>
                    <div className="card-grid-item font-hellix">
                        <p>We improve the success rate of our startups.</p>
                        <ul>
                            <li>
                                <strong>54%</strong> of Ape Terminal startups had no <br /> revenue when they applied.
                            </li>
                            <li>
                                <strong>20%</strong> of Ape Terminal startups have <br /> achieved a circulating market cap <br /> of $75 million or
                                more.
                            </li>
                        </ul>
                    </div>
                    <div className="border-right"></div>
                    <div className="card-grid-item font-hellix">
                        <p>We provide startups with <br /> a significant fundraising advantage.</p>
                        <ul>
                            <li>
                                <strong>26%</strong> of Ape Terminal startups secured <br /> follow-on or Series A funding.
                            </li>
                            <li>
                                <strong>20%</strong> of Ape Terminal startups raised <br /> funds at a higher valuation within six <br /> months of
                                engagement.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="featured-ape-quarterly mx-auto max-w-[1200px]  container">
                <img className="blurbackright" src={glowPurple} alt="Glow" />
                <div className="box-info-quarterly">
                    <div className="box-content">
                        <p>Quarterly <br />Launchpad Report</p>
                        <span className="readmore">
                            <a href="assets/docs/launchpad-report-web2-companies.pdf">
                                <img src={readMore} alt="Read More" />
                            </a>
                        </span>
                    </div>
                    <div className="image-quarterly">
                        <img src={quarterly} alt="Quarterly Report" />
                    </div>
                </div>
            </div>
            <div className="featured-ape-join-future  mx-auto max-w-[1200px] container">
                <img src={together} alt="Strong Apes Together" className="strongapes strongapes2" />
                <div className="box-text-join">
                    <h3 className='font-hellix'>Launch on Ape Terminal</h3>
                    <p>Don't miss the opportunity to supercharge your startup with Ape Terminal.</p>
                    <a href="https://1pgfqay9slw.typeform.com/to/Y7yqWlMH?typeform-source=gcc.apeterminal.io" className="button-started">Apply for Launchpad</a>
                </div>
            </div>

        </div>
    );
}

export default Web2Institutions;
