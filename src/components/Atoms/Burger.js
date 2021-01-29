import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { linkedin, github, facebook } from "../../assets/img/header/index";
export default function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <div className="menu__wrap">
        <input
          className="menu__wrap--toggler"
          type="checkbox"
          checked={open}
          onChange={() => setOpen(!open)}
        />
        <div className="menu__wrap__hamburger"> </div>

        <>
          <div className="menu__list">
            <HashLink
              smooth
              to="#Accueil"
              className="menu__list__link color-accueil"
              onClick={() => setOpen(!open)}>
              Accueil
            </HashLink>
            <HashLink
              smooth
              to="#Profil"
              className="menu__list__link color-profil"
              onClick={() => setOpen(!open)}>
              Profil
            </HashLink>
            <HashLink
              smooth
              to="#Projects"
              className="menu__list__link color-projects"
              onClick={() => setOpen(!open)}>
              Projects
            </HashLink>
            <HashLink
              smooth
              to="#Contact"
              className="menu__list__link color-contact"
              onClick={() => setOpen(!open)}>
              Contact
            </HashLink>
            <div className="menu__list__icons">
              <a href="#">
                <img className="menu__list__icon" src={linkedin} />
              </a>
              <a href="#">
                <img className="menu__list__icon" src={github} />
              </a>
              <a href="#">
                <img className="menu__list__icon" src={facebook} />
              </a>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
