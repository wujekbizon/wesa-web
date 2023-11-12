import './ProjectScope.scss'
import { ScopeItem, Line } from '../components'

// components
import { Title, TitleButton, ExploreLink } from '../components'

interface ProjectScopeInterface {
  projectsScope: { id: number; icon: JSX.Element; title: string; desc: string }[]
  title: string
  titleBtn: string
  exploreLink: string
  linkUrl: string
  id?: string
}

const ProjectScope: React.FC<ProjectScopeInterface> = ({
  projectsScope,
  title,
  titleBtn,
  exploreLink,
  linkUrl,
  id,
}) => {
  return (
    <section className="project-scope" id={id}>
      <div className="project-title">
        <TitleButton title={titleBtn} />
        <Title title={title} />
      </div>

      {projectsScope.map((item, index) => (
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

      <ExploreLink text={exploreLink} url={linkUrl} />
    </section>
  )
}
export default ProjectScope
