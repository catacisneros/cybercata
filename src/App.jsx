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
      <SecurityTools />
      <VideoSingle
        videoId="7569341678679526668"
        cite="https://www.tiktok.com/@catacisneros/video/7569341678679526668"
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
        ⚠️ Top 5 razones por las que te van a hackear (y cómo prevenirlo) 👩🏻‍💻 sígueme para más tips ‼️{' '}
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
          title="safetytok"
          target="_blank"
          href="https://www.tiktok.com/tag/safetytok?refer=embed"
          rel="noopener noreferrer"
        >
          #safetytok
        </a>
        {' '}
        <a
          title="cybersecurity"
          target="_blank"
          href="https://www.tiktok.com/tag/cybersecurity?refer=embed"
          rel="noopener noreferrer"
        >
          #cybersecurity
        </a>
        {' '}
        <a
          title="facts"
          target="_blank"
          href="https://www.tiktok.com/tag/facts?refer=embed"
          rel="noopener noreferrer"
        >
          #facts
        </a>
        {' '}
        <a
          title="fyp"
          target="_blank"
          href="https://www.tiktok.com/tag/fyp?refer=embed"
          rel="noopener noreferrer"
        >
          #fyp
        </a>
        {' '}
        <a
          target="_blank"
          title="♬ original sound - CyberCata"
          href="https://www.tiktok.com/music/original-sound-7569341662405659404?refer=embed"
          rel="noopener noreferrer"
        >
          ♬ original sound - CyberCata
        </a>
      </VideoSingle>
      <Videos />
      <Resources />
      <ResponsibleUse />
      <Disclaimer />
      <Footer />
    </div>
  )
}

export default App
