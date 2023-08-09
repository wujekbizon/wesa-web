import './TestimonialCard.scss'
import { renderStars } from '../../utils/renderStars'

type TestimonialCardProps = {
  imgSrc: string
  name: string
  review: string
  rating: number
}

const TestimonialCard = ({ imgSrc, name, review, rating }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-dev">
        <img src={imgSrc} alt="Developer" />
        <h2>{name}</h2>
      </div>
      <p>{review}</p>
      <div className="stars">{renderStars(rating)}</div>
    </div>
  )
}
export default TestimonialCard
