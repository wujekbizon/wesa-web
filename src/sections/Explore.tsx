import './Explore.scss'
import { Clients, Carousel } from '../components'

const Explore = () => {
  return (
    <section className="explore" id="explore">
      <div className="rectangle" />
      <Carousel />
      <Clients />
    </section>
  )
}
export default Explore
