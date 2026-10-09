import Topbar from '../components/Topbar'
import Hero from '../components/Hero'
import About from '../components/About'
import FlatTypes from '../components/FlatTypes'
import Shops from '../components/Shops'
import AreaSummary from '../components/AreaSummary'
import Committee from '../components/Committee'
import Gallery from '../components/Gallery'
import Contact from'../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="layout">
      <Topbar />
      <div className="layout__content">
        <main>
          <Hero />
          <About />
          <FlatTypes />
          <Shops />
          <AreaSummary />
          <Committee />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
