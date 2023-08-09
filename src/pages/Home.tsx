import './Home.scss'
import { Hero, Explore, Technology } from '../sections'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Explore />
      <Technology />
    </section>
  )
}
export default Home
