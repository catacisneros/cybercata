import { SPOKEO_AFFILIATE_URL } from '../constants'
import './Hero.css'

function Hero() {
  const handleScrollToResources = (e) => {
    e.preventDefault()
    const recursosSection = document.getElementById('recursos')
    if (recursosSection) {
      recursosSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleEmpezarRevision = () => {
    console.log('click_empezar_revision')
    window.open(SPOKEO_AFFILIATE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero-title">Revisa tu huella digital</h2>
        <p className="hero-subtitle">
          Descubre qué información tuya es pública en internet y cómo protegerte.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleEmpezarRevision}>
            Empezar revisión
          </button>
          <button className="btn btn-secondary" onClick={handleScrollToResources}>
            Ver herramientas OSINT
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

