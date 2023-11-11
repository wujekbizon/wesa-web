import './Partners.scss'
import { Clients, TitleButton, Title, ExploreLink, Button } from '../components'
import { svgFiles } from '../data/svgElements'
import Satelite from '../images/sateliteMap.png'

const partnersSvgArr = svgFiles.slice(0, 5)

const Partners = () => {
  return (
    <section className="partners">
      <Clients
        svgsArr={partnersSvgArr}
        className="custom-style"
        title="Our Partners"
        titleBtnText="WE WORK WITH SOME OF THE BEST TO UNLOCK IMPOSSIBLE AI."
      />
      <article className="ai-labeled">
        <div className="ai-labeled-data">
          <div className="ai-satelite-content">
            <TitleButton title="Say goodbye to labeling" />
            <Title title="AI in Minutes, Not Months." />
            <p>
              You don’t really want AI, you want answers. Getting them today takes months - or years - and costs
              millions of dollars. What if you could get around the problem of needing massive amounts of human-labeled
              data? What if you could use AI to get critical insights - even when data is unstructured or sparse?
              Instead of needing months of human labeling to have some base AI performance in a new situation, RAIC can
              get to work immediately, radically reducing the latency between data collection and actionable insights.
            </p>
          </div>
          <div className="image-container">
            <img src={Satelite} alt="satelite" className="image" />
          </div>
        </div>
        <ExploreLink text="Learn More" url="/customers/ai" className="custom-link" />
      </article>
      <div className="reach-us">
        <TitleButton title="Accelerate your speed-to-insight" />
        <Title title="Reach Us" />
        <p>
          What if you could develop and train AI models in minutes without labeled data? Let us help you transcend data
          limitations and unleash the value of AI in your business today.
        </p>
        <Button children="Let’s Talk →" link="/customers/lets-talk" className="custom-btn" />
      </div>
    </section>
  )
}
export default Partners
