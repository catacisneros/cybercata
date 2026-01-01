import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { SOCIAL_LINKS } from '../constants'
import './Header.css'

function Header() {
  // Mapeo de iconos
  const iconMap = {
    TikTok: FaTiktok,
    YouTube: FaYoutube,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Instagram: FaInstagram,
  }

  return (
    <header className="header-compact">
      <div className="header-content">
        <div className="logo-title">
          <span className="logo-icon">🔒</span>
          <h1 className="brand-title">Cybercata</h1>
        </div>
        <p className="brand-subtitle">Ciberseguridad, OSINT y privacidad en español</p>
        <div className="social-icons-compact">
          {SOCIAL_LINKS.map((social, index) => {
            const IconComponent = iconMap[social.name]
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-compact"
                aria-label={social.name}
                title={social.name}
              >
                <IconComponent />
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header

