import './Geospatial.scss'
import { Title, TitleButton, ScrollButton } from '../components'

const Geospatial = () => {
  return (
    <section className="geospatial">
      <TitleButton title="Instant automated detection,for anything." />
      <Title title="Geospatial AI" />
      <p className="geospatial-desc">
        The power to dynamically manage your ground assets and critical infrastructure.Remotely. At scale. Cost
        effectively.
      </p>
      <ScrollButton tag="analyze" className="custom-btn" />
    </section>
  )
}
export default Geospatial
