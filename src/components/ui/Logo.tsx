import './Logo.scss'
import { NavLink } from 'react-router-dom'
import WesaImg from '../../images/wesa1.png'

const Logo = () => {
  return (
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-border ' : 'border glassmorphism')}>
      <div className="logo_container">
        <div className="img-container">
          <img src={WesaImg} alt="WESA" />
        </div>
        <h1>WESA</h1>
      </div>
    </NavLink>
  )
}

export default Logo
