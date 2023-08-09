import './Clients.scss'
import { Title, ExploreLink, TitleButton } from '.'

import { svgFiles } from '../data/svgElements'

const svgElements = svgFiles.map(({ svg, width, height }, index) => (
  <img src={svg} alt={`SVG ${index + 1}`} key={`SVG ${index + 1}`} width={width} height={height} />
))

const Clients = () => {
  return (
    <div className="clients">
      <TitleButton title="Trusted by the industry leaders" className="wrapper" />
      <Title title="Our Clients" />
      <div className="svgs-container">{svgElements}</div>
      <ExploreLink text="View customere stories" url="/customers" className="custom" />
    </div>
  )
}
export default Clients
