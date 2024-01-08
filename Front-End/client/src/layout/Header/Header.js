import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>Products Mania</h1>
      <Link to="/signin" className={style.signin}>
        Sign in
      </Link>
    </header>
  );
}

export default Header;
