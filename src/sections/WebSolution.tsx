import './WebSolution.scss'
import WebImage from '../images/web.png'
import { webBullets } from '../data/links'

// components
import { Title, TitleButton, ExploreLink, Bullet } from '../components'

const WebSolution = () => {
  return (
    <section className="web-solutions">
      <div className="web-solutions-container">
        <TitleButton title="Explore what’s new with WESA" />
        <div className="web-container">
          <div className="web-content">
            <Title title="Innovative Web Solutions" />
            <p className="web-desc">
              We are a leading custom web app development company that creates scalable web applications, web portals
              and solutions with high-quality standards.
            </p>
            <ul className="web-list">
              {webBullets.map((item, index) => (
                <Bullet key={index}>{item}</Bullet>
              ))}
            </ul>
            <ExploreLink url="/customers" text="Want a free consultation" />
          </div>
          <div className="web-image-container">
            <img src={WebImage} alt="web" className="web-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default WebSolution
