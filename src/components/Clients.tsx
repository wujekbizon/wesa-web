import './Clients.scss'
import { Title } from '.'

import { svgFiles } from '../data/svgElements'

const svgElements = svgFiles.map(({ svg, width, height }, index) => (
  <img src={svg} alt={`SVG ${index + 1}`} key={`SVG ${index + 1}`} width={width} height={height} />
))

const Clients = () => {
  return (
    <div className="clients">
      <Title title="Our Clients" />
      <div className="svgs-container">{svgElements}</div>
    </div>
  )
}
export default Clients
