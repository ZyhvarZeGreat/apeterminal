import React from 'react'
import { useRive } from '@rive-app/react-canvas';
const Stats = () => {



    const { rive: Roi, RiveComponent: RoiComponent } = useRive({
        src: "https://www.apeterminal.io/rive/ape_element_01-new.riv",
        autoplay: true,
        animations: ['BOX_01', 'I']
    });
    const { rive: participants, RiveComponent: ParticipantsComponent } = useRive({
        src: "https://www.apeterminal.io/rive/ape_element_02-new.riv",
        autoplay: true

    });

    const { rive: totalAssets, RiveComponent: TotalAssetsComponent } = useRive({
        src: "https://www.apeterminal.io/rive/ape_element_03-new.riv",
        autoplay: true,
        animations: ['IDLE_BOX_03', 'BOX_ON_03', 'BOX_OFF_03']
    });
    const handleMouseEnter = (riveInstance) => {
        console.log('Mouse Enter');
        riveInstance && riveInstance.play();
    };

    const handleMouseLeave = (riveInstance) => {
        console.log('Mouse Leave');
        riveInstance && riveInstance.pause();
    };

    return (
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-mjaphv">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-af6crk">
                <div className="rive-animation__wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0px, 1fr))', gap: '8px' }}>
                    <div className="rive-animation__item" style={{ width: '100%', pointerEvents: 'auto', aspectRatio: '16 / 5', position: 'relative' }}>
                        <div className="rive-animation__item-info" style={{ position: 'absolute', paddingLeft: '32px', paddingRight: '32px', top: '50%', transform: 'translateY(-50%)', left: '0px', width: '100%', textAlign: 'center', pointerEvents: 'none' }}>
                            <p className="MuiTypography-root MuiTypography-body1 css-18dv889">12.84</p>
                            <p className="MuiTypography-root MuiTypography-body1 css-kyz5nj">AVG ROI</p>
                        </div>
                        <div style={{ width: '100%', height: '100%' }}>
                            <RoiComponent
                                onMouseEnter={() => handleMouseEnter(Roi)}
                                onMouseLeave={() => handleMouseLeave(Roi)}
                            />
                        </div>
                    </div>
                    <div className="rive-animation__item" style={{ width: '100%', pointerEvents: 'auto', aspectRatio: '16 / 5', position: 'relative' }}>
                        <div className="rive-animation__item-info" style={{ position: 'absolute', paddingLeft: '32px', paddingRight: '32px', top: '50%', transform: 'translateY(-50%)', left: '0px', width: '100%', textAlign: 'left', pointerEvents: 'none' }}>
                            <p className="MuiTypography-root MuiTypography-body1 css-18dv889">475,464</p>
                            <p className="MuiTypography-root MuiTypography-body1 css-kyz5nj">Participants</p>
                        </div>
                        <div style={{ width: '100%', height: '100%' }}>
                            <ParticipantsComponent
                                onMouseEnter={() => handleMouseEnter(participants)}
                                onMouseLeave={() => handleMouseLeave(participants)} />
                        </div>
                    </div>
                    <div className="rive-animation__item" style={{ width: '100%', pointerEvents: 'auto', aspectRatio: '16 / 5', position: 'relative' }}>
                        <div className="rive-animation__item-info" style={{ position: 'absolute', paddingLeft: '32px', paddingRight: '32px', top: '50%', transform: 'translateY(-50%)', left: '0px', width: '100%', textAlign: 'center', pointerEvents: 'none' }}>
                            <p className="MuiTypography-root MuiTypography-body1 css-kyz5nj">Total Assets</p>
                            <p className="MuiTypography-root MuiTypography-body1 css-18dv889">$1,840,390,965</p>
                            <p className="MuiTypography-root MuiTypography-body1 css-kyz5nj">Connected</p>
                        </div>
                        <div style={{ width: '100%', height: '100%' }}>
                            <TotalAssetsComponent
                                onMouseEnter={() => handleMouseEnter(totalAssets)}
                                onMouseLeave={() => handleMouseLeave(totalAssets)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
