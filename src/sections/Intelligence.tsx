import './Intelligence.scss'
import { Title, TitleButton, ExploreLink } from '../components'
import cam1 from '../images/cam1.png'

const Intelligence = () => {
  return (
    <section className="intelligence">
      <div className="intelligence-wrapper">
        <div className="image-container">
          <img src={cam1} alt="cam" className="image" />
        </div>
        <div className="intelligence-content">
          <TitleButton title="Say goodbye to labeling" />
          <Title title="The new standard of Intelligence." />
          <p>
            The days of labeling data by hand over weeks, months, or even years are gone. LiDAR is an end-to-end AI
            pipeline that automates the analysis of a variety of large, unstructured datasets, from security camera
            footage to geospatial imagery. You can ingest, search, and categorize your data - build and train models -
            run inference - and integrate or access LiDAR through cloud-hosted APIs. Integrate LiDAR into your current
            workflows today to exponentially accelerate your speed-to-insight.
          </p>
        </div>
      </div>
      <div className="intelligence-link">
        <ExploreLink text="See More Examples" url="/solutions/ai" />
      </div>
    </section>
  )
}
export default Intelligence
