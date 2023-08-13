import './Footer.scss'
import FooterLogo from '../../images/wesa1.png'

// Components
import { socialLinks } from '../../data/socialLinks'
import { termsLinks } from '../../data/terms'
import { footerLinks } from '../../data/footerLinks'
import { Link, FooterCard } from '..'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient" />
      <div className="footer-border" />
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={FooterLogo} alt="logo" />
            <h1>WESA</h1>
          </div>
          <div className="footer-grid">
            {footerLinks.map((item, index) => (
              <FooterCard {...item} key={`${item.label}-${index}`} />
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-terms">
            {termsLinks.map(({ id, label, url }) => (
              <Link key={id} url={url}>
                {label}
              </Link>
            ))}
          </div>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a className="social-link" href={link.url} target="_blank" key={link.id}>
                <div className="social-image_container">
                  <img src={link.img} alt="social-logo" className="social-image" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
