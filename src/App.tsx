
import './App.css'
import Bookingsteps from './Components/BookingSteps/Bookingsteps'
import Destinations from './Components/Destinations/Destinations'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { HeroSection } from './Components/HeroSection/HeroSection'
import Partners from './Components/Partners/Partners'
import Services from './Components/Services/Services'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {

  return (
    <div className='app'>
      <Header />
      <HeroSection />
      <Services />
      <Destinations />
      <Bookingsteps />
      <Testimonial />
      <Partners />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
