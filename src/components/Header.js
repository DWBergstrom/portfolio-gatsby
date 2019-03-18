import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a
            href="https://www.linkedin.com/in/dwbergstrom/"
            className="image avatar"
          >
            <img src={avatar} alt="Dave B" />
          </a>
          <h1>
            <strong>I'm Dave Bergstrom</strong>, a web developer with a
            background in IT.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
