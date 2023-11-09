import './Navbar.scss'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navVariants } from '../../utils/motion'

import { links } from '../../data/links'
import MenuSvg from '../../images/menu.svg'
import CloseSvg from '../../images/close.svg'

// components
import { Logo } from '..'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrolledFar, setScrolledFar] = useState(false)
  const [toggle, setToggle] = useState(false)

  const mobileLinks = [{ label: 'Home', url: '/' }, ...links]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // if (scrollTop > 10 && scrollTop < 4650) {
      //   setScrolled(true)
      // } else {
      //   setScrolled(false)
      // }
      if (scrollTop > 4600) {
        setScrolledFar(true)
      } else {
        setScrolledFar(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`header ${scrolled ? 'scrolled' : ''} ${scrolledFar ? 'scrolled-far' : ''} `}
    >
      <div className="navbar_gradient gradient_01" />
      <nav className="navbar">
        <Logo className="custom-logo" />
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

        <div className="blog-btn">
          <button>The Quill's Vault</button>
        </div>

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
