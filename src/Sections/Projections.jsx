import React from 'react'
import icon from '../assets/comingsoon.svg'
import cover from '../assets/comingsoon_cover.svg'
import raise from '../assets/total_raise.svg'
import ends from '../assets/ends_in.svg'
import sale from '../assets/sale_type.svg'
import market from '../assets/market_maker.svg'
import info from '../assets/info_green.svg'

const Projections = () => {


    return (
        <>

            <div className="MuiBox-root css-0" style={{
                background: 'rgb(0, 0, 0)', width: '100%', height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '0px',
            }}>
                <div className="MuiBox-root css-146mf36">
                    <div className="MuiBox-root css-fwk5nr">
                        <div className="MuiBox-root css-1xnznnu">
                            <div className="MuiBox-root css-1t5rww6">
                                <img src="https://cdn.apeterminal.io/pett.ai.svg" alt="featured launch logo" style={{
                                    filter: 'none',
                                    height: '48px',
                                    width: '48px',
                                    borderRadius: '12px',
                                }} />
                                <p className="MuiTypography-root MuiTypography-body1 css-o76i7d">
                                    Pett.ai
                                </p>
                            </div>
                            <p className="MuiTypography-root MuiTypography-body1 css-1x0vgko" aria-label="Number 1 AI Companion on Telegram">
                                Number 1 AI Companion on Telegram
                            </p>
                            <div className="MuiBox-root css-1tgyy15">
                                <div className="MuiBox-root css-7nudib">
                                    <p className="MuiTypography-root MuiTypography-body1 css-12os4gs">
                                        Total Raise:
                                    </p>
                                    <p className="MuiTypography-root MuiTypography-body1 css-nh532l">
                                        250,000<span style={{
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontWeight: 400,
                                            lineHeight: '27px',
                                            letterSpacing: '-0.02em',
                                            textAlign: 'left',
                                            color: 'rgb(126, 129, 128)',
                                            marginLeft: '4px',
                                        }}>USDC</span>
                                    </p>
                                </div>
                                <div style={{ width: 'auto' }}>
                                    <div className="MuiBox-root css-1g6i77z"></div>
                                </div>
                                <div className="MuiBox-root css-4ue4y">
                                    <p className="MuiTypography-root MuiTypography-body1 css-12os4gs">
                                        Registration Ends in:
                                    </p>
                                    <p className="MuiTypography-root MuiTypography-body1 css-1pdua4a">
                                        <span style={{
                                            background: 'linear-gradient(90.22deg, rgb(255, 119, 34) 0.16%, rgb(244, 253, 171) 99.78%)',
                                            WebkitTextFillColor: 'transparent',
                                        }}>10d 11h 37m 14s</span>
                                    </p>
                                </div>
                            </div>
                            <div className="MuiBox-root css-v2wsrc">
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1k6qdko" tabIndex="0" type="button">
                                    <p className="MuiTypography-root MuiTypography-body1 css-15hallx">
                                        Participate Now
                                    </p>
                                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                                <div className="MuiBox-root css-70qvj9">
                                    <img src={info} alt="info icon" aria-label="We take AML/CTF seriously. KYC must be completed when winning and before participation." className="" style={{ cursor: 'pointer', height: '16px', width: '16px' }} />
                                    <p className="MuiTypography-root MuiTypography-body1 css-1ycxgpq">
                                        No KYC required to opt-in
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="MuiBox-root css-1pmgj2p">
                            <video autoPlay loop playsInline poster="https://cdn.apeterminal.io/pett.ai-featured.png" style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                            }}>
                                <source src="https://cdn.apeterminal.io/Pett ai 3.mp4" type="video/mp4" />
                            </video>
                            <div className="MuiBox-root css-1okgfe9">
                                <div className="MuiBox-root css-innedw">
                                    <p className="MuiTypography-root MuiTypography-body1 css-vxh3tg">
                                        AI
                                    </p>
                                </div>
                                <div className="MuiBox-root css-innedw">
                                    <p className="MuiTypography-root MuiTypography-body1 css-vxh3tg">
                                        Base
                                    </p>
                                </div>
                                <div className="MuiBox-root css-innedw">
                                    <p className="MuiTypography-root MuiTypography-body1 css-vxh3tg">
                                        Telegram
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MuiBox-root css-p2o7c7">
                    <p className="MuiTypography-root MuiTypography-body1 css-aszhru">
                        Current &amp; Upcoming Sales
                    </p>
                    <div className="MuiBox-root css-5zs60q">
                        <div className="MuiBox-root css-mmusq3">
                            <div className="MuiBox-root css-crt6mt">
                                <div className="launch-card-hover-bg" style={{
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 0,
                                    borderRadius: '16px',
                                    transition: '0.3s',
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                    background: 'radial-gradient(60.16% 54.61% at 50% 116.08%, rgba(255, 185, 0, 0.14) 0%, rgba(255, 185, 0, 0) 100%), rgb(15, 17, 19)',
                                }}></div>
                                <div className="MuiBox-root css-7gf6bn">
                                    <video autoPlay loop playsInline poster="https://cdn.apeterminal.io/Featured Hero Image (12).png" style={{
                                        width: 'calc(100% - 16px)',
                                        marginTop: '8px',
                                        marginRight: '8px',
                                        marginLeft: '8px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        height: '209px',
                                    }}>
                                        <source src="https://cdn.apeterminal.io/VID_20240309_031317_941 (1).mp4" type="video/mp4" />
                                    </video>
                                    <div className="MuiBox-root css-1vgtqkw">
                                        <div className="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div className="MuiBox-root css-5mjuy5">
                                                <p className="MuiTypography-root MuiTypography-body1 css-bcm99x">
                                                    EigenLayer
                                                </p>
                                            </div>
                                            <div className="MuiBox-root css-5mjuy5">
                                                <p className="MuiTypography-root MuiTypography-body1 css-bcm99x">
                                                    Restaking
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://cdn.apeterminal.io/Icon (34).svg" alt="launch-logo" loading="lazy" style={{
                                    filter: 'none',
                                    height: '56px',
                                    width: '56px',
                                    marginRight: '10px',
                                    overflow: 'hidden',
                                    marginTop: '-40px',
                                    position: 'relative',
                                    zIndex: 2,
                                    left: '32px',
                                    borderRadius: '12px',
                                }} />
                                <div className="MuiBox-root css-1fjyg06" style={{ position: 'relative', zIndex: 2 }}>
                                    <p className="MuiTypography-root MuiTypography-body1 css-f7xr1a">
                                        Ponder
                                    </p>
                                    <div className="MuiGrid-root MuiGrid-container css-1b1jvye">
                                        <div className="MuiBox-root css-amj7dw">
                                            <img src={raise} alt="total-raise" />
                                            <p className="MuiTypography-root MuiTypography-body1 css-946we3">
                                                Total Raise
                                            </p>
                                        </div>
                                        <p className="MuiTypography-root MuiTypography-body1 css-39a6fh">
                                            $250,000
                                        </p>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-coxt3f">
                                        <div className="MuiBox-root css-amj7dw">
                                            <img src={ends} alt="ends-in" />
                                            <p className="MuiTypography-root MuiTypography-body1 css-946we3">
                                                Ends In
                                            </p>
                                        </div>
                                        <p className="MuiTypography-root MuiTypography-body1 css-1ikfppg">
                                            <span style={{
                                                background: 'linear-gradient(90.22deg, rgb(255, 119, 34) 0.16%, rgb(244, 253, 171) 99.78%)',
                                                WebkitTextFillColor: 'transparent',
                                            }}>21d 11h 37m 14s</span>
                                        </p>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-coxt3f">
                                        <div className="MuiBox-root css-amj7dw">
                                            <img src={sale} alt="sale-type" />
                                            <p className="MuiTypography-root MuiTypography-body1 css-946we3">
                                                Sale Type
                                            </p>
                                        </div>
                                        <p className="MuiTypography-root MuiTypography-body1 css-7gwjfe">
                                            Ape Launch
                                        </p>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-coxt3f">
                                        <div className="MuiBox-root css-amj7dw">
                                            <img src={market} alt="market-maker" />
                                            <p className="MuiTypography-root MuiTypography-body1 css-1odhrj9">
                                                Market Maker
                                            </p>
                                        </div>
                                        <p className="MuiTypography-root MuiTypography-body1 css-39a6fh">
                                            TBA
                                        </p>
                                    </div>
                                    <div className="MuiBox-root css-1ykdma4">
                                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-5891wo" tabIndex="0" type="button">
                                            <p className="MuiTypography-root MuiTypography-body1 css-pyy4xo">
                                                Participate Now
                                            </p>
                                            <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MuiBox-root css-1y80kb6">
                            <div className="launch-soon-hover-bg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                width: '100%',
                                height: '100%',
                                zIndex: 0,
                                borderRadius: '16px',
                                transition: '0.3s',
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                                background: 'radial-gradient(60.16% 54.61% at 50% 116.08%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), rgb(20, 20, 20)',
                            }}></div>
                            <img src={cover} alt="comingsoon-cover" loading="lazy" style={{
                                width: 'calc(100% - 16px)',
                                marginTop: '8px',
                                marginRight: '8px',
                                marginLeft: '8px',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                height: '209px',
                                position: 'relative',
                                zIndex: 1,
                            }} />
                            <img src={icon} alt="comingsoon-avatar" loading="lazy" style={{
                                height: '56px',
                                width: '56px',
                                marginRight: '10px',
                                overflow: 'hidden',
                                marginTop: '-40px',
                                position: 'relative',
                                left: '32px',
                                zIndex: 2,
                            }} />
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div className="MuiBox-root css-1xw48va">
                                    <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '78px', height: '16px' }}></span>
                                    <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '50px', height: '16px' }}></span>
                                </div>
                                <div className="MuiBox-root css-uzkk6z">
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '78px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '50px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '32px', height: '12px' }}></span>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '90px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '0px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '39px', height: '12px' }}></span>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '138px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '0px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '46px', height: '12px' }}></span>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '83px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '0px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '23px', height: '12px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MuiBox-root css-1y80kb6">
                            <div className="launch-soon-hover-bg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                width: '100%',
                                height: '100%',
                                zIndex: 0,
                                borderRadius: '16px',
                                transition: '0.3s',
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                                background: 'radial-gradient(60.16% 54.61% at 50% 116.08%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), rgb(20, 20, 20)',
                            }}></div>
                            <img src={cover} alt="comingsoon-cover" loading="lazy" style={{
                                width: 'calc(100% - 16px)',
                                marginTop: '8px',
                                marginRight: '8px',
                                marginLeft: '8px',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                height: '209px',
                                position: 'relative',
                                zIndex: 1,
                            }} />
                            <img src={icon} alt="comingsoon-avatar" loading="lazy" style={{
                                height: '56px',
                                width: '56px',
                                marginRight: '10px',
                                overflow: 'hidden',
                                marginTop: '-40px',
                                position: 'relative',
                                left: '32px',
                                zIndex: 2,
                            }} />
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div className="MuiBox-root css-1xw48va">
                                    <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '78px', height: '16px' }}></span>
                                    <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '50px', height: '16px' }}></span>
                                </div>
                                <div className="MuiBox-root css-uzkk6z">
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '78px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '50px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '32px', height: '12px' }}></span>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '90px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '0px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '39px', height: '12px' }}></span>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '138px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '0px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '46px', height: '12px' }}></span>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-container css-h5zhjv">
                                        <div className="MuiBox-root css-1u7f6af">
                                            <span className="MuiSkeleton-root MuiSkeleton-circular css-1qphlbp" style={{ width: '16px', height: '16px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '83px', height: '12px' }}></span>
                                            <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '0px', height: '12px' }}></span>
                                        </div>
                                        <span className="MuiSkeleton-root MuiSkeleton-rectangular css-u9wd5n" style={{ width: '23px', height: '12px' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projections
