import './Carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import { sliderItems } from '../../data/sliderItems'
import { TitleButton, ExploreLink } from '..'

const Carousel = () => {
  return (
    <Swiper
      className="myswiper"
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 2,
        },
        1960: {
          slidesPerView: 3,
        },
      }}
    >
      {sliderItems.map((item) => (
        <SwiperSlide style={{ backgroundImage: `url(${item.img})` }} className="myswiper-slider" key={item.id}>
          <div className="swiper-content">
            <TitleButton title="Product Update" />

            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <ExploreLink text="Explore More" url="/solutions" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Carousel
