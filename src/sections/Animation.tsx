import './Animation.scss'
import { useRef } from 'react'
import { useDebouncedMouseMove } from '../hooks/useDebouncedMouseMove'
import { motion, useScroll, useTransform } from 'framer-motion'
import PureDesign from '../images/pure_design.png'
import Logo from '../images/schoolLogo.png'

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
  const opacity = useTransform(scrollYProgress, [0, 0.39, 0.7], [0, 1, 0])
  const box1ContentX = useTransform(scrollYProgress, [0, 0.35], ['265%', '-50%'])
  const box1ContentY = useTransform(scrollYProgress, [0.39, 0.8], ['40%', '-400%'])
  const box1ContentOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])
  const box1ContentScale = useTransform(scrollYProgress, [0.39, 0.45], [1, 1.4])
  const box1ContentWeight = useTransform(scrollYProgress, (pos) => {
    return pos < 0.35 ? '400' : '700'
  })
  const box1Size = useTransform(scrollYProgress, (pos) => {
    return pos < 0.816 ? '26px' : '16px'
  })
  const box1ContentColor = useTransform(scrollYProgress, (pos) => {
    return pos > 0.28 && pos < 0.8 ? '#040c18' : '#ffff'
  })
  const box3Opacity = useTransform(scrollYProgress, [0, 0.9], [0.5, 1])
  const box3X = useTransform(scrollYProgress, [0, 0.45, 0.8], ['50%', '-40%', '-600%'])
  const box3Y = useTransform(scrollYProgress, [0.35, 0.45], ['600%', '146%'])
  const box3Scale = useTransform(scrollYProgress, [0.46, 0.465, 1], ['0', '1', '3'])

  const box3Radius = useTransform(scrollYProgress, (pos) => {
    return pos < 0.6 ? '50%' : '10px'
  })

  const lockerX = useTransform(scrollYProgress, [0.5, 1], ['200%', '100%'])
  const lockerY = useTransform(scrollYProgress, [0.5, 1], ['150%', '150%'])
  const lockerOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1])

  return (
    <section className="animation-section" ref={animationRef}>
      <div ref={targetRef} className="animation-container">
        <div className="boxes-container">
          <motion.div className="box1" style={{ x: box1X, y: box1Y, scale, opacity }}>
            <img src={PureDesign} alt="pure" className="box1-image" />
            <motion.img src={Logo} alt="logo" className="avatar-project" style={{ opacity: box1ContentOpacity }} />
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
            <motion.h1 style={{ fontWeight: box1ContentWeight, color: box1ContentColor, fontSize: box1Size, opacity }}>
              Our company's modern design practice seamlessly blends innovation and functionality, creating cutting-edge
              solutions that are as visually stunning as they are user-friendly.
            </motion.h1>
          </motion.div>
          <motion.div className="box3-avatars" style={{ x: box3X, y: box3Y, opacity: box3Opacity }}>
            <motion.img
              src={Logo}
              alt="logo"
              className="box3-avatar"
              style={{ scale: box3Scale, borderRadius: box3Radius }}
            />
          </motion.div>

          <motion.div className="locker glassmorphism" style={{ y: lockerY, x: lockerX, opacity: lockerOpacity }}>
            <motion.h1 className="locker-title">School Lockers</motion.h1>
            <p>Coming April 2024</p>
            {/* <p>
              {' '}
              Picture a digital metaverse where you have the power to organize and store all your belongings in a
              virtual environment. Just like a physical locker, but with infinite possibilities and functionalities.
            </p>
            <p>
              With SCHOOL LOCKER, you can create your own custom student portfolio, showcasing your achievements,
              projects, and artwork. The platform also grants you access to the latest technologies, ensuring you stay
              up-to-date with the rapidly evolving digital landscape. But that's not all!
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Animation
