import React from "react";
import  style  from "./index.scss";

const Footer = ({ children }) => {
  return <footer className={style}>{children}</footer>;
};

Footer.propTypes = {};

export default Footer;
