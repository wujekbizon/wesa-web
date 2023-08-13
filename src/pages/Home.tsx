import './Home.scss'
import { Hero, Explore, Technology, Testimonials, Animation, GetStarted } from '../sections'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <div className="animations-wrapper">{/* <Animation /> */}</div>
      <Explore />
      <Technology />
      {/* <Testimonials /> */}
      <GetStarted />
    </section>
  )
}
export default Home
