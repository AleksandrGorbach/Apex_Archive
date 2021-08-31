import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className="footer">
      <p className="created">Created<span>@AleksandrGorbach</span></p>
      <a rel="noreferrer" href="https://github.com/AleksandrGorbach" target="_blank">
        <FontAwesomeIcon icon={faGithub} id="git" />
      </a>
      <a rel="noreferrer" href="https://www.linkedin.com/in/aleksandr-gorbach-85a314154/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} id="link" />
      </a>
    </div>
  )
}