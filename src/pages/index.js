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

import htmlImage from '../assets/images/skills/html-icon.png'
import cssImage from '../assets/images/skills/css3-icon.png'
import jsImage from '../assets/images/skills/javascript-icon.png'
import jQueryImage from '../assets/images/skills/jquery-icon.png'
import reactImage from '../assets/images/skills/react-icon.png'
import sassImage from '../assets/images/skills/sass-icon.png'
import gitImage from '../assets/images/skills/github-icon.png'
import nodeJSImage from '../assets/images/skills/nodejs-icon.png'
import railsImage from '../assets/images/skills/ruby-on-rails-icon.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'BOSRide',
    description:
      'Bike ride tracker built with a React frontend and Rails backend',
    projectLink: 'https://dwbergstrom.github.io/ridegame-client/#/about',
    projectDetail: 'Test credentials are: dwb@db.com / bca',
    githubLink: 'https://github.com/DWBergstrom/ridegame-client',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'RideBOS',
    description:
      'Bike ride tracker built with a Bootstrap/jQuery frontend and Rails backend',
    projectLink: 'https://dwbergstrom.github.io/ridebos-client/',
    projectDetail: 'Test credentials are: dwb@db.com / bca',
    githubLink: 'https://github.com/DWBergstrom/ridebos-client',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Tic Tac Toe',
    description:
      'A tic tac toe front-end built in JavaScript / jQuery to connect to a Rails backend',
    projectLink: 'https://dwbergstrom.github.io/tictactoe-client/',
    projectDetail: 'Test credentials are: dwb@db.com / bca',
    githubLink: 'https://github.com/DWBergstrom/tictactoe-client',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Responsive Image Slideshow',
    description:
      'Fully responsive image slideshow built in pure JS, HTML and CSS (no libraries or frameworks).  Also swipeable on mobile.',
    projectLink: 'https://dwbergstrom.github.io/responsive-slideshow/',
    projectDetail: '',
    githubLink: 'https://github.com/DWBergstrom/responsive-slideshow',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'AlphaLyze',
    description: 'A word/character count analyzer built in JavaScript / jQuery',
    projectLink: 'https://dwbergstrom.github.io/js-wordcloud-vanilla/',
    projectDetail: '',
    githubLink: 'https://github.com/DWBergstrom/js-wordcloud-vanilla',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'MBTA',
    description:
      'A sample MBTA app built in React and using the Mapbox API to pinpoint T stations',
    projectLink: 'https://dwbergstrom.github.io/transpo-hackathon/',
    projectDetail: '',
    githubLink: 'https://github.com/DWBergstrom/transpo-hackathon',
  },
  {
    id: '7',
    src: full07,
    thumbnail: thumb07,
    caption: '5k Run Website',
    description:
      'A sample website for a 5k run built in HTML, CSS and JavaScript',
    projectLink: 'https://thelumberjack5k.netlify.com/',
    projectDetail: '',
    githubLink: 'https://github.com/DWBergstrom/FEWD-BOS-22-FinalProject',
  },
  {
    id: '8',
    src: full08,
    thumbnail: thumb08,
    caption: 'Landing Page',
    description: 'A fully responsive sample landing page built in HTML and CSS',
    projectLink: 'https://dwbergstrom.github.io/uie-v2/uxim19.html',
    projectDetail: '',
    githubLink: 'https://github.com/DWBergstrom/uie-v2',
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
              I'm a tech generalist who's been fortunate to have gained a broad
              background in technology with 10+ years of general IT experience,
              from helpdesk to system administration, across multiple
              industries, while working closely with several Agile-based
              software teams in support and ops capacities. I'm always looking
              for ways to embrace modern SaaS and web technologies to help develop and
              bring ideas to life!
              <br></br>
              This site was built mainly during my experience at General Assembly during
              late 2018, and highlights various web projects.  Please see my <a href="https://drive.google.com/file/d/1_Y9L5aY5Eh1XRmW_JkMRHcIvqlE96uXS/view?usp=sharing" target="_blank"> resume </a> for other IT experience.
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
              <li>
                <a
                  href="https://bit.ly/dwbergstrom-resume202106"
                  className="button"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </section>
          <section id="two">
            <a name="portfolio" />
            <h2>Projects</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  id,
                  src,
                  thumbnail,
                  caption,
                  description,
                  projectLink,
                  projectDetail,
                  githubLink,
                }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  projectLink,
                  projectDetail,
                  githubLink,
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

            <div className="skillContainer">
              <div className="iconContainer">
                <p className="skillDescription">HTML5</p>
                <img className="skillIcon" alt="HTML5" src={htmlImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">CSS3</p>
                <img className="skillIcon" alt="CSS3" src={cssImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">JavaScript</p>
                <img className="skillIcon" alt="JavaScript" src={jsImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">React</p>
                <img className="skillIcon" alt="React" src={reactImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">jQuery</p>
                <img className="skillIcon" alt="jQuery" src={jQueryImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">Sass</p>
                <img className="skillIcon" alt="Sass" src={sassImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">Github</p>
                <img className="skillIcon" alt="Github" src={gitImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">NodeJS</p>
                <img className="skillIcon" alt="NodeJS" src={nodeJSImage} />
              </div>
              <div className="iconContainer">
                <p className="skillDescription">Rails</p>
                <img className="skillIcon" alt="Rails" src={railsImage} />
              </div>
            </div>
            <div className="codePracticeContainer">
              <p>
                Find me on{' '}
                <a
                  href="https://www.codewars.com/users/DWBergstrom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codewars
                </a>{' '}
              </p>
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
