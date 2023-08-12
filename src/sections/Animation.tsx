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
  const extendedRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0.1, 0.39, 0.45], [0.7, 1.4, 2.4])
  const box1X = useTransform(scrollYProgress, [0.01, 0.39], ['-100%', '50%'])
  const box1Y = useTransform(scrollYProgress, [0.01, 0.39], ['-80%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.39, 0.45], [0, 1, 0])
  const box1ContentX = useTransform(scrollYProgress, [0.25, 0.35], ['200%', '-50%'])
  const box1ContentOpacity = useTransform(scrollYProgress, [0.18, 0.39, 0.65], [0, 1, 0])
  const box1ContentScale = useTransform(scrollYProgress, [0.39, 0.45], [1, 1.1])
  const box1ContentWeight = useTransform(scrollYProgress, (pos) => {
    return pos < 0.33 ? '300' : '700'
  })

  const box2Opacity = useTransform(scrollYProgress, [0, 0.55, 0.9], [0, 1, 0])
  const box2X = useTransform(scrollYProgress, [0.45, 0.5], ['50%', '50%'])
  const box2Y = useTransform(scrollYProgress, [0.35, 0.65], ['250%', '0%'])

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
              opacity: box1ContentOpacity,
              scale: box1ContentScale,
            }}
            className="box1-content"
          >
            <motion.h1 style={{ fontWeight: box1ContentWeight }}>
              Our company's modern design practice seamlessly blends innovation and functionality, creating cutting-edge
              solutions that are as visually stunning as they are user-friendly.
            </motion.h1>
          </motion.div>
          <motion.div className="box2-avatars" style={{ x: box2X, y: box2Y, opacity: box2Opacity }}>
            <motion.img src={Logo} alt="logo" className="box2-avatar" />
            <motion.img src={Brand} alt="brand" className="box2-avatar" />
            <motion.img src={ChatBot} alt="chat" className="box2-avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Animation
