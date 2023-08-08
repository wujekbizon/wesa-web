import './Title.scss'
import { TitleButton } from '..'

const Title = ({ title }: { title: string }) => {
  return (
    <div className="custom_title-container">
      <TitleButton title="Trusted by the industry leaders" />
      <h1>{title}</h1>
    </div>
  )
}
export default Title
