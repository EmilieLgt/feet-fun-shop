import "./Footer.css";

function Footer() {
  return (
    <div className="footer-box">
      <div className="social-icon">
        <a href="www.facebook.com">
          <img
            className="icon"
            src="../src/assets/images/network/facebook.svg"
            alt="logo de facebook avec un liens vers le page facebook du site"
          />
        </a>
        <a href="www.instagram.com">
          <img
            className="icon"
            src="../src/assets/images/network/instagram.svg"
            alt="logo de instagram avec un liens vers le page instagram du site"
          />
        </a>
        <a href="www.twitter.com">
          <img
            className="icon"
            src="../src/assets/images/network/twitterx.svg"
            alt="logo de twiter avec un liens vers le page twitter du site"
          />
        </a>
      </div>
      <div className="navigation-footer">
        <a href="www.ggogle.com" className="art-font color-nav">
          ART
        </a>
        <a href="www.ggogle.com" className="sports-font color-nav">
          SPORTS
        </a>
        <a href="www.ggogle.com" className="geek-font color-nav">
          GEEK
        </a>
        <a href="www.ggogle.com" className="anime-font color-nav">
          ANIME{" "}
        </a>
        <a href="www.ggogle.com" className="festif-font color-nav">
          FESTIF{" "}
        </a>
      </div>
      <h6>
        © 2024 <span>Feet & Fun</span> Tous droits réservés.
      </h6>
    </div>
  );
}

export default Footer;
