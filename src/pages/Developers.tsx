import './Developers.scss'

// components
import { WebSolution, Developement, Technologies, ProjectScope } from '../sections'

const Developers = () => {
  return (
    <section className="developers">
      <WebSolution />
      <Developement />
      <Technologies />
      <ProjectScope />
    </section>
  )
}
export default Developers
