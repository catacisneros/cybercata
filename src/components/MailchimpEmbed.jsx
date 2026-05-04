import { useEffect } from 'react'

const MAILCHIMP_CLASSIC_CSS =
  'https://cdn-images.mailchimp.com/embedcode/classic-061523.css'

export default function MailchimpEmbed() {
  useEffect(() => {
    const id = 'mailchimp-embed-classic-css'
    if (document.getElementById(id)) return
    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = MAILCHIMP_CLASSIC_CSS
    document.head.appendChild(link)
  }, [])

  return (
    <div id="mc_embed_shell" className="mailchimp-embed-shell">
      <div id="mc_embed_signup">
        <form
          action="https://github.us8.list-manage.com/subscribe/post?u=33dc5ad0bd3f273477bc4a560&id=f83ce1790f&f_id=0088c5e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Recibe tu guía gratis 🔐</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> campo obligatorio
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Correo electrónico <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                defaultValue=""
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Nombre</label>
              <input
                type="text"
                name="FNAME"
                className="text"
                id="mce-FNAME"
                defaultValue=""
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_33dc5ad0bd3f273477bc4a560_f83ce1790f"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Enviame la guía!"
                />
                <p style={{ margin: '0 auto' }}>
                  <a
                    href="https://eepurl.com/dQ3nQc1Wds"
                    title="Mailchimp - email marketing made easy and fun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'transparent',
                        borderRadius: '4px',
                      }}
                    >
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: '220px',
                          height: '40px',
                          display: 'flex',
                          padding: '2px 0',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
