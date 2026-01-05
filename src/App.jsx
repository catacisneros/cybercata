import Header from './components/Header'
import Hero from './components/Hero'
import VideoSingle from './components/VideoSingle'
import SecurityTools from './components/SecurityTools'
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
      <div className="container">
        <VideoSingle
          videoId="7591263826872454431"
          cite="https://www.tiktok.com/@catacisneros/video/7591263826872454431"
        >
          <a
            target="_blank"
            title="@catacisneros"
            href="https://www.tiktok.com/@catacisneros?refer=embed"
            rel="noopener noreferrer"
          >
            @catacisneros
          </a>
          {' '}
          Cómo hacer{' '}
          <a
            title="osint"
            target="_blank"
            href="https://www.tiktok.com/tag/osint?refer=embed"
            rel="noopener noreferrer"
          >
            #OSINT
          </a>
          {' '}de la manera más fácil desde tu buscador 🌐 No hace falta que seas un profesional en{' '}
          <a
            title="ciberseguridad"
            target="_blank"
            href="https://www.tiktok.com/tag/ciberseguridad?refer=embed"
            rel="noopener noreferrer"
          >
            #ciberseguridad
          </a>
          {' '}🔐🛡️link en mi perfil para más info ℹ️ y guarda este video para seguir aprendiendo!{' '}
          <a
            title="cybertok"
            target="_blank"
            href="https://www.tiktok.com/tag/cybertok?refer=embed"
            rel="noopener noreferrer"
          >
            #cybertok
          </a>
          {' '}
          <a
            title="usa"
            target="_blank"
            href="https://www.tiktok.com/tag/usa?refer=embed"
            rel="noopener noreferrer"
          >
            #usa
          </a>
          {' '}
          <a
            title="huelladigital"
            target="_blank"
            href="https://www.tiktok.com/tag/huelladigital?refer=embed"
            rel="noopener noreferrer"
          >
            #HuellaDigital
          </a>
          {' '}
          <a
            target="_blank"
            title="♬ Lacrimosa - Jairos & Isabel"
            href="https://www.tiktok.com/music/Lacrimosa-6789995459969550337?refer=embed"
            rel="noopener noreferrer"
          >
            ♬ Lacrimosa - Jairos & Isabel
          </a>
        </VideoSingle>
      </div>
      <SecurityTools />
      <div className="container">
        <VideoSingle
          videoId="7591980027990887710"
          cite="https://www.tiktok.com/@catacisneros/video/7591980027990887710"
        >
          <a
            target="_blank"
            title="@catacisneros"
            href="https://www.tiktok.com/@catacisneros?refer=embed"
            rel="noopener noreferrer"
          >
            @catacisneros
          </a>
          {' '}
          La importancia de usar un{' '}
          <a
            title="vpn"
            target="_blank"
            href="https://www.tiktok.com/tag/vpn?refer=embed"
            rel="noopener noreferrer"
          >
            #VPN
          </a>
          {' '}siempre 🔐cuídate de los{' '}
          <a
            title="hacker"
            target="_blank"
            href="https://www.tiktok.com/tag/hacker?refer=embed"
            rel="noopener noreferrer"
          >
            #hacker
          </a>
          {' '}y protege tu información{' '}
          <a
            title="online"
            target="_blank"
            href="https://www.tiktok.com/tag/online?refer=embed"
            rel="noopener noreferrer"
          >
            #online
          </a>
          {' '}🌐{' '}
          <a
            title="ciberseguridad"
            target="_blank"
            href="https://www.tiktok.com/tag/ciberseguridad?refer=embed"
            rel="noopener noreferrer"
          >
            #ciberseguridad
          </a>
          {' '}
          <a
            title="cybertok"
            target="_blank"
            href="https://www.tiktok.com/tag/cybertok?refer=embed"
            rel="noopener noreferrer"
          >
            #cybertok
          </a>
          {' '}
          <a
            target="_blank"
            title="♬ original sound - CyberCata"
            href="https://www.tiktok.com/music/original-sound-7591980072307821343?refer=embed"
            rel="noopener noreferrer"
          >
            ♬ original sound - CyberCata
          </a>
        </VideoSingle>
      </div>
      <Videos />
      <Resources />
      <ResponsibleUse />
      <Disclaimer />
      <Footer />
    </div>
  )
}

export default App
