import './Home.scss'
import { Hero, Explore, Technology, Testimonials, GetStarted, Animation } from '../sections'
import { useWindowDimensions } from '../hooks/useWindowDimension'

const Home = () => {
  const { width } = useWindowDimensions()
  return (
    <section className="home">
      <Hero />
      {width > 778 && (
        <div className="animations-wrapper">
          <Animation />
        </div>
      )}
      <Explore />
      <Technology />
      <Testimonials />
      <GetStarted />
    </section>
  )
}
export default Home
