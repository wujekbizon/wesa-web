import './ScrollButton.scss'
import { motion } from 'framer-motion'

const ScrollButton = ({ tag, className }: { tag: string; className?: string }) => {
  return (
    <div className={`${className} scroll-container`}>
      <a href={`#${tag}`}>
        <div className="btn_container">
          <motion.div
            animate={{
              y: [0, 36, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="btn"
          />
        </div>
      </a>
    </div>
  )
}
export default ScrollButton
