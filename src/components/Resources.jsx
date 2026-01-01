import { SOCIAL_LINKS } from '../constants'
import './Resources.css'

function Resources() {
  const tiktokLink = SOCIAL_LINKS.find(social => social.name === 'TikTok')

  const handleSeguirTikTok = () => {
    console.log('click_seguir_tiktok')
    if (tiktokLink) {
      window.open(tiktokLink.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="recursos" className="resources">
      <div className="container">
        <h2 className="section-title">Aprende más</h2>
        <div className="cta-tiktok">
          <p className="cta-text">Sígueme en TikTok donde subo videos sobre ciberseguridad</p>
          <button className="btn btn-primary" onClick={handleSeguirTikTok}>
            Seguir en TikTok
          </button>
        </div>
      </div>
    </section>
  )
}

export default Resources
