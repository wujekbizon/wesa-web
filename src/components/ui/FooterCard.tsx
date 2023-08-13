import './Footer.scss'
import { Link } from 'react-router-dom'

type FooterProduct = {
  item: string
  url: string
}

interface FooterCard {
  label: string
  links: FooterProduct[]
}

const FooterCard = ({ label, links }: FooterCard) => {
  return (
    <div className="footer-card">
      <h4 className="footer-label">{label}</h4>
      {links.map(({ item, url }, index) => (
        <Link className="footer-item" to={url} key={`${item}-${index}`}>
          {item}
        </Link>
      ))}
    </div>
  )
}
export default FooterCard
