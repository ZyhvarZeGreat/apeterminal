import React from 'react'
import ctaArrow from '../assets/ctaArrow.svg'
import { useRive } from '@rive-app/react-canvas';
// import anim from '../assets/riv_animations/grid_header_ape (1).riv'
const CallToAction = () => {
    const { rive, RiveComponent } = useRive({
        src: "https://www.apeterminal.io/rive/mavpa_floating.riv",
        autoplay: true,

    });
    return (
        <div className="MuiBox-root css-14crnjq">
            <div className="MuiBox-root css-1me5gi6">
                <p className="MuiTypography-root MuiTypography-body1 css-r881ud lg:text-start">Launch on Ape Terminal</p>
                <p className="MuiTypography-root MuiTypography-body1 css-1e7cib9 lg:text-start">Don’t miss the chance and super-<br />charge your IDO launch!</p>
                <div className="MuiBox-root css-1age63q">
                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-73ldr1" tabIndex="0" type="button">
                        <img src={ctaArrow} alt="apply-icon" style={{ marginRight: '8px' }} />
                        <p className="MuiTypography-root MuiTypography-body1 css-ltw0ph">Apply for Launchpad</p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                </div>
            </div>
            <div className="MuiBox-root css-1fu5gxi">


                <div className="rive-animation__wrapper" style={{ width: '530px', height: '530px', position: 'absolute', right: '-32px', top: '-32px', pointerEvents: 'none', userSelect: 'none' }}>
                    <div className='w-full h-full'>
                        <RiveComponent

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
