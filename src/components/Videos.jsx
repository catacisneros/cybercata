import { useEffect } from 'react'
import { SPOKEO_AFFILIATE_URL, TIKTOK_VIDEOS, SUNSHINE_LAWS_URL } from '../constants'
import './Videos.css'

function Videos() {
  // Cargar script de TikTok una sola vez
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="tiktok.com/embed"]')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      // Si el script ya existe, ejecutar el procesamiento de embeds
      if (window.tiktokEmbed) {
        window.tiktokEmbed.lib.render()
      }
    }
  }, [])

  const handleVerAnalisis = () => {
    console.log('click_ver_analisis_automatico')
    window.open(SPOKEO_AFFILIATE_URL, '_blank', 'noopener,noreferrer')
  }

  const handleVerRecursosOficiales = () => {
    console.log('click_ver_recursos_oficiales')
    window.open(SUNSHINE_LAWS_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="videos">
      <div className="container">
        <h2 className="section-title">Mis videos</h2>
        <p className="section-subtitle">Explicado rápido y en español.</p>

        {/* Video 1: Huella digital */}
        <div className="video-item">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@catacisneros/video/7589785685196950815"
            data-video-id="7589785685196950815"
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a
                target="_blank"
                title="@catacisneros"
                href="https://www.tiktok.com/@catacisneros?refer=embed"
                rel="noopener noreferrer"
              >
                @catacisneros
              </a>
              {' '}
              Revisa tu{' '}
              <a
                title="huelladigital"
                target="_blank"
                href="https://www.tiktok.com/tag/huelladigital?refer=embed"
                rel="noopener noreferrer"
              >
                #HuellaDigital
              </a>
              {' '}con{' '}
              <a
                title="osint"
                target="_blank"
                href="https://www.tiktok.com/tag/osint?refer=embed"
                rel="noopener noreferrer"
              >
                #OSINT
              </a>
              {' '}🔍 si quieres que te enseñe a hacerlo, déjamelo saber en los comentarios 😎👩‍💻 Pronto subiré un video explicando los{' '}
              <a
                title="sunshinelaws"
                target="_blank"
                href="https://www.tiktok.com/tag/sunshinelaws?refer=embed"
                rel="noopener noreferrer"
              >
                #SunshineLaws
              </a>
              {' '}en Florida ☀️{' '}
              <a
                title="cybertok"
                target="_blank"
                href="https://www.tiktok.com/tag/cybertok?refer=embed"
                rel="noopener noreferrer"
              >
                #CyberTok
              </a>
              {' '}
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
                target="_blank"
                title="♬ original sound - CyberCata"
                href="https://www.tiktok.com/music/original-sound-7589785618847157022?refer=embed"
                rel="noopener noreferrer"
              >
                ♬ original sound - CyberCata
              </a>
            </section>
          </blockquote>

          {/* Bloque contextual de Spokeo */}
          <div className="video-context">
            <p className="context-label">🔎 Recurso mencionado en el video</p>
            <p className="context-text">Herramienta para organizar información públicamente disponible.</p>
            <button className="btn btn-primary-small" onClick={handleVerAnalisis}>
              Ver análisis automático
            </button>
          </div>
        </div>

        {/* Video 2: Sunshine Laws */}
        <div className="video-item">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@catacisneros/video/7590114001485417759"
            data-video-id="7590114001485417759"
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a
                target="_blank"
                title="@catacisneros"
                href="https://www.tiktok.com/@catacisneros?refer=embed"
                rel="noopener noreferrer"
              >
                @catacisneros
              </a>
              {' '}
              Que son los{' '}
              <a
                title="sunshinelaws"
                target="_blank"
                href="https://www.tiktok.com/tag/sunshinelaws?refer=embed"
                rel="noopener noreferrer"
              >
                #SunshineLaws
              </a>
              {' '}☀️? Te lo explico en menos de 30 segundos⏳posteando drafts desde el hospital 🤒 tengo pendiente hacer el video explicando cómo hacer{' '}
              <a
                title="osint"
                target="_blank"
                href="https://www.tiktok.com/tag/osint?refer=embed"
                rel="noopener noreferrer"
              >
                #OSINT
              </a>
              {' '}y que herramientas pueden usarse 🌐🔐{' '}
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
                title="hacker"
                target="_blank"
                href="https://www.tiktok.com/tag/hacker?refer=embed"
                rel="noopener noreferrer"
              >
                #hacker
              </a>
              {' '}
              <a
                title="florida"
                target="_blank"
                href="https://www.tiktok.com/tag/florida?refer=embed"
                rel="noopener noreferrer"
              >
                #florida
              </a>
              {' '}
              <a
                target="_blank"
                title="♬ Carmen Habanera - Abaco Tango Club"
                href="https://www.tiktok.com/music/Carmen-Habanera-5000000001001822198?refer=embed"
                rel="noopener noreferrer"
              >
                ♬ Carmen Habanera - Abaco Tango Club
              </a>
            </section>
          </blockquote>

          <div className="video-context">
            <button className="btn btn-secondary-small" onClick={handleVerRecursosOficiales}>
              Ver recursos oficiales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos
