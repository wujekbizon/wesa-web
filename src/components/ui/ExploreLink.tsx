import './ExploreLink.scss'
import { Link } from 'react-router-dom'

type ExploreLinkProps = {
  text: string
  url: string
  className?: string
}

const ExploreLink = ({ text, url, className }: ExploreLinkProps) => {
  return (
    <Link to={url} className={`explore-link ${className}`}>
      {text} →
    </Link>
  )
}
export default ExploreLink
