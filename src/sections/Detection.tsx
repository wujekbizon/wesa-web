import './Detection.scss'
import { Title, TitleButton } from '../components'
import { DetectionIcon, LidarIcon } from '../components/icons'
import AIDetection from '../images/aiAlgorythm.png'

const Detection = () => {
  return (
    <section className="detection-ai">
      <div className="detection-content">
        <TitleButton title="Data Detection Algorythm" />
        <Title title="Detection in minutes, without labeled data." />

        <div className="detection-data">
          <DetectionIcon />
          <p>
            WESA LiDAR (Light Detection and Ranging) automates the analysis of large, unstructured datasets so you can
            train and deploy AI models radically faster than traditional approaches.
          </p>
        </div>
        <div className="detection-lidar">
          <LidarIcon />
          <p>
            With LiDAR, non-technical teams can build and run classification and detection models in minutes without
            labeled data
          </p>
        </div>
      </div>
      <div className="detection-image">
        <img src={AIDetection} alt="ai-detection" />
      </div>
    </section>
  )
}
export default Detection
