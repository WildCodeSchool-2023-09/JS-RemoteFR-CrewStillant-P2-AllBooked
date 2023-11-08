import React from "react";
import "./footer.scss";
import youtubeImage from "../assets/youtube.png";
import twitchImage from "../assets/twitch.png";
import instaImage from "../assets/insta.png";

function Footer() {
  return (
    <div className="footer">
      <div className="Newsletter">
        <p>Newsletter</p>
        {/* <input type="text" className="input"></input> */}
      </div>
      <div className="part1">
        <div className="inside">
          <p>Politique de confidentialité</p>
          <p>Conditions Générales</p>
          <p>Mentions Légales</p>
          <p>Livraisons et retours</p>
        </div>
      </div>
      <div className="part2">
        <div className="inside2">
          <p>A propos</p>
          <p>Contact</p>
          <p>FAQ</p>
          <p>CGV</p>
        </div>
      </div>
      <div className="reseaux">
        <p>Réseaux</p>
        <div className="imagesReseaux">
          <img src={youtubeImage} alt="YouTube" className="youtube" />
          <img src={twitchImage} alt="Twitch" className="twitch" />
          <img src={instaImage} alt="Instagram" className="insta" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
