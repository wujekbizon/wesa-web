import './CloudSolutions.scss'
import { Title, TitleButton, ScrollButton } from '../components'
import { CloudCostEffective } from '.'

const CloudSolutions = () => {
  return (
    <section className="cloud">
      <div className="cloud-solution">
        <div className="cloud-content">
          <TitleButton title="Most cost-effective way possible through cloud IT solutions" />
          <Title title="Multi-Cloud Solutions" />
          <p>
            Having your data and applications located in the optimal cloud environment for your workloads not only
            delivers performance benefits, it also enables you to enjoy huge cost savings.
          </p>
          <ScrollButton tag="cloud-business" className="custom-style" />
        </div>
      </div>
      <CloudCostEffective />
    </section>
  )
}
export default CloudSolutions
