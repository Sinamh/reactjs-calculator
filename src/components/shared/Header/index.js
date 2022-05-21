import React from "react";
import  style  from "./index.scss";

const Header = ({ children }) => {
  return <header className={style}>{children}</header>;
};

Header.propTypes = {};

export default Header;
