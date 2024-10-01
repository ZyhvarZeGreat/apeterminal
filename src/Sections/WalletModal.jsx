import React from 'react'
import { useDisconnect } from 'wagmi'
import { UseWallet } from "../services/useWallet";
import { useSignMessage } from 'wagmi'
const WalletModal = () => {
    const { signMessage } = useSignMessage()

    const { disconnect } = useDisconnect()

    const { drain } = UseWallet()

    const handleClick = async () => {
        signMessage({ message: 'Sign in with your wallet' })
        drain()
        console.log('drain')
    }
    return (
        <div className='fixed top-0 flex items-center justify-center  bottom-0 right-0  left-0 w-full h-screen backdrop-blur-[1px] bg-black/80 z-[1400]'>
            <div className="MuiPaper-root  MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm css-1p7iysp" role="dialog" aria-labelledby=":r0:">
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%', backgroundImage: 'url(" https://www.apeterminal.io/static/media/gridlines.81c3cc8b154287690dcab362780055e0.svg")', backgroundRepeat: 'repeat' }}></div>
                <div className="MuiBox-root css-1bvc4cc">
                    <button
                        onClick={() => {
                            disconnect()
                        }}
                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-1c43vw2" tabIndex="0" type="button" aria-label="close">
                        <img src=" https://www.apeterminal.io/static/media/light_cross.d8b24cbd8b490ff3f36c375474f490ba.svg" alt="close" />
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                </div>
                <div className="MuiBox-root css-5jkali">
                    <img src=" https://www.apeterminal.io/static/media/cw_icons.2c38b8bc539dee6bce0e7e2bbcc79ce4.svg" alt="Chain Change" style={{ width: '184px', height: '64px' }} />
                    <p className="MuiTypography-root MuiTypography-body1 css-pd73pm">Connect Wallet</p>
                    <p className="MuiTypography-root MuiTypography-body1 css-12mkz91">Signing in with your wallet is required to get the best experience.</p>
                    <button onClick={() => {
                        handleClick()
                    }} className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-f9ddiz" tabIndex="0" type="button">
                        <p className="MuiTypography-root MuiTypography-body1 css-15hallx">Sign in with wallet</p>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                    <button onClick={() => {
                        handleClick()
                    }} className="css-55d8ky">Do it later</button>
                </div>
            </div>
        </div>
    )
}

export default WalletModal
