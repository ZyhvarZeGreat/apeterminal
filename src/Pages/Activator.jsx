import React from 'react'
import './Activator.css'
import Logo from '../assets/Activator/logo.svg'
import iconTelegram from '../assets/Activator/icon-telegram.svg'
import iconX from '../assets/Activator/icon-x.svg'
import iconInnovative from '../assets/Activator/icon-innovative.svg'
import iconTeam from '../assets/Activator/icon-team.svg'
import iconPotential from '../assets/Activator/icon-potential.svg'
import iconCommitment from '../assets/Activator/icon-commitment.svg'
import iconAlignment from '../assets/Activator/icon-alignment.svg'
import iconTick2 from '../assets/Activator/icon-tick-2.svg'
import iconFundraising from '../assets/Activator/icon-fundraising.svg'
import iconRocket from '../assets/Activator/icon-rocket.svg'
import iconInvestor from '../assets/Activator/icon-investor.svg'
import iconTechnical from '../assets/Activator/icon-technical.svg'
import iconApply from '../assets/Activator/button-apply-for-program.svg'
import kickOffDesktop from '../assets/Activator/kick-off-your-project.svg'
import kickOffMobile from '../assets/Activator/kick-off-your-project-mobile.svg'
import bg_social from '../assets/Activator/socials-container.svg'
import background from '../assets/Activator/background.png'
import AboutHeader from '../Sections/AboutHeader'
const Activator = () => {
    return (
        <div className={`  bg-[url(https://www.apeterminal.io/activator/assets/images/background.png)] bg-no-repeat bg-contain bg-top`}>

            <AboutHeader />
            <div className="apeactivator max-w-[1200px] mx-auto">
                <h1 className='font-semibold'>Ape Activator</h1>
                <p>An intensive accelerator program that empowers crypto startups to shape Web3 through combined expertise in AI, blockchain, and DeFi, with a focus on collaboration, L1 &amp; L2 solutions, and Web3 engagement.</p>

                <div className={`socialscon  bg-[url(${bg_social})]  `}>
                    <a href="https://t.me/ApeTerminalChat" target="_blank" rel="noopener noreferrer">
                        <img src={iconTelegram} alt="Ape Terminal Telegram" />
                    </a>
                    <a href="https://twitter.com/apeterminal" target="_blank" rel="noopener noreferrer">
                        <img src={iconX} alt="Ape Terminal X" />
                    </a>
                </div>
            </div>

            <div className="column column1 max-w-[1200px] mx-auto">
                <h2 className=' font-semibold' >What are we looking for?</h2>
                <ul className="fiveitems w-full">
                    <li className="visible w-1/5 ">
                        <span className="iconcon">
                            <img src={iconInnovative} alt="Ape Terminal: Innovative" />
                        </span>
                        <h3>Innovative</h3>
                        <span className="listdesc">Startups with groundbreaking ideas that leverage blockchain technology to solve real-world problems</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconTeam} alt="Ape Terminal: Team" />
                        </span>
                        <h3>Team</h3>
                        <span className="listdesc">Dedicated teams with a deep understanding, experience in the crypto space and a clear vision for their project</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconPotential} alt="Ape Terminal: Potential" />
                        </span>
                        <h3>Potential</h3>
                        <span className="listdesc">Crypto industry disruption potential or creation of new market opportunities</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconCommitment} alt="Ape Terminal: Commitment" />
                        </span>
                        <h3>Commitment</h3>
                        <span className="listdesc">Startups ready to engage fully in our intensive program, with a focus on rapid development and market launch</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconAlignment} alt="Ape Terminal: Alignment" />
                        </span>
                        <h3>Alignment</h3>
                        <span className="listdesc">Teams that prioritize transparency, community engagement, and long-term sustainability within the crypto ecosystem</span>
                    </li>
                </ul>
            </div>

            <div className="column column2 max-w-[1200px] mx-auto">
                <h2 className='font-hellix font-semibold' >What Ape offers?</h2>
                <ul className="fiveitems">
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconTick2} alt="Ape Terminal: Project Validation &amp; Advisory" />
                        </span>
                        <h3>Project Validation &amp; Advisory</h3>
                        <span className="listdesc">Rigorous project evaluation and strategic advisory services from industry experts</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconFundraising} alt="Ape Terminal: Fundraising &amp; Tokenomics" />
                        </span>
                        <h3>Fundraising &amp; Tokenomics</h3>
                        <span className="listdesc">Guidance on developing tokenomics and navigating token-based fundraising through public sales, launchpads, and exchanges</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconRocket} alt="Ape Terminal: Community Building &amp; Marketing" />
                        </span>
                        <h3>Community Building &amp; Marketing</h3>
                        <span className="listdesc">Assistance with building engaged communities, leveraging influencers, and executing effective marketing strategies</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconInvestor} alt="Ape Terminal: Investor &amp; Partner Connections" />
                        </span>
                        <h3>Investor &amp; Partner Connections</h3>
                        <span className="listdesc">Facilitating connections with crypto investors, VC firms, and essential partners for development, legal, and marketing needs</span>
                    </li>
                    <li className="visible w-1/5">
                        <span className="iconcon">
                            <img src={iconTechnical} alt="Ape Terminal: Technical &amp; Development Support" />
                        </span>
                        <h3 className="headeroverride">Technical &amp; Development Support</h3>
                        <span className="listdesc">Providing essential infrastructure, blockchain development tools, and cybersecurity measures</span>
                    </li>
                </ul>
            </div>

            <div className="imageholder max-w-[1200px] mx-auto ">
                <img src={kickOffDesktop} alt="Ape Terminal: Kick Off Your Project" className="desktopimage" />
                <img src={kickOffMobile} alt="Ape Terminal: Kick Off Your Project" className="mobileimage" />
                <span className="buttonapply">
                    <a href="https://airtable.com/appjfsmrinIpS9YdZ/pagObjmTRqxvgV53i/form" target="_blank" rel="noopener noreferrer">
                        <img src={iconApply} alt="Apply for the Program" />
                    </a>
                </span>
            </div>


        </div>
    )
}

export default Activator
