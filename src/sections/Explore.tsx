import './Explore.scss'
import { Clients, Carousel } from '../components'

import { svgFiles } from '../data/svgElements'

const Explore = () => {
  return (
    <section className="explore" id="explore">
      <Carousel />
      <Clients svgsArr={svgFiles} title="Our Clients" titleBtnText="Trusted by the industry leaders" />
    </section>
  )
}
export default Explore
