import React from "react";
import estilos from "./main.module.css";

const Landing = () => {
  return (
    <section className={estilos.home}>
      <div className={estilos.textContainer}>
        <h1 className={estilos.content}>
          Climatización a{" "}
          <span className={estilos.spanContent}> toda España </span>{" "}
        </h1>
        <p className={estilos.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          eveniet laboriosam illum rerum cumque eos.{" "}
        </p>
      </div>
        <img className={estilos.banner} src="bannerP.jpg" alt="" />
    </section>
  );
};

export default Landing;
