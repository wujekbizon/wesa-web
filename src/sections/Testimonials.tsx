import './Testimonials.scss'
import { TestimonialCard } from '../components'
import Dev from '../images/dev.png'

const developer = {
  imgSrc: Dev,
  name: 'Greg Wolf',
  review:
    'Global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,',
  rating: 4,
}

const Testimonials = () => {
  return (
    <section className="testimonials">
      <TestimonialCard {...developer} />
    </section>
  )
}
export default Testimonials
