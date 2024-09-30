import React, { useState } from 'react'
import bg from '../assets/hero-background.svg'
import hero from '../assets/revamped_homepage_bg.svg'
import { useRive } from '@rive-app/react-canvas';

const Header = () => {
    const [blurHeader, setBlurHeader] = useState(true)
    const { rive, RiveComponent } = useRive({
        src: "https://www.apeterminal.io/rive/grid_header_ape.riv",
        stateMachines: "bumpy",
        autoplay: true,
    });


    setTimeout(() => {
        setBlurHeader(false)
    }, 1000);

    return (
        <>

            <div className="MuiBox-root css-ohwg9z">
                <div className="rive-lines">
                    <span className="in-view" style={{ display: 'block', height: '100%', width: '100%', opacity: 1, transform: 'none' }}>
                        <div className="rive-lines__inner" style={{ position: 'absolute', top: 0, left: 0, width: '100%', userSelect: 'none', zIndex: 1, opacity: 0.6, aspectRatio: '16 / 10' }}>
                            <div className='mx-auto ' style={{ width: '100%', height: '100%', }}>

                                <RiveComponent


                                    width="1232" height="770" style={{ verticalAlign: 'top', width: '1232px', height: '770px' }}


                                />
                            </div>
                        </div>
                    </span>
                </div>
                <div className="MuiBox-root css-pc4gqw">
                    <img src={hero} alt="background" style={{ width: '100vw', height: '100%', pointerEvents: 'none', userSelect: 'none', aspectRatio: '1278 / 749' }} />
                    <span className="in-view" style={{ display: 'block', height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, opacity: 1, transform: 'none' }}>
                        <div className="hero-background-decor" style={{ width: '100%', position: 'absolute', left: 0, top: '26%', pointerEvents: 'none', zIndex: 0, userSelect: 'none' }}>
                            <img src={bg} alt="background-decor" style={{ width: '100vw', height: '100%', pointerEvents: 'none' }} />
                        </div>
                    </span>
                </div>
                <div className="MuiBox-root css-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', zIndex: 1, position: 'absolute', top: '32%' }}>
                    <div className="MuiBox-root css-1316xsb">
                        <p className="MuiTypography-root MuiTypography-body1 css-84aoz6">
                            <span className="in-view opacity-100 filter-none transform-none">
                                <span className={``}>Most Liquid</span>
                            </span>
                            <br />
                            <span className="in-view opacity-100filter-none transform-none">
                                <span className={``}>Primary Market</span>
                            </span>
                        </p>
                        <span className="in-view opacity-100 filter-none transform-none">
                            <p className="MuiTypography-root MuiTypography-body1 css-8toct">Claim first access to the most <br /> important tokens in crypto.</p>
                        </span>
                        <span className="in-view opacity-100 filter-none transform-none">
                            <div className="MuiBox-root css-sjcdb8">
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-uh0n51" href="https://t.me/ApeTerminalChat" target="_blank" rel="noopener noreferrer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#B1B4B3" xmlns="http://www.w3.org/2000/svg" className="icon_svg orange_hover_svg">
                                        <path d="M19.4573 4.19321L2.62415 11.1292C1.94676 11.4521 1.71764 12.099 2.46039 12.45L6.77885 13.9164L17.2202 7.02136C17.7903 6.58849 18.374 6.70393 17.8718 7.18008L8.90401 15.856L8.6223 19.5276C8.88323 20.0946 9.36099 20.0972 9.66572 19.8154L12.1468 17.307L16.396 20.7068C17.3829 21.3312 17.9199 20.9283 18.1322 19.784L20.9194 5.68268C21.2087 4.27416 20.7152 3.65357 19.4573 4.19321Z"></path>
                                    </svg>
                                </a>
                                <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-uh0n51" href="https://twitter.com/apeterminal" target="_blank" rel="noopener noreferrer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#B1B4B3" xmlns="http://www.w3.org/2000/svg" className="icon_svg orange_hover_svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.35686 4H2.99969L9.35136 12.701L3.40602 20H6.15295L10.6496 14.4795L14.6425 19.9492H19.9997L13.4634 10.9954L13.475 11.0108L19.1028 4.10161H16.3559L12.1765 9.23251L8.35686 4ZM5.95676 5.52382H7.62453L17.0426 18.4254H15.3749L5.95676 5.52382Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
