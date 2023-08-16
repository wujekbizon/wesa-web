import './Technologies.scss'
import { techonologies } from '../data/techElements'

// components
import { Title, TitleButton } from '../components'

const Technologies = () => {
  return (
    <section className="technologies">
      <TitleButton title="Our Favorite Folder Of The" className="wrapper" />
      <Title title="Technologies" />
      <div className="technologies-grid">
        {techonologies.map((tech, index) => (
          <img src={tech} alt="tech" key={index} className="tech-image" />
        ))}
      </div>
    </section>
  )
}
export default Technologies
