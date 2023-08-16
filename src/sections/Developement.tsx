import './Developement.scss'
import { servicesCards } from '../data/servicesCards'
// components
import { Title, TitleButton, Line, ServiceCard, ExploreLink } from '../components'

const Developement = () => {
  return (
    <section className="developement">
      <div className="developement-header">
        <TitleButton title="A Wide Range of Web Application" />
        <Title title="Developement Services" />
        <p className="develeopment-desc">
          Light years ahead of our competitors, WESA offers custom web app development services and uses the latest
          technologies that will compel your customers to spend lavishly on your products.
        </p>
      </div>
      <div className="developement-grid">
        <div className="gradient-02" />
        {servicesCards.map((card, index) => (
          <div key={card.id} className={`service-card-wrapper card-${index} `}>
            <Line className={`${index % 2 === 0 ? 'hide-top' : 'show-top'} line-top${index}`} />
            <ServiceCard {...card} />
            <Line className={`${index % 2 === 0 ? 'hide-bottom' : 'show-bottom'} line-bottom${index}`} />
          </div>
        ))}
      </div>
      <ExploreLink text="Hire dedicated developement team " url="/developers" />
    </section>
  )
}
export default Developement
