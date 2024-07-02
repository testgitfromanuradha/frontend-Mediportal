import React from "react";
import "../styles/footer.css";
import { FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Menu</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              {/* <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li> */}
              {/* <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li> */}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Address:</NavLink>
                <p class="add"> Pune, Maharashtra 411016</p>
                <p class="add">+91-7685443254</p>
              </li>
            </ul>
          </div>

          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="facebook">
                <a
                  href="https://www.twitter.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.linkedin.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Made by Anuradha Madhura Mayuri © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
