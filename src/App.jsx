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


function App() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className='w-full font-hellix'>
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transparency' element={<Transparency />} />
        <Route path='/activator' element={<Activator />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/web2-institutions' element={<Web2Insitutions />} />
        <Route path='/about/web2-retail' element={<Web2Retail />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </div>
  )
}

export default App
