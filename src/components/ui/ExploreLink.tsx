import './ExploreLink.scss'
import { Link } from 'react-router-dom'

type ExploreLinkProps = {
  text: string
  url: string
}

const ExploreLink = ({ text, url }: ExploreLinkProps) => {
  return (
    <Link to={url} className="explore-link">
      {text} →
    </Link>
  )
}
export default ExploreLink
