import './Card.scss'
import { useInView } from 'react-intersection-observer'
import { Title, TitleButton, ExploreLink } from '..'
import { CardProps } from '../../data/cards'

const Card = ({ description, title, titleBtn, imgSrc, text, url, className }: CardProps) => {
  const { ref, inView } = useInView()

  return (
    <div className={`${inView ? 'show' : ''} card ${className}`} ref={ref}>
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
