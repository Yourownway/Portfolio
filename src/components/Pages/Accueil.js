import React from "react";
import { Jupiter, Rocket } from "../../assets/img/accueil/index";

import { star } from "../../assets/img/index";
export default function Accueil() {
  return (
    <section className="accueil " id="Accueil">
      <div className="accueil__container container">
        <h1 className="accueil__title">
          Bienvenue sur mon <span className="title__span">Portfolio</span>
        </h1>
        <p className="accueil__p1">
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page
        </p>
        <p className="accueil__p2">
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page
        </p>
        <hr />
        <p className="accueil__p3">texte définitif venant remplacer le faux</p>
      </div>
      <Rocket className="accueil__rocket accueil__assets" />
      <Jupiter className="accueil__jupiter accueil__assets" />

      <div className="star__container-accueil">
        <div className="star__col1">
          <img className="star__element1 star" src={star} alt="star" />
          {/* <img className="star__element2 star" src={star} /> */}
          <img className="star__element3 star" src={star} alt="star" />
        </div>
        <div className="star__col2">
          <img className="star__element1 star" src={star} alt="star" />
          <img className="star__element2 star" src={star} alt="star" />
          <img className="star__element3 star" src={star} alt="star" />
        </div>
      </div>
    </section>
  );
}
