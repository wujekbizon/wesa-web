import './Links.scss'
import { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

type LinkProps = {
  children: ReactNode
  url: string
  className?: string
}

const Link = ({ children, url, className }: LinkProps) => {
  return (
    <RouterLink className={`${className} link`} to={url}>
      {children}
    </RouterLink>
  )
}

export default Link
