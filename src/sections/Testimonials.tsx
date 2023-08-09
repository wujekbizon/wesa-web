import './Testimonials.scss'
import { TestimonialCard, TitleButton, Title } from '../components'
import { reviews } from '../data/links'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-title">
        <TitleButton title="Tell us what to explore" className="wrapper" />
        <Title title="Testimonials" />
        <p>
          Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that
          helps humans explore their world.
        </p>
      </div>
      <div className="testimonials-cards">
        {reviews.map((review, index) => (
          <TestimonialCard {...review} key={`${review.name}-${index}`} />
        ))}
      </div>
    </section>
  )
}
export default Testimonials
