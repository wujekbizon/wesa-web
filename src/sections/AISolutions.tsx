import './AISolutions.scss'
import { Geospatial, Detection, Analyze, Intelligence } from '.'

const AISolutions = () => {
  return (
    <section className="ai-solution">
      <Geospatial />
      <div className="rectangle" />
      <Detection />
      <Analyze />
      <Intelligence />
    </section>
  )
}
export default AISolutions
