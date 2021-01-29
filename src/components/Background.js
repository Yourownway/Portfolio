import React, { useEffect, useState } from "react";
import { star } from "../assets/img";
import { Jupiter, Rocket } from "../assets/img/accueil/index";

export default function Background({ hash }) {
  console.log(hash, "hash");
  return (
    <div className="background">
      {hash === "#Accueil" ? (
        <>
          <div className="star__container-accueil">
            <div className="star__col1">
              <img className="star__element1 star" src={star} />
              <img className="star__element2 star" src={star} />
              <img className="star__element3 star" src={star} />
            </div>
            <div className="star__col2">
              <img className="star__element1 star" src={star} />
              <img className="star__element2 star" src={star} />
              <img className="star__element3 star" src={star} />
            </div>
          </div>{" "}
        </>
      ) : null}
    </div>
  );
}
