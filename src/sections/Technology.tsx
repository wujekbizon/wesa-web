import './Technology.scss'
import { DESIGN, NAVIGATION, ATLAS, DATA, MAPS, SEARCH, STUDIO, VISION } from '../data/cards'
import { Card } from '../components'

const Technology = () => {
  return (
    <section className="products">
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
export default Technology
