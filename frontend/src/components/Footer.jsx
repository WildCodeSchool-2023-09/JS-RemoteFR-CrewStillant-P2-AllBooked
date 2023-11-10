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
        <form className="form" action="">
          <input type="text" className="input" />
          <button className="btn" type="button">
            <img src={enveloppe} alt="" className="subscribe" />
          </button>
        </form>
      </div>
      <div className="part1">
        <p>Politique de confidentialité</p>
        <p>Conditions Générales</p>
        <p>Mentions Légales</p>
        <p>Livraisons et retours</p>
      </div>
      <div className="part2">
        <p>A propos</p>
        <p>Contact</p>
        <p>FAQ</p>
        <p>CGV</p>
      </div>
      <div className="network">
        <p className="network-text">Réseaux</p>
        <div className="network-icons">
          <img src={youtubeImage} alt="YouTube" className="youtube" />
          <img src={twitchImage} alt="Twitch" className="twitch" />
          <img src={instaImage} alt="Instagram" className="insta" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
