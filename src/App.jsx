import Header from './components/Header'
import Hero from './components/Hero'
import Videos from './components/Videos'
import Resources from './components/Resources'
import ResponsibleUse from './components/ResponsibleUse'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Videos />
      <Resources />
      <ResponsibleUse />
      <Disclaimer />
      <Footer />
    </div>
  )
}

export default App
