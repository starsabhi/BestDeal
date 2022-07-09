import './Footer.css';
import React from 'react';
import githubLogo from '../../images/github1.svg';
import linkedInLogo from '../../images/linkedin.svg';
import ExpressLogo from '../../images/FootterIcons/express-original-wordmark.svg';
import JavaScriptLogo from '../../images/FootterIcons/javascript-original.svg';
import CssLogo from '../../images/FootterIcons/css3-original.svg';
import ReactLogo from '../../images/FootterIcons/react-original-wordmark.svg';
import ReduxLogo from '../../images/FootterIcons/redux-original.svg';
import NodejsLogo from '../../images/FootterIcons/nodejs-original-wordmark.svg';
import PostgreSqlLogo from '../../images/FootterIcons/postgresql-original-wordmark.svg';
import SequelizeLogo from '../../images/FootterIcons/sequelize-original.svg';
import GitLogo from '../../images/FootterIcons/git-original-wordmark.svg';
import VScodeLogo from '../../images/FootterIcons/vscode-original-wordmark.svg';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="technologiesDiv nameDivfortech"> Technologies Used:</div>
      <div className="technologiesDiv">
        <img
          className="technologiesDivImg"
          src={JavaScriptLogo}
          alt={JavaScriptLogo}
        />
      </div>
      <div className="technologiesDiv">
        <img
          className="technologiesDivImg"
          src={ExpressLogo}
          alt={ExpressLogo}
        />
      </div>
      <div className="technologiesDiv">
        <img className="technologiesDivImg" src={ReactLogo} alt={ReactLogo} />
      </div>
      <div className="technologiesDiv">
        <img className="technologiesDivImg" src={ReduxLogo} alt={ReduxLogo} />
      </div>
      <div className="technologiesDiv">
        <img className="technologiesDivImg" src={CssLogo} alt={CssLogo} />
      </div>
      <div className="technologiesDiv">
        <img className="technologiesDivImg" src={NodejsLogo} alt={NodejsLogo} />
      </div>
      <div className="technologiesDiv">
        <img
          className="technologiesDivImg"
          src={PostgreSqlLogo}
          alt={PostgreSqlLogo}
        />
      </div>
      <div className="technologiesDiv">
        <img
          className="technologiesDivImg"
          src={SequelizeLogo}
          alt={SequelizeLogo}
        />
      </div>
      <div className="technologiesDiv">
        <img className="technologiesDivImg" src={VScodeLogo} alt={VScodeLogo} />
      </div>
      <div className="technologiesDiv">
        <img className="technologiesDivImg" src={GitLogo} alt={GitLogo} />
      </div>
      <div className="footer-container-inner">
        <div className="footer-developed-by">Developed by:</div>
        <div className="footer-developerList">
          <div className="footer-developer-name">
            <div>Abhishek Bornak</div>
            <div className="footer-image-links">
              <a
                href="https://github.com/starsabhi"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footerIconClass"
                  src={githubLogo}
                  height="23px"
                  alt="github"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-bornak-semasna514865/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footerIconClass"
                  src={linkedInLogo}
                  height="23px"
                  alt="linkedIn"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
