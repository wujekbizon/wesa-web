import './Analyze.scss'
import { Title, TitleButton, ExploreLink, Bullet } from '../components'
import { analyzeData } from '../data/analyzeData'

const Analyze = () => {
  return (
    <section className="analyze" id="analyze">
      <TitleButton title="Analyze Data" />
      <Title title="Analyze your Unique, Multidimensional data." />
      <div className="grid-data">
        {analyzeData.map(({ id, imgSrc, desc }, index) => (
          <div className="data" key={id} style={{ marginBottom: index % 2 != 0 ? '100px' : '0px' }}>
            <div className="image-container">
              <img src={imgSrc} alt={desc} className="image" />
            </div>
            <Bullet className="custom-bullet">{desc}</Bullet>
          </div>
        ))}
      </div>
      <ExploreLink text="Learn More" url="/solutions/ai/anylyze" />
    </section>
  )
}
export default Analyze
