import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import '../components/GoogleMap'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'
import full08 from '../assets/images/fulls/08.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'BOSRide',
    description:
      'Bike ride tracker built with a React frontend and Rails backend',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'RideBOS',
    description:
      'Bike ride tracker built with a Bootstrap/jQuery frontend and Rails backend',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Tic Tac Toe',
    description:
      'A tic tac toe front-end built in JavaScript / jQuery to connect to a Rails backend',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Responsive Image Slideshow',
    description:
      'Fully responsive image slideshow built in pure JS, HTML and CSS.  Also swipeable on mobile',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'AlphaLyze',
    description: 'A word/character count analyzer built in JavaScript / jQuery',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'MBTA',
    description:
      'A sample MBTA app built in React and using the Mapbox API to pinpoint T stations',
  },
  {
    id: '7',
    src: full07,
    thumbnail: thumb07,
    caption: '5k Run Website',
    description:
      'A sample website for a 5k run built in HTML, CSS and JavaScript',
  },
  {
    id: '8',
    src: full08,
    thumbnail: thumb08,
    caption: 'Landing Page',
    description: 'A fully responsive sample landing page built in HTML and CSS',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Dave Bergstrom'
    const siteDescription = 'Built with Gatsby.js based on Strata by HTML5 UP'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <h4>
              I'm a web developer who's been fortunate to have gained a broad
              background in technology with 10+ years of general IT experience,
              from helpdesk to system administration, across multiple
              industries, while working closely with several Agile-based
              software teams in support and ops capacities. I'm always looking
              for ways to embrace modern web technologies to help develop and
              bring ideas to life!
            </h4>
            <ul className="actions">
              <li>
                <a href="#portfolio" className="button">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills-tools" className="button">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="button">
                  Contact
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <a name="portfolio" />
            <h2>Projects</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a href="https://github.com/dwbergstrom" className="button">
                  My Github
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <a name="skills-tools" />
            <h2>Skills and Technologies</h2>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-js-square">
                    <span className="label">JavaScript</span>
                  </h3>
                  JavaScript
                  <br />
                </li>
                <li>
                  <h3 className="icon fa-html5">
                    <span className="label">HTML5</span>
                  </h3>
                  HTML5
                </li>
                <li>
                  <h3 className="icon fa-css3">
                    <span className="label">CSS3</span>
                  </h3>
                  CSS3
                </li>
              </ul>
            </div>
          </section>
          <section id="four">
            <a name="contact" />
            <h2>Get In Touch</h2>
            <div className="row">
              <div className="8u 12u$(small)">
                <div id="googleMap" />
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Boston, MA
                    <br />
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    585.355.6704
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">dwbergstrom@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
