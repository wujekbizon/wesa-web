import './Home.scss'
import { Hero, Explore } from '../sections'
import { Card } from '../components'
import { DESIGN, NAVIGATION, ATLAS, DATA, MAPS, SEARCH, STUDIO, VISION } from '../data/cards'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Explore />
      <Card {...DESIGN} />
      <Card {...NAVIGATION} className="custom-card" />
      <Card {...STUDIO} />
      <Card {...MAPS} className="custom-card" />
      <Card {...SEARCH} />
      <Card {...VISION} className="custom-card" />
      <Card {...DATA} />
      <Card {...ATLAS} className="custom-card" />
    </section>
  )
}
export default Home
