import './Button.scss'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  className?: string
  children: ReactNode
  link: string
}

const Button = ({ children, className, link }: ButtonProps) => {
  return (
    <Link to={link}>
      <button className={`${className} button`}>{children}</button>
    </Link>
  )
}
export default Button
