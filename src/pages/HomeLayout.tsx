import './HomeLayout.scss'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/layout/ScrollToTop'

// components
import { Navbar, Footer } from '../components'

const HomeLayout = () => {
  return (
    <main className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
export default HomeLayout
