import './HomeLayout.scss'
import { Outlet } from 'react-router-dom'

// components
import { Navbar, Footer } from '../components'

const HomeLayout = () => {
  return (
    <main className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}
export default HomeLayout
