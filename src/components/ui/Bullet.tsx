import './Bullet.scss'
import { ReactNode } from 'react'

interface BulletProps {
  children: ReactNode
  className?: string
}

const Bullet = ({ children, className }: BulletProps) => {
  return (
    <div className={`${className} bullet-item`}>
      <svg className="svg-bullet" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="4.29839" fill="#7fff00" />
      </svg>
      <p className="bullet-point">{children}</p>
    </div>
  )
}
export default Bullet
