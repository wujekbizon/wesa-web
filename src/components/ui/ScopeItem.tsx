import './ScopeItem.scss'
import { Line } from '..'

type ScopeItemProps = {
  id: number
  icon: JSX.Element
  title: string
  desc: string
  mirror: boolean
}
const ScopeItem = ({ id, icon, title, desc, mirror }: ScopeItemProps) => {
  return (
    <div className={`${mirror ? 'right-scope' : 'left-scope'} scope-item`}>
      <div className="icon-circle">{icon}</div>
      <div className="line-container">
        <Line className="vertical-line" width="52px" height={3} />
      </div>
      <div className="scope-content">
        <h2 className="scope-title">{title}</h2>
        <p className="scope-desc">{desc}</p>
      </div>
    </div>
  )
}
export default ScopeItem
