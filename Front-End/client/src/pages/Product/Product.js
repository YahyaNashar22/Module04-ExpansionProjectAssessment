import React from "react";
import style from "./Product.module.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <section className={style.wrapper}>
      <aside className={style.left}>
        <h1>title</h1>
      </aside>
      <aside className={style.right}>
        <h1 className={style.desc}>Description</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          perspiciatis autem tempore nam sunt excepturi sed reiciendis facilis,
          totam cumque nobis id deserunt esse tempora cupiditate voluptas
          veritatis quidem vel!
        </p>
        <p className={style.first}>
          categories: <span className={style.second}>bla, da, la</span>
        </p>
        <p className={style.first}>
          supplier: <span className={style.second}>merchant</span>
        </p>
        <p className={style.first}>
          price: <span className={style.second}>100$</span>
        </p>
        <Link to="/products" className={style.products}>
          Back
        </Link>
      </aside>
    </section>
  );
}

export default Product;
