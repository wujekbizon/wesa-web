import './Animation.scss'
import { useRef } from 'react'
import { useDebouncedMouseMove } from '../hooks/useDebouncedMouseMove'
import { motion, useScroll, useTransform } from 'framer-motion'
import PureDesign from '../images/pure_design.png'
import Logo from '../images/schoolLogo.png'
import Brand from '../images/wolfpad.png'
import ChatBot from '../images/chatbot.png'

const Animation = () => {
  const animationRef = useRef<HTMLDivElement | null>(null)
  useDebouncedMouseMove(animationRef, 5)

  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0.1, 0.39, 0.45], [0.7, 1.4, 2])
  const box1X = useTransform(scrollYProgress, [0.01, 0.35], ['-100%', '50%'])
  const box1Y = useTransform(scrollYProgress, [0.01, 0.35], ['-80%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.39, 0.45], [0, 1, 0])
  const box1ContentX = useTransform(scrollYProgress, [0.25, 0.35], ['200%', '-50%'])
  const box1ContentY = useTransform(scrollYProgress, [0.39, 0.65], ['40%', '-400%'])
  const box1ContentOpacity = useTransform(scrollYProgress, [0.18, 0.38, 0.65], [0, 1, 0])
  const box1ContentScale = useTransform(scrollYProgress, [0.39, 0.45], [1, 1.4])
  const box1ContentWeight = useTransform(scrollYProgress, (pos) => {
    console.log(pos)
    return pos < 0.316 ? '400' : '700'
  })
  const box1ContentColor = useTransform(scrollYProgress, (pos) => {
    return pos < 0.44 ? '#040c18' : '#fff'
  })
  const box3Opacity = useTransform(scrollYProgress, [0, 0.55, 0.9], [0, 1, 0])
  const box3X = useTransform(scrollYProgress, [0, 0.45, 0.48], ['70%', '70%', '-600%'])
  const box3Y = useTransform(scrollYProgress, [0.35, 0.45], ['250%', '50%'])

  return (
    <section className="animation-section" ref={animationRef}>
      <div ref={targetRef} className="animation-container">
        <div className="boxes-container">
          <motion.div className="box1" style={{ x: box1X, y: box1Y, scale, opacity }}>
            <img src={PureDesign} alt="pure" className="box1-image" />
          </motion.div>
          <motion.div
            style={{
              x: box1ContentX,
              y: box1ContentY,
              opacity: box1ContentOpacity,
              scale: box1ContentScale,
            }}
            className="box1-content"
          >
            <motion.h1 style={{ fontWeight: box1ContentWeight, color: box1ContentColor }}>
              Our company's modern design practice seamlessly blends innovation and functionality, creating cutting-edge
              solutions that are as visually stunning as they are user-friendly.
            </motion.h1>
          </motion.div>
          <motion.div className="box3-avatars" style={{ x: box3X, y: box3Y, opacity: box3Opacity }}>
            <motion.img src={Logo} alt="logo" className="box3-avatar" />
            <motion.img src={Brand} alt="brand" className="box3-avatar" />
            <motion.img src={ChatBot} alt="chat" className="box3-avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Animation
