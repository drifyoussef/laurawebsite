import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reasons from './components/Reasons'
import LifeReasons from './components/LifeReasons'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reasons />
        <LifeReasons />
        <Footer />
      </main>
    </>
  )
}

export default App
