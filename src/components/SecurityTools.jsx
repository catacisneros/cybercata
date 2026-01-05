import { VPN_AFFILIATE_URL, PASSWORD_MANAGER_AFFILIATE_URL } from '../constants'
import './SecurityTools.css'

function SecurityTools() {
  const handleDownloadVPN = () => {
    console.log('click_descargar_vpn')
    window.open(VPN_AFFILIATE_URL, '_blank', 'noopener,noreferrer')
  }

  const handleDownloadPasswordManager = () => {
    console.log('click_descargar_password_manager')
    window.open(PASSWORD_MANAGER_AFFILIATE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="security-tools">
      <div className="container">
        <h2 className="security-title">Protege tu privacidad</h2>
        <p className="security-subtitle">
          Herramientas esenciales para mantener tu información segura en línea.
        </p>
        <div className="security-buttons">
          <button className="btn btn-primary" onClick={handleDownloadVPN}>
            Descargar VPN
          </button>
          <button className="btn btn-secondary" onClick={handleDownloadPasswordManager}>
            Descargar Password Manager
          </button>
        </div>
      </div>
    </section>
  )
}

export default SecurityTools

