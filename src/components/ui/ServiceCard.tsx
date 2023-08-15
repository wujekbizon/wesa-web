import './ServiceCard.scss'

interface ServicesCardProps {
  icon: JSX.Element
  id: number
  title: string
  desc: string
}

const ServiceCard: React.FC<ServicesCardProps> = ({ icon, desc, title }) => {
  return (
    <div className="service-card">
      <div className="service-icon-container">
        <div className="icon-wrapper">{icon}</div>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
export default ServiceCard
