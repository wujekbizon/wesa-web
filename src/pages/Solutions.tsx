import './Solutions.scss'
import { AISolutions, CloudSolutions, ProjectScope } from '../sections'
import { businessScope } from '../data/scope'

const Solutions = () => {
  return (
    <section className="wesa-solutions">
      <CloudSolutions />
      <ProjectScope
        projectsScope={businessScope}
        title="Business Cloud Solutions"
        titleBtn="Hybrid and Multi-Cloud environment"
        exploreLink="Get the latest prices"
        linkUrl="/solutions/cloud/prices"
        id="cloud-business"
      />
      <AISolutions />
    </section>
  )
}
export default Solutions
