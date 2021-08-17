import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <h3>company</h3>
        <Link to="#">Shipping</Link>
        <Link to="#">Return Policy</Link>
        <Link to="#">Work With Us</Link>
        <Link to="#">Terms & Conditions</Link>
      </div>
      <div className="footer__content">
        <h3>follow us out there</h3>

        <Link to="#">Facebook</Link>
        <Link to="#">Twitter</Link>
        <Link to="#">Pinterest</Link>
        <Link to="#">Instagram</Link>
      </div>
      <div className="footer__content">
        <h3>thank you</h3>
        <p>
          Thank you to the wonderful folks over at Herbivore for letting us use
          their beautiful imagery in this demo. Head over to their store to shop
          their full catalog of amazing products.
        </p>
      </div>
      <div className="footer__content">
        <h3>newsletter</h3>
        <form action="">
          <input type="text" name="" id="" placeholder="your@email.com" />
          <input className="button" type="button" value="SUBSCRIBE" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
