import { Routes, Route } from 'react-router-dom'
import './assets/hellix/stylesheet.css'
import './App.css'
import Navbar from './Sections/Navbar'
import Footer from './Sections/Footer'
import Home from './Pages/Home'
import Transparency from './Pages/Transparency'
import Activator from './Pages/Activator'
import About from './Pages/About'
import Web2Insitutions from './Pages/Web2Insitutions'
import Web2Retail from './Pages/Web2Retail'

import { useLocation } from 'react-router-dom';
import AboutFooter from './Sections/AboutFooter'
import { useAccount } from 'wagmi'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletModal from './Sections/WalletModal'

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  const { address } = useAccount()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='w-full relative font-hellix'>

          {(location.pathname === '/' || location.pathname === '/transparency') && <Navbar />}
          {/* {(location.pathname !== '/' && location.pathname !== '/transparency') && <AboutHeader />} */}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transparency' element={<Transparency />} />
            <Route path='/activator' element={<Activator />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/web2-institutions' element={<Web2Insitutions />} />
            <Route path='/about/web2-retail' element={<Web2Retail />} />
          </Routes>
          {(location.pathname !== '/' && location.pathname !== '/transparency') && <AboutFooter />}
          {(location.pathname === '/' || location.pathname === '/transparency') && <Footer />}
          {address ? <WalletModal /> : null}
        </div>
      </QueryClientProvider>
    </>

  )
}

export default App
