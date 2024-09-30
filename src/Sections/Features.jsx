import React from 'react'
import step_one from '../assets/step_one.svg'
import step_two from '../assets/step_two.svg'
import step_three from '../assets/step_three.svg'
import step_four from '../assets/step_four.svg'
import step_arrow from '../assets/step_arrow.svg'
const Features = () => {
    return (
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-1j674on">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-af6crk">
                <p className="MuiTypography-root MuiTypography-body1 css-x6qbji">Don't miss out!</p>
                <p className="MuiTypography-root MuiTypography-body1 css-oz2wjh">Participate in your first sale in just 4 steps.</p>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-smd-12 MuiGrid-grid-md-3 css-17x0s7m">
                <div className="MuiBox-root css-1onz1ye">
                    <div className="css-fshkqs">
                        <div className="MuiBox-root css-99wmzq">
                            <img src={step_one} alt="Participation Box 1" style={{ width: '48px', height: '48px' }} />
                            <img src={step_arrow} alt="Participation Box 1" className="css-vue0g1" style={{ display: 'block' }} />
                        </div>
                        <div className="MuiBox-root css-0">
                            <div className="MuiBox-root css-h5fkc8">
                                <p className="MuiTypography-root MuiTypography-body1 css-1icebz">Connect wallet</p>
                                <p className="MuiTypography-root MuiTypography-body1 css-aoim8">Connect your favorite crypto wallet.</p>
                            </div>
                            <div className="MuiBox-root css-1rxwn4a">
                                <button className="css-h7ukvx">Connect</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-smd-12 MuiGrid-grid-md-3 css-17x0s7m">
                <div className="MuiBox-root css-1onz1ye">
                    <div className="css-4vna32">
                        <div className="MuiBox-root css-99wmzq">
                            <img src={step_two} alt="Participation Box 2" style={{ width: '48px', height: '48px' }} />
                            <img src={step_arrow} alt="Participation Box 2" className="css-vue0g1" style={{ display: 'block' }} />
                        </div>
                        <div className="MuiBox-root css-0">
                            <div className="MuiBox-root css-h5fkc8">
                                <p className="MuiTypography-root MuiTypography-body1 css-1icebz">Participate in a sale</p>
                                <p className="MuiTypography-root MuiTypography-body1 css-aoim8">Join your first sale and be eligible for a chance to win $25 in free IDO tokens.</p>
                            </div>
                            <div className="MuiBox-root css-1rxwn4a"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-smd-12 MuiGrid-grid-md-3 css-17x0s7m">
                <div className="MuiBox-root css-1onz1ye">
                    <div className="css-1cakehq">
                        <div className="MuiBox-root css-99wmzq">
                            <img src={step_three} alt="Participation Box 3" style={{ width: '48px', height: '48px' }} />
                            <img src={step_arrow} alt="Participation Box 3" className="css-vue0g1" style={{ display: 'block' }} />
                        </div>
                        <div className="MuiBox-root css-0">
                            <div className="MuiBox-root css-h5fkc8">
                                <p className="MuiTypography-root MuiTypography-body1 css-1icebz">Complete KYC</p>
                                <p className="MuiTypography-root MuiTypography-body1 css-aoim8">You only need to KYC when you win.</p>
                            </div>
                            <div className="MuiBox-root css-1rxwn4a"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-smd-12 MuiGrid-grid-md-3 css-17x0s7m">
                <div className="MuiBox-root css-1onz1ye">
                    <div className="css-yaoype">
                        <div className="MuiBox-root css-99wmzq">
                            <img src={step_four} alt="Participation Box 4" style={{ width: '48px', height: '48px' }} />
                            <img src={step_arrow} alt="Participation Box 4" className="css-vue0g1" style={{ display: 'none' }} />
                        </div>
                        <div className="MuiBox-root css-0">
                            <div className="MuiBox-root css-h5fkc8">
                                <p className="MuiTypography-root MuiTypography-body1 css-1icebz">Join IDO</p>
                                <p className="MuiTypography-root MuiTypography-body1 css-aoim8">Pay in crypto, contribute to your winning sale, claim your tokens upon official listing.</p>
                            </div>
                            <div className="MuiBox-root css-1rxwn4a"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
