import { FaTiktok, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaSearch, FaShieldAlt, FaLock, FaGlobe } from 'react-icons/fa'
import { PROFILE, SOCIAL_LINKS, AFFILIATE_LINKS } from '../constants'
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
  }

  // Mapeo de iconos para los botones de productos
  const buttonIconMap = {
    FaSearch,
    FaShieldAlt,
    FaLock,
    FaTiktok,
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
        <div className="social-icons-row">
          {SOCIAL_LINKS.map((social, index) => {
            const IconComponent = iconMap[social.name]
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label={social.name}
              >
                <IconComponent />
              </a>
            )
          })}
        </div>
      </div>

      <div className="links-section">
        {AFFILIATE_LINKS.map((link, index) => {
          const IconComponent = buttonIconMap[link.icon]
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="affiliate-link-button"
            >
              <div className="button-icon">
                <IconComponent />
              </div>
              <div className="button-content">
                <div className="button-title">{link.title}</div>
                {link.subtitle && (
                  <div className="button-subtitle">{link.subtitle}</div>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default LinkInBio

