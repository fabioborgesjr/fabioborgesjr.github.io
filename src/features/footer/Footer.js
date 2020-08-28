import React, { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(
    document.readyState !== "complete"
  );
  const loadingCallback = useCallback(() => {
    setIsLoading(!isLoading);
  }, [isLoading]);
  useEffect(() => {
    window.addEventListener("load", loadingCallback);

    return () => {
      window.removeEventListener("load", loadingCallback);
    };
  }, [loadingCallback]);

  return isLoading ? null : (
    <footer className="footer">
      <span>© 2017-2020 - Fábio Borges Júnior</span>
      <div>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/fabioborgesjr/"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
          <li className="footer__list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fabioborgesjr"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
          <li className="footer__list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:fabioborgesjr@protonmail.com"
            >
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
