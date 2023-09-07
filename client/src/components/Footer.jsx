import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link className="link" to="/">Blog</Link>
      <span>
        Made with <b>React js</b>
      </span>
    </footer>
  );
};

export default Footer;
