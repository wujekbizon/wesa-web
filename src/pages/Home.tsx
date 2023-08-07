import './Home.scss'
import { Hero, Explore } from '../sections'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <div className="rectangle" />
      <Explore />
    </section>
  )
}
export default Home
