import React from "react";
import { linkedin, github, facebook } from "../../assets/img/header/index";

export default function () {
  return (
    <div className="navDesktop__list">
      <a href="#Accueil" className="navDesktop__link ">
        Accueil
      </a>
      <a href="#Profil" className="navDesktop__link ">
        Profil
      </a>
      <a href="#Projects" className="navDesktop__link ">
        Projects
      </a>
      <a href="#Contact" className="navDesktop__link ">
        Contact
      </a>
      <div className="navDesktop__social">
        <a className="navDesktop__linkedin" href="#">
          <img src={linkedin} />
        </a>
        <a className="navDesktop__github" href="#">
          <img src={github} />
        </a>
        <a className="navDesktop__facebook" href="#">
          <img src={facebook} />
        </a>
      </div>
    </div>
  );
}
