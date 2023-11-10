import './AISolutions.scss'
import { Geospatial, Detection, Analyze } from '.'

const AISolutions = () => {
  return (
    <section className="ai-solution">
      <Geospatial />
      <div className="rectangle" />
      <Detection />
      <Analyze />
    </section>
  )
}
export default AISolutions
