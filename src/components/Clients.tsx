import './Clients.scss'
import { Title, ExploreLink, TitleButton } from '.'

type ClientsProps = {
  svgsArr: { svg: string; width: number; height: number }[]
  className?: string
  title: string
  titleBtnText: string
}

const Clients: React.FC<ClientsProps> = ({ svgsArr, className, titleBtnText, title }) => {
  const svgElements = svgsArr.map(({ svg, width, height }, index) => (
    <img src={svg} alt={`SVG ${index + 1}`} key={`SVG ${index + 1}`} width={width} height={height} />
  ))
  return (
    <div className={`${className} clients`}>
      <TitleButton title={titleBtnText} className="wrapper" />
      <Title title={title} />
      <div className="svgs-container">{svgElements}</div>
      <ExploreLink text="View customere stories" url="/customers" className="custom" />
    </div>
  )
}
export default Clients
