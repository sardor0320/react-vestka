
import About from './components/about/about'
import AudienceTargeting from './components/AudienceTargeting/AudienceTargeting'
import Card from './components/card/card'
import ComponyInfo from './components/CompanyInfo/componyinfo'
import Componylogo from './components/componyLogo/componylogo'
import EffectiveCommunication from './components/EffectiveCommunication/EffectiveCommunication'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import SliderComponent from './components/slide/slide'
import './index.css'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Componylogo />
      <About />
      <AudienceTargeting />
      <SliderComponent />
      <ComponyInfo />
      <EffectiveCommunication />
      <Card />
      <div className="py-20">
        <Componylogo />

      </div>
      <Footer />
    </>
  )
}

export default App
