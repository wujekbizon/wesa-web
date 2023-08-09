import img1 from '../images/design.jpg'
import img2 from '../images/navigation.jpg'
import img3 from '../images/studio.jpg'
import img4 from '../images/maps.jpg'
import img5 from '../images/search.jpg'
import img6 from '../images/vision.jpg'
import img7 from '../images/data.jpg'
import img8 from '../images/atlas.jpg'

export interface CardProps {
  description: string
  title: string
  titleBtn: string
  imgSrc: string
  text: string
  url: string
  className?: string
}

const DESIGN: CardProps = {
  title: 'Design',
  titleBtn: 'Design without limits',
  description:
    'Style your map with lines, polygons, labels, icons, patterns, extrusions, raster & terrain with hundreds of options and a powerful expression language, not only controlling all visual aspects through the zoom range but having the freedom to change them at any time dynamically.',
  imgSrc: img1,
  text: 'Learn more about design',
  url: '/',
}

const NAVIGATION: CardProps = {
  title: 'Navigation',
  titleBtn: 'Design without limits',
  description:
    'Wesa provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences.',
  imgSrc: img2,
  text: 'More about navigate',
  url: '/',
}

const STUDIO: CardProps = {
  title: 'Studio',
  titleBtn: 'See what’s inside our studio',
  description:
    'Wesa Huefiy is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn.',
  imgSrc: img3,
  text: 'know more about design',
  url: '/',
}

const MAPS: CardProps = {
  title: 'Maps',
  titleBtn: 'Experience our maps',
  description:
    'Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.',
  imgSrc: img4,
  text: 'more about maps',
  url: '/',
}

const SEARCH: CardProps = {
  title: 'Search',
  titleBtn: 'Tell us what to explore',
  description:
    'Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.',
  imgSrc: img5,
  text: 'discover search',
  url: '/',
}

const VISION: CardProps = {
  title: 'Vision',
  titleBtn: 'The vision behind WESA Vision',
  description:
    "The WESA Vision SDK describes every curb, lane, street sign, and road hazard it sees as data. Developers use the SDK's AI-powered semantic segmentation, object detection, and classification to deliver precise navigation guidance, display driver assistance alerts, and detect and map road incidents.",
  imgSrc: img6,
  text: 'discover vision',
  url: '/',
}

const DATA: CardProps = {
  title: 'Data',
  titleBtn: 'Your data is our responsibility',
  description:
    'Our data is powered by hundreds of data sources, and a distributed global users base of more than half a billion monthly active users.',
  imgSrc: img7,
  text: 'more about data',
  url: '/',
}

const ATLAS: CardProps = {
  title: 'Atlas',
  titleBtn: 'Our Newest Product',
  description:
    'With Atlas, you can self-host Wesa Vision maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Wesa Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Wesa GL JS v2 and Wesa Maps SDKs for iOS and Android.',
  imgSrc: img8,
  text: 'Try atlas',
  url: '/',
}

export { DESIGN, NAVIGATION, STUDIO, MAPS, SEARCH, VISION, DATA, ATLAS }
