import './Hero.scss'

import { ScrollButton } from '../components'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>
          <span>W</span>olfinger <span>E</span>nterprise <span>S</span>olutions <span>A</span>rchitects
        </h1>
        <div className="hero-intro">
          <p>
            At <span>WESA</span>, we specialize in designing and delivering customized web and mobile applications for
            businesses and private customers. Our team of expert solution architects combines the latest technologies
            with industry best practices to create innovative, user-friendly, and scalable solutions.
          </p>
        </div>
      </div>
      <ScrollButton tag="explore" />
    </div>
  )
}
export default Hero
