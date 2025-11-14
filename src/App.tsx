
import './App.css'
import Destinations from './Components/Destinations/Destinations'
import Header from './Components/Header/Header'
import { HeroSection } from './Components/HeroSection/HeroSection'
import Services from './Components/Services/Services'

function App() {

  return (
    <div className='app'>
      <Header />
      <HeroSection />
      <Services />
      <Destinations />
    </div>
  )
}

export default App
