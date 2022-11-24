// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="Header-section">
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <p className="paragraph-header1">Wave</p>
    </div>
    <div className="section">
      <Link className="paragraph-header" to="/">
        Home
      </Link>

      <Link className="paragraph-header" to="about">
        About
      </Link>

      <Link className="paragraph-header" to="contact">
        Contact
      </Link>
    </div>
  </div>
)

export default Header
