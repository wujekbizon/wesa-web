import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'
import HeroBackground from '../images/hero.jpg'
import { Link } from 'react-router-dom'
import { ScrollButton } from '../components'

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? 'relative' : 'fixed'
  })

  return (
    <motion.section
      style={{ opacity, backgroundImage: `url(${HeroBackground})` }}
      ref={targetRef}
      className="hero relative flex h-[100vh] w-[100vw] flex-col items-center bg-cover bg-center bg-no-repeat px-6 sm:px-24 bg-black"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        style={{ scale, x: '-50%', position }}
        className="w-full h-full flex items-center justify-center left-[50%]"
      >
        <div className="w-full xl:w-3/4  sm:h-1/2 flex flex-col justify-center p-4 md:p-12">
          <motion.div
            variants={fadeIn('down', 'tween', 1, 1)}
            className=" flex w-full h-full flex-col justify-center items-center shadow-2xl shadow-gray-900 bg-amber-400/95 border-4 border-black rounded-xl md:rounded-full py-8 px-4"
          >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 200 550 200">
              <g fill="#fdf7e7">
                <path
                  fill="black"
                  className="animate-pulse"
                  d="M216.35819,276.72976h-11.86612c-3.35834,0 -4.14195,2.23889 -4.47778,3.58223l-11.08251,38.06115l-10.85862,-38.06115c-0.44778,-1.56722 -1.23139,-3.58223 -3.69417,-3.58223h-7.83612c-2.57472,0 -3.35834,2.015 -3.80612,3.58223l-10.74668,38.06115l-11.08251,-38.06115c-0.44778,-1.34333 -1.11945,-3.58223 -4.47778,-3.58223h-12.3139c-2.015,0 -2.35084,1.90306 -2.015,3.24639l20.70974,68.06229c0,0 0.55972,2.35084 3.0225,2.35084h9.85112c2.91056,0 3.58223,-2.57472 3.58223,-2.57472l11.19446,-35.71032l11.19446,35.71032c0,0 0.67167,2.57472 3.58223,2.57472h9.40334c2.46278,0 3.0225,-2.35084 3.0225,-2.35084l20.5978,-68.06229c0.44778,-1.34333 0.11194,-3.24639 -1.90306,-3.24639z"
                ></path>
                <path d="M279.27104,334.82899h-49.4795c-2.015,0 -3.24639,0.67167 -3.24639,3.24639v9.17945c0,2.57472 1.23139,3.24639 3.24639,3.24639h49.4795c2.015,0 3.24639,-0.67167 3.24639,-3.24639v-9.17945c0,-2.57472 -1.23139,-3.24639 -3.24639,-3.24639zM273.67381,305.7234h-38.28504c-2.015,0 -3.24639,0.67167 -3.24639,3.24639v9.17945c0,2.57472 1.23139,3.24639 3.24639,3.24639h38.28504c2.015,0 3.24639,-0.67167 3.24639,-3.24639v-9.17945c0,-2.57472 -1.23139,-3.24639 -3.24639,-3.24639zM279.27104,276.8417h-49.4795c-2.015,0 -3.24639,0.67167 -3.24639,3.24639v9.17945c0,2.57472 1.23139,3.24639 3.24639,3.24639h49.4795c2.015,0 3.24639,-0.67167 3.24639,-3.24639v-9.17945c0,-2.57472 -1.23139,-3.24639 -3.24639,-3.24639z"></path>
                <path d="M331.32526,307.62646c-4.47778,-1.79111 -20.93363,-4.25389 -20.93363,-11.08251c0,-5.03751 6.15695,-6.49278 9.85112,-6.49278c3.35834,0 7.38834,1.0075 9.51529,3.0225c1.34333,1.34333 1.90306,2.23889 2.35084,3.35834c0.55972,1.45528 0.89556,3.0225 3.0225,3.0225h10.97057c2.57472,0 3.24639,-0.44778 3.24639,-3.13445c0,-14.77668 -15.56029,-21.26947 -29.77725,-21.26947c-13.99307,0.55972 -27.20253,7.72417 -27.20253,22.27697c0,14.21696 10.41084,18.69474 21.71725,22.27697c9.51529,3.0225 19.47835,3.13445 19.47835,9.40334c0,6.2689 -4.92556,7.61223 -10.97057,7.61223c-4.14195,0 -8.73168,-1.0075 -10.97057,-3.69417c-1.45528,-1.67917 -2.015,-3.13445 -2.12695,-4.58973c-0.22389,-2.79861 -1.45528,-3.13445 -4.03,-3.13445h-10.85862c-2.57472,0 -3.24639,0.55972 -3.24639,3.13445c0,15.67224 16.12002,23.73225 30.11309,23.73225c17.23946,0 29.77725,-7.61223 29.77725,-23.50836c0,-15.22446 -11.86612,-18.47085 -19.92613,-20.93363z"></path>
                <path d="M392.44699,299.34256l16.34391,47.68838c0.89556,2.68667 1.79111,3.35834 4.25389,3.35834h12.76168c2.46278,0 2.46278,-1.79111 1.90306,-3.13445l-24.73975,-67.05479c-1.0075,-2.35084 -2.12695,-3.47028 -4.58973,-3.47028h-10.74668c-2.46278,0 -3.69417,1.11945 -4.58973,3.47028l-24.85169,67.05479c-0.55972,1.34333 -0.55972,3.13445 1.90306,3.13445h12.20196c2.46278,0 3.35834,-0.67167 4.25389,-3.35834z"></path>
              </g>
            </svg>

            <div className="flex h-full flex-col gap-8 items-center">
              <p className="text-xl sm:text-3xl text-zinc-950 font-bold text-center">
                Shape Your Digital Future with Us!
              </p>
              <Link
                className="px-6 py-2 border sm:w-2/3 w-full text-xl  rounded-md bg-white/40 hover:bg-white/80 text-black border-black text-center"
                to="/solutions"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* <ScrollButton tag="explore" /> */}
    </motion.section>
  )
}
export default Hero
