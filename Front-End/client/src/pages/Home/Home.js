import React from "react";
import style from "./Home.module.css";
import DisplayProductsBTN from "../../components/DisplayProductsBTN/DisplayProductsBTN";

function Home() {
  return (
    <section className={style.intro}>
      <p className={style.paragraph}>
        Welcome to our amazing prduct display website ! <br />
        Here you can share and view all kinds of products added by all users
        <br />
        Enjoy your stay !
      </p>
      <DisplayProductsBTN />
    </section>
  );
}

export default Home;
