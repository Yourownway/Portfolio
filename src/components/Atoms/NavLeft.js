import React, { useState } from "react";
import {
  Contact,
  Profil,
  Projects,
  Home,
} from "../../assets/img/navLeft/index";

export default function NavLeft({ hash }) {
  const [state, setState] = useState("");

  return (
    <div className="navLeft">
      <div className="navLeft__container">
        <div
          className={
            hash === "#Accueil" ? "navLeft__element-active" : "navLeft__element"
          }>
          <a
            href="#Accueil"
            className="navLeft__a navLeft__a-accueil"
            onClick={() => setState("Accueil")}>
            <Home
              hash={hash}
              alt="accueil_icone"
              className="navLeft__img navLeft__img-accueil"
            />
          </a>
          {hash === "#Accueil" ? (
            <h4 class="navLeft__subtitle"> Accueil</h4>
          ) : null}
        </div>
        <div
          className={
            hash === "#Profil" ? "navLeft__element-active" : "navLeft__element"
          }>
          <a
            href="#Profil"
            className="navLeft__a navLeft__a-profil"
            onClick={() => setState("Profil")}>
            <Profil
              hash={hash}
              alt="profil_icone"
              className="navLeft__img navLeft__img-profil"
            />{" "}
          </a>{" "}
          {hash === "#Profil" ? (
            <h4 class="navLeft__subtitle"> Profil</h4>
          ) : null}
        </div>
        <div
          className={
            hash === "#Projects"
              ? "navLeft__element-active"
              : "navLeft__element"
          }>
          <a
            href="#Projects"
            className="navLeft__a navLeft__a-projects"
            onClick={() => setState("Projects")}>
            <Projects
              hash={hash}
              alt="projects_icone"
              className="navLeft__img navLeft__img-projects"
            />
          </a>{" "}
          {hash === "#Projects" ? (
            <h4 class="navLeft__subtitle"> Projects</h4>
          ) : null}
        </div>
        <div
          className={
            hash === "#Contact" ? "navLeft__element-active" : "navLeft__element"
          }>
          <a
            href="#Contact"
            className="navLeft__a navLeft__a-contact"
            onClick={() => setState("Contact")}>
            <Contact
              hash={hash}
              alt="contact_icone"
              className="navLeft__img navLeft__img-contact"
            />
          </a>
          {hash === "#Contact" ? (
            <h4 class="navLeft__subtitle"> Contact</h4>
          ) : null}
        </div>
      </div>
    </div>
  );
}
