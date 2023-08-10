import './Testimonials.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
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

      <Swiper
        className="testimonials-swiper"
        modules={[Pagination]}
        grabCursor={true}
        breakpoints={{
          450: { slidesPerView: 1, spaceBetween: 20 },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1440: {
            slidesPerView: 5.2,
          },
          1960: {
            slidesPerView: 10,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide className="testimonials-cards" key={`${review.name}-${index}`}>
            <TestimonialCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Testimonials
