
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import CaseStudies from './components/CaseStudies'
import WorkingProcess from './components/WorkingProcess'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='font-primary'>
      <Navbar/>
      <Hero/>
      <Services/>
      <CTA/>
      <CaseStudies/>
      <WorkingProcess/>
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
