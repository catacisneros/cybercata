import { FOOTER_TEXT } from '../constants'
import './FooterText.css'

function FooterText() {
  return (
    <footer className="footer-text">
      <div className="footer-container">
        <p className="footer-message">{FOOTER_TEXT}</p>
      </div>
    </footer>
  )
}

export default FooterText



