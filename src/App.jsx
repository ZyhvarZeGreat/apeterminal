import { useState } from 'react'
import './assets/hellix/stylesheet.css'
import './App.css'
import Navbar from './Sections/Navbar'
import Header from './Sections/Header'
import Footer from './Sections/Footer'
import CallToAction from './Sections/CallToAction'
import Features from './Sections/Features'
import Table from './Sections/Table'
import Projections from './Sections/Projections'
import Stats from './Sections/Stats'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Navbar />
      <div className="MuiGrid-root max-w-[1200px] mx-auto MuiGrid-container css-f3ek6v" >
        <Header />
        <Stats />
        <Projections />
        <Table />
        <Features />
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}

export default App
