
import About from './components/section'
import Card from './components/box'
import ComponyInfo from './components/contbox'
import Footer from './components/Footer/footer'
import Hero from './components/Home/hom'
import './index.css'
import Contenerbox from './components/boxcontener'
import Header from './components/navbar/navbar'
import Moote from './components/Footer/moote'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contenerbox/>
      <ComponyInfo />
      <Card />
      <Moote/>
      <Footer/>
    </>
  )
}

export default App
