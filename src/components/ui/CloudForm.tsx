import './CloudForm.scss'
import { Button } from '..'

interface CloudFormInterface {
  title: string
  desc: string
  titleBtn: string
}

const CloudForm: React.FC<CloudFormInterface> = ({ title, desc, titleBtn }) => {
  return (
    <div className="cloud-form">
      <h2>{title}</h2>
      <p>{desc}</p>
      <input type="text" placeholder="Name*" />
      <input type="text" placeholder="Email*" />
      <Button className="custom-btn" link="/solutions/cloud/register">
        {titleBtn}
      </Button>
    </div>
  )
}
export default CloudForm
