import { FaTiktok, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaSearch, FaShieldAlt, FaLock, FaGlobe, FaDiscord } from 'react-icons/fa'
import { PROFILE, SOCIAL_LINKS, AFFILIATE_LINKS, AFFILIATE_DROPDOWN, MAIN_LINK_CARDS, FOOTER_LINES } from '../constants'
import './LinkInBio.css'

function renderLinkCard(link, key, buttonIconMap) {
  const IconComponent = buttonIconMap[link.icon]
  const hasUrl = typeof link.url === 'string' && link.url.trim() !== ''

  const buttonInner = (
    <>
      <div className={`button-icon${link.logo ? ' button-icon--logo' : ''}`}>
        {link.logo ? (
          <img src={link.logo} alt="" className="button-logo" />
        ) : IconComponent ? (
          <IconComponent />
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
        key={key}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="affiliate-link-button"
        data-platform={link.platform}
      >
        {buttonInner}
      </a>
    )
  }

  return (
    <div
      key={key}
      className="affiliate-link-button"
      data-platform={link.platform}
      aria-disabled="true"
    >
      {buttonInner}
    </div>
  )
}

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
            const iconEl = <IconComponent />
            if (hasUrl) {
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={social.name}
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
        {MAIN_LINK_CARDS.map((link, index) => renderLinkCard(link, index, buttonIconMap))}

        <details className="affiliate-accordion">
          <summary className="affiliate-accordion-summary">
            <span className="affiliate-accordion-summary-text">
              <span className="affiliate-accordion-title">{AFFILIATE_DROPDOWN.title}</span>
              <span className="affiliate-accordion-subtitle">{AFFILIATE_DROPDOWN.subtitle}</span>
            </span>
            <span className="affiliate-accordion-chevron" aria-hidden="true" />
          </summary>
          <div className="affiliate-accordion-panel">
            {AFFILIATE_LINKS.map((link, index) => renderLinkCard(link, `affiliate-${index}`, buttonIconMap))}
          </div>
        </details>
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

