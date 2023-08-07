import './HomeLayout.scss'
import { Outlet } from 'react-router-dom'

// components
import { Navbar } from '../components'

const HomeLayout = () => {
  return (
    <main className="main-layout">
      <Navbar />
      <Outlet />
    </main>
  )
}
export default HomeLayout
