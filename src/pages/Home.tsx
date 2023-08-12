import './Home.scss'
import { Hero, Explore, Technology, Testimonials, Animation } from '../sections'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <div className="animations-wrapper">
        <Animation />
      </div>
      <Explore />
      <Technology />
      {/* <Testimonials /> */}
    </section>
  )
}
export default Home
