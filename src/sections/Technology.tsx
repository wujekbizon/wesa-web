import './Technology.scss'
import { useRef } from 'react'
import { DESIGN, NAVIGATION, ATLAS, DATA, MAPS, SEARCH, STUDIO, VISION } from '../data/cards'
import { Card } from '../components'
import { Testimonials } from '.'

import { useDebouncedMouseMove } from '../hooks/useDebouncedMouseMove'

const Technology = () => {
  const animationRef = useRef<HTMLDivElement | null>(null)
  useDebouncedMouseMove(animationRef, 5)

  return (
    <section className="technology" ref={animationRef}>
      <Card {...DESIGN} />
      <Card {...NAVIGATION} className="custom-card" />
      <Card {...STUDIO} />
      <Card {...MAPS} className="custom-card" />
      <Card {...SEARCH} />
      <Testimonials />
      <Card {...VISION} className="custom-card" />
      <Card {...DATA} />
      <Card {...ATLAS} className="custom-card" />
    </section>
  )
}
export default Technology
