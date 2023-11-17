import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/footer.css";
import youtubeImage from "../assets/youtube.png";
import twitchImage from "../assets/twitch.png";
import instaImage from "../assets/insta.png";
import enveloppe from "../assets/enveloppe.png";

function Footer() {
  return (
    <div className="footer">
      <div className="Newsletter">
        <p>Newsletter</p>
        <form className="form-footer" action="">
          <input
            type="email"
            id="email"
            pattern=".+@example\.com"
            size="30"
            required
            className="input-footer"
          />
          <button className="btn" type="button">
            <span className="btn-text">send</span>
            <img src={enveloppe} alt="" className="subscribe" />
          </button>
        </form>
      </div>
      <div className="part1">
        <NavLink to="/privacy">Politique de confidentialité</NavLink>
        <NavLink to="/general">Conditions Générales</NavLink>
        <NavLink to="/legal">Mentions Légales</NavLink>
        <NavLink to="/delivery">Livraisons et retours</NavLink>
      </div>
      <div className="part2">
        <NavLink to="/about">A propos</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/cgv">CGV</NavLink>
      </div>
      <div className="network">
        <p className="network-text">Réseaux</p>
        <div className="network-icons">
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtubeImage} alt="YouTube" className="youtube" />
          </a>
          <a href="https://www.twitch.com/" target="_blank" rel="noreferrer">
            <img src={twitchImage} alt="Twitch" className="twitch" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instaImage} alt="Instagram" className="insta" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
