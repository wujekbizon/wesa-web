import './Home.scss'
import { Hero, Explore, Technology, Testimonials, Animation } from '../sections'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      {/* <Animation /> */}
      <Explore />
      <Technology />
      {/* <Testimonials /> */}
    </section>
  )
}
export default Home
