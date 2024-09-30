import Header from '../Sections/Header'
import CallToAction from '../Sections/CallToAction'
import Features from '../Sections/Features'
import Table from '../Sections/Table'
import Projections from '../Sections/Projections'
import Stats from '../Sections/Stats'
import './Transparency.css'
const Home = () => {
    return (
        <div className="MuiGrid-root max-w-[1200px] mx-auto MuiGrid-container css-f3ek6v" >
            <Header />
            <Stats />
            <Projections />
            <Table />
            <Features />
            <CallToAction />
        </div>
    )
}

export default Home
