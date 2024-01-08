import React from "react";
import style from "./DisplayProductsBTN.module.css";
import { Link } from "react-router-dom";
function DisplayProductsBTN() {
  return (
    <Link to="/products" className={style.display}>
      Checkout Our Products !
    </Link>
  );
}

export default DisplayProductsBTN;
