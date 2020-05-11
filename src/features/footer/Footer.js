import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © 2017-2020 - Fábio Borges Júnior
      </span>
      <div>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fabioborgesjr/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
          <li className="footer__list-item">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/salazenas">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
