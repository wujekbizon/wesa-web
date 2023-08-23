import './PorjectScope.scss'

// components
import { Title, TitleButton, ExploreLink } from '../components'

const ProjectScope = () => {
  return (
    <section className="project-scope">
      <div className="project-title">
        <TitleButton title="Build A Success-Driven Development Team" />
        <Title title="Project Scope" />
      </div>
      <div className="scope-container">Scope</div>
      <ExploreLink text="Discuss my web app development project" url="/solutions" />
    </section>
  )
}
export default ProjectScope
