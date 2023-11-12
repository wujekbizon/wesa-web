import './CloudCostEffective.scss'
import { CloudForm, Title, TitleButton } from '../components'

const CloudCostEffective = () => {
  return (
    <section className="cloud-cost">
      <div className="cloud-effective">
        <TitleButton title="Delivering optimal architecture and performance" />
        <Title title="Cost-effective way possible through cloud IT solutions." />
        <p>
          Designed, implemented, and managed to deliver the highest performing and most secure business cloud solutions,
          WESA Multi-Cloud and Hybrid Cloud Solutions deliver the right application for your modern, dynamic, and
          flexible working environment.
        </p>
        <p>
          And because WESA fully managed Hybrid and Multi-Cloud environments can be reconfigured at the flick of a
          switch to respond to the changing rhythm of your business, you enjoy complete freedom, flexibility, and
          control in the cloud.
        </p>
      </div>
      <div className="cloud-container">
        <CloudForm
          titleBtn="Submit"
          title="Free Download: Cloud Best Practice Top Ten Checklist"
          desc="The top-ten priorities for selecting the right cloud services for your business. Our step-by-step checklist puts you in the know."
        />
      </div>
    </section>
  )
}
export default CloudCostEffective
