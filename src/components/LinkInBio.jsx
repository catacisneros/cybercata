import { FaTiktok, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaSearch, FaShieldAlt, FaLock, FaGlobe, FaDiscord, FaEnvelope } from 'react-icons/fa'
import { PROFILE, SOCIAL_LINKS, AFFILIATE_LINKS, FOOTER_LINES } from '../constants'
import './LinkInBio.css'

function LinkInBio() {
  // Mapeo de iconos para los iconos pequeños
  const iconMap = {
    TikTok: FaTiktok,
    YouTube: FaYoutube,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Instagram: FaInstagram,
    Website: FaGlobe,
    Discord: FaDiscord,
    Email: FaEnvelope,
  }

  // Mapeo de iconos para los botones de productos
  const buttonIconMap = {
    FaSearch,
    FaShieldAlt,
    FaLock,
    FaGlobe,
    FaDiscord,
  }

  return (
    <div className="link-in-bio">
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src={PROFILE.image} 
            alt={PROFILE.username}
            className="profile-image"
          />
        </div>
        <h1 className="profile-username">{PROFILE.username}</h1>
        {PROFILE.subtitle && (
          <p className="profile-subtitle">{PROFILE.subtitle}</p>
        )}
        {PROFILE.socialProof && PROFILE.socialProof.length > 0 && (
          <p className="profile-social-proof">
            {PROFILE.socialProof.join(' · ')}
          </p>
        )}
        {PROFILE.socialCta && (
          <p className="profile-social-cta">{PROFILE.socialCta}</p>
        )}
        <div className="social-icons-row">
          {SOCIAL_LINKS.map((social, index) => {
            const IconComponent = iconMap[social.name]
            if (!IconComponent) return null
            const hasUrl = typeof social.url === 'string' && social.url.trim() !== ''
            const isMailto = hasUrl && social.url.trim().toLowerCase().startsWith('mailto:')
            const iconEl = <IconComponent />
            if (hasUrl) {
              return (
                <a
                  key={index}
                  href={social.url}
                  target={isMailto ? undefined : '_blank'}
                  rel={isMailto ? undefined : 'noopener noreferrer'}
                  className="social-icon-link"
                  aria-label={
                    isMailto
                      ? `Enviar correo a ${social.url.replace(/^mailto:/i, '').split('?')[0]}`
                      : social.name
                  }
                >
                  {iconEl}
                </a>
              )
            }
            return (
              <span
                key={index}
                className="social-icon-link social-icon-link--disabled"
                aria-label={social.name}
                aria-disabled="true"
              >
                {iconEl}
              </span>
            )
          })}
        </div>
      </div>

      <div className="links-section">
        {AFFILIATE_LINKS.map((link, index) => {
          const IconComponent = buttonIconMap[link.icon]
          const hasUrl = typeof link.url === 'string' && link.url.trim() !== ''

          const buttonInner = (
            <>
              <div className="affiliate-link-media" aria-hidden="true">
                {link.logo ? (
                  <img src={link.logo} alt="" className="affiliate-link-media-img" />
                ) : IconComponent ? (
                  <IconComponent className="affiliate-link-media-icon" />
                ) : null}
              </div>
              <div className="button-content">
                <div className="button-title">{link.title}</div>
                {link.subtitle && (
                  <div className="button-subtitle">{link.subtitle}</div>
                )}
              </div>
            </>
          )

          if (hasUrl) {
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel={link.rel ?? 'noopener noreferrer'}
                className="affiliate-link-button"
                data-platform={link.platform}
              >
                {buttonInner}
              </a>
            )
          }

          // Si la URL está en blanco, mantenemos el estilo pero como tarjeta no clickeable.
          return (
            <div
              key={index}
              className="affiliate-link-button"
              data-platform={link.platform}
              aria-disabled="true"
            >
              {buttonInner}
            </div>
          )
        })}
      </div>

      {FOOTER_LINES && FOOTER_LINES.some(line => line.trim()) && (
        <footer className="link-in-bio-footer">
          {FOOTER_LINES.map((line, index) =>
            line.trim() === '' ? (
              <p key={index} className="link-in-bio-footer-spacer" aria-hidden="true" />
            ) : (
              <p key={index} className="link-in-bio-footer-text">{line}</p>
            )
          )}
        </footer>
      )}
    </div>
  )
}

export default LinkInBio

