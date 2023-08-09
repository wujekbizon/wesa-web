import './Home.scss'
import { Hero, Explore, Technology, Testimonials } from '../sections'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Explore />
      <Technology />
      <Testimonials />
    </section>
  )
}
export default Home
