import React from "react";
import logo from '../assets/logo.svg'
import navArrow from '../assets/navArrow.svg'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="MuiGrid-root MuiGrid-container css-lahj3v">
                <div className="MuiBox-root items-center flex w-full justify-center css-1e9un1z">
                    <p className="MuiTypography-root MuiTypography-body1 css-cquwop">
                        The Ape Arcade is live. Play now.
                    </p>
                </div>
            </div>
            <div className="MuiGrid-root MuiGrid-container css-1js5ylb">
                <div className="MuiBox-root  css-l5nz00">
                    <div className="MuiBox-root h-auto  ">
                        <img src={logo} alt="logo" className="w-[130px] h-[40px]" />
                    </div>
                    <div className="MuiBox-root css-domuav">
                        <div className="d-menu-outer-item" style={{ textDecoration: 'none', position: 'relative' }}>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-fdsvhp" tabIndex="0" type="button">
                                <Link to='/about' className="MuiTypography-root MuiTypography-body1 css-a3lrct">About</Link>
                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </button>
                            <div className="d-menu-inner-item hidden">
                                <div className="d-menu-items">
                                    <a href="https://www.apeterminal.io/about/">Web3 General</a>
                                    <a href="https://www.apeterminal.io/about/web2-institutions">Web2 Institutions</a>
                                    <a href="https://www.apeterminal.io/about/web2-retail">Web2 Retail</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-menu-outer-item" style={{ textDecoration: 'none', position: 'relative' }}>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-9dm9ux" tabIndex="0" type="button">
                                <Link to='/' className="MuiTypography-root MuiTypography-body1 css-1h5ecr">Launchpad</Link>
                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </button>
                        </div>
                        <div className="d-menu-outer-item" style={{ textDecoration: 'none', position: 'relative' }}>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-fdsvhp" tabIndex="0" type="button">
                                <Link to='/transparency' className="MuiTypography-root MuiTypography-body1 css-a3lrct">Transparency</Link>
                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </button>
                        </div>
                        <div className="d-menu-outer-item" style={{ textDecoration: 'none', position: 'relative' }}>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-fdsvhp" tabIndex="0" type="button">
                                <Link to='/activator' className="MuiTypography-root MuiTypography-body1 css-a3lrct">Ape Activator</Link>
                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </button>
                        </div>
                    </div>
                    <div className="MuiBox-root css-9zbgft"></div>

                    <div className="connect-button__wrapper" style={{ position: 'relative' }}>
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-lbudey" tabIndex="0" type="button">
                            <div className="connect-button__icon" style={{ marginRight: '8px', width: '24px', height: '24px', position: 'relative' }}>
                                <img src={navArrow} alt="connect-wallet-icon" className="connect-button__icon-normal" style={{ width: '24px', height: '24px', transition: '0.3s' }} />
                                <div className="connect-button__icon-hover">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 2 }}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.93164 1.99108L8.09041 5.19999H0.20048V6.79999H8.09041L4.93164 10.0089L6.07189 11.1313L11.123 5.99999L6.07189 0.868652L4.93164 1.99108Z" fill="#63EA71"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="MuiTypography-root MuiTypography-body1 connect-button__text css-11lk20i" style={{ transition: '0.3s' }}>Connect Wallet</p>
                            <span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                        <div className="connect-button__decor--2"></div>
                        <div className="connect-button__decor--1"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
