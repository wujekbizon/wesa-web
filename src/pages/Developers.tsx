import './Developers.scss'
import { projectsScope } from '../data/scope'
// components
import { WebSolution, Developement, Technologies, ProjectScope } from '../sections'

const Developers = () => {
  return (
    <section className="developers">
      <WebSolution />
      <Developement />
      <Technologies />
      <ProjectScope
        projectsScope={projectsScope}
        title="Project Scope"
        titleBtn="Build A Success-Driven Development Team"
        exploreLink="DISCUSS MY WEB APP DEVELOPMENT PROJECT"
        linkUrl="/developers/projects"
      />
    </section>
  )
}
export default Developers
