import './GetStarted.scss'

// components
import { Title, TitleButton, Button } from '../components'

const GetStarted = () => {
  return (
    <section className="get-started">
      <div className="get-started-container">
        <TitleButton title="You’re Good to Go" />
        <Title title="Ready to Get Started" />
        <p>Create an account or talk to one of our experts.</p>
        <div className="get-started-btns">
          <Button className="custom-btn" link="/customers">
            Login →
          </Button>
          <Button link="/customers">Signup →</Button>
        </div>
      </div>
    </section>
  )
}
export default GetStarted
