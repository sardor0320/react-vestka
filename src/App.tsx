
import About from './components/section'
import Card from './components/box'
import ComponyInfo from './components/contbox'
import Footer from './components/Footer/footer'
import Hero from './components/Home/hom'
import './index.css'
import Contenerbox from './components/boxcontener'
import Footerlogo from './components/Footer/footer.logo'
import Header from './components/navbar/navbar'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contenerbox/>
      <ComponyInfo />
      <Card />
      <Footerlogo/>
      <Footer/>
    </>
  )
}

export default App
