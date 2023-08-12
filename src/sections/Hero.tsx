import './Hero.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion'
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
      style={{ opacity }}
      ref={targetRef}
      className="hero"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div style={{ scale, x: '-50%', position }} className="hero-title">
        <motion.h1 variants={zoomIn(0.5, 0.8)} className="title">
          <span>W</span>
          olfinger <span>E</span>nterprise <span>S</span>olutions <span>A</span>rchitects
        </motion.h1>
        <motion.h1 variants={zoomIn(0.5, 0.8)} className="mobile-title">
          <span>WESA</span>
        </motion.h1>
        <div className="hero-intro">
          <motion.p variants={fadeIn('up', 'tween', 1, 1)}>
            At <span>WESA</span>, we specialize in designing and delivering customized web and mobile applications for
            businesses and private customers. Our team of expert solution architects combines the latest technologies
            with industry best practices to create innovative, user-friendly, and scalable solutions.
          </motion.p>
        </div>
      </motion.div>
      <ScrollButton tag="explore" />
    </motion.section>
  )
}
export default Hero
