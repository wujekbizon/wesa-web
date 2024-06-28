import './Animation.scss'
import { useRef } from 'react'
import { useDebouncedMouseMove } from '../hooks/useDebouncedMouseMove'
import { motion, useScroll, useTransform } from 'framer-motion'
import SchoolLocker from '../images/sl1.png'
import SchoolLocker2 from '../images/sl2.png'

const Animation = () => {
  const animationRef = useRef<HTMLDivElement | null>(null)
  useDebouncedMouseMove(animationRef, 5)

  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  // title animation configuration
  const titleX = useTransform(scrollYProgress, [0, 0.4], [100, 100])
  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [0, -50, -50, -540])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [1, 1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1.4])

  // welcome page animation configuration
  const anim1X = useTransform(scrollYProgress, [0, 0.3], [-550, 400])
  const anim1Y = useTransform(scrollYProgress, [0, 0.4, 0.9], ['220%', '60%', '-200%'])
  const anim1Opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])
  const anim1Scale = useTransform(scrollYProgress, [0.3, 1], [2, 2])

  const lockerX = useTransform(scrollYProgress, [0.31, 1], [400, -500])
  const lockerY = useTransform(scrollYProgress, [0.31, 1], ['150%', '150%'])
  const lockerOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1])
  const lockerScale = useTransform(scrollYProgress, [0.3, 1], [1, 2])

  return (
    <section className="animation-section bg-black" ref={animationRef}>
      <div ref={targetRef} className="animation-container">
        <div className="boxes-container">
          <motion.div
            className="relative flex items-center justify-center border border-zinc-900 w-[650px] h-[350px] rounded shadow-sm shadow-gray-600"
            style={{ x: anim1X, y: anim1Y, scale: anim1Scale, opacity: anim1Opacity }}
          >
            <img
              src={SchoolLocker}
              alt="School Locker welcome page"
              className="w-full h-full object-contain rounded-md"
            />
          </motion.div>
          <motion.div
            style={{
              x: titleX,
              y: titleY,
              opacity: titleOpacity,
              scale: titleScale,
            }}
          >
            <motion.h1 className="text-3xl">
              School <span className="text-amber-400">Locker </span> - Welcome to your first personal digital locker.
              Explore its features now.
            </motion.h1>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center border border-zinc-900 w-[650px] h-[350px] rounded shadow-sm shadow-gray-600 mb-64"
            style={{ y: lockerY, x: lockerX, opacity: lockerOpacity, scale: lockerScale }}
          >
            <img
              src={SchoolLocker2}
              alt="School Locker welcome page"
              className="w-full h-full object-fill rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Animation
