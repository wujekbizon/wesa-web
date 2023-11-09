import './PorjectScope.scss'
import { ScopeItem, Line } from '../components'
import { projectScope } from '../data/scope'

// components
import { Title, TitleButton, ExploreLink } from '../components'

const ProjectScope = () => {
  return (
    <section className="project-scope">
      <div className="project-title">
        <TitleButton title="Build A Success-Driven Development Team" />
        <Title title="Project Scope" />
      </div>

      {projectScope.map((item, index) => (
        <div
          className="scope-container"
          key={item.id}
          style={{ alignItems: `${index % 2 != 0 ? 'flex-end' : 'flex-start'}` }}
        >
          <ScopeItem {...item} mirror={index % 2 != 0} />
          <div className="bottom-line-container">
            <Line width="52px" height={3} />
          </div>
        </div>
      ))}

      <ExploreLink text="Discuss my web app development project" url="/solutions" />
    </section>
  )
}
export default ProjectScope
