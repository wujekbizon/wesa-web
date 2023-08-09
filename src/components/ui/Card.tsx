import './Card.scss'
import { Title, TitleButton, ExploreLink } from '..'
import { CardProps } from '../../data/cards'

const Card = ({ description, title, titleBtn, imgSrc, text, url, className }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-content">
        <TitleButton title={titleBtn} />
        <Title title={title} />
        <p>{description}</p>
        <ExploreLink text={text} url={url} />
      </div>
      <div className="card-image">
        <img src={imgSrc} alt={title} />
      </div>
    </div>
  )
}
export default Card
