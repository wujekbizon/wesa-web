import './Navbar.scss'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { zoomIn } from '../../utils/motion'

import { links } from '../../data/links'
import MenuSvg from '../../images/menu.svg'
import CloseSvg from '../../images/close.svg'
import Logo from '../ui/Logo'

// components

const Navbar = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)

  const mobileLinks = [{ label: 'Home', url: '/' }, ...links]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (
        ((location.pathname == '/solutions' ||
          location.pathname == '/developers' ||
          location.pathname == '/customers') &&
          scrollTop > 10) ||
        (location.pathname == '/' && scrollTop > 3850)
      ) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  return (
    <motion.header
      variants={zoomIn(0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      className={`header  ${scrolled ? 'scrolled' : ''} `}
    >
      {/* <div className="gradient_01" /> */}
      <nav className="navbar">
        <Logo />

        <ul className="links">
          {links.map(({ label, url }) => (
            <NavLink
              to={url}
              className={({ isActive }) => (isActive ? `${'active'} ${'link_btn'}` : `${'link_btn'}`)}
              key={label}
            >
              {label}
            </NavLink>
          ))}
        </ul>

        <div className="menu">
          <img src={toggle ? CloseSvg : MenuSvg} alt="menu" onClick={() => setToggle(!toggle)} />

          <div className={!toggle ? 'hidden' : 'show'}>
            <ul className="menu_list">
              {mobileLinks.map(({ label, url }) => (
                <NavLink
                  to={url}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                  className={({ isActive }) => (isActive ? `${'active'} ${'link_btn'}` : `${'link_btn'}`)}
                  key={label}
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
export default Navbar
