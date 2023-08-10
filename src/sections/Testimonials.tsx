import './Testimonials.scss'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { TestimonialCard, TitleButton, Title } from '../components'
import { reviews } from '../data/links'

const Testimonials = () => {
  const { ref, inView } = useInView()

  return (
    <section className={`testimonials ${inView ? 'show-testimonials' : ''}`} ref={ref}>
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
        modules={[Pagination, Autoplay]}
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2 }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 7.5,
            spaceBetween: 30,
          },
          2560: {
            slidesPerView: 9.5,
            spaceBetween: 30,
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
