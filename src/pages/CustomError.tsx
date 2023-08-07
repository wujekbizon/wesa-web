import './CustomError.scss'
import ErrorImg from '../images/inprogress.png'

const CustomError = () => {
  return (
    <div className="error_page">
      <img src={ErrorImg} alt="coding" />
      <h2>This part of application is under construction or will never exist... </h2>
      <h2>Please come back later. Thank you</h2>
      <p>This project is made by Grzegorz Wolfinger | Next JS / React Developer</p>
    </div>
  )
}
export default CustomError
