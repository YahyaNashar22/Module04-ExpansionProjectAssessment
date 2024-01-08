import React from "react";
import style from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard({ id, title, category, price, description, supplier }) {
  return (
    <Link to="/product" className={style.card}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.price}>
        <span className={style.static}>Price : </span>
        {price}
      </p>
      <p className={style.category}>
        <span className={style.static}>Category : </span>
        {category}
      </p>
      <p className={style.description}>
        <span className={style.static}>Description: </span>
        {description}
      </p>
      <p className={style.supplier}>
        <span className={style.static}>Supplier: </span>
        {supplier}
      </p>
    </Link>
  );
}

export default ProductCard;
