import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { SOCIAL_LINKS } from '../constants'
import './Footer.css'

function Footer() {
  const iconMap = {
    TikTok: FaTiktok,
    YouTube: FaYoutube,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Instagram: FaInstagram,
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-title">Cybercata</span>
          </div>
          <div className="footer-social">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent = iconMap[social.name]
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                  aria-label={social.name}
                >
                  <IconComponent />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

