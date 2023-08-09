import './TitleButton.scss'

const TitleButton = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="title-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4.03482" cy="3.79312" r="3.69839" fill="#7fff00" />
        </svg>
        <h4>{title}</h4>
      </div>
    </div>
  )
}
export default TitleButton
