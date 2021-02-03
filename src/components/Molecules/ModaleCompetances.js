import React, { useState } from "react";
import { moon, planete } from "../../assets/img/profil";
import {
  ReactJs,
  Js,
  Sass,
  Nodejs,
  Mysql,
  Handlebars,
  Ejs,
  Typescript,
  Scomponent,
  Eslint,
  Atomic,
  Express,
  Mangodb,
  Jwt,
  Passport,
  Postman,
} from "../../assets/img/projects/tech/index";

export default function ModaleCompetances({ competances, setCompetances }) {
  const [count, setCount] = useState(1);
  const backgroundPlanete = {
    background: "url(" + planete + ") no-repeat center",
  };
  const backgroundMoon = {
    background: "url(" + moon + ") no-repeat content-box center/100%",
  };
  return (
    <div className="profil__modale">
      <div
        className="profil__modale__close"
        onClick={() => setCompetances(false)}
      >
        <div></div>
      </div>
      <div className="modale__competances__container">
        <div className="modale__competances__list">
          <ul>
            <li onClick={() => setCount(1)}>
              <h3>Front</h3>
            </li>
            <li onClick={() => setCount(2)}>
              <h3>Back</h3>
            </li>
            <li onClick={() => setCount(3)}>
              <h3>Conception</h3>
            </li>
          </ul>
        </div>
        <div className="modale__competances__scene">
          <div
            className={`modale__competances__cube ${
              count === 1 ? "front" : ""
            } ${count === 2 ? "back" : ""} ${count === 3 ? "analyse" : ""}`}
          >
            <div className={`cube cube__front`}>
              <div className="modale__competances__grid ">
                <p className="grid__competances row1__p">Librairie:</p>{" "}
                <ul className="grid__competances row1__ul">
                  <li>
                    <ReactJs className={"grid__logo"} />
                  </li>
                  <li>
                    <Handlebars className={"grid__logo"} />
                  </li>
                  <li>
                    <Ejs className={"grid__logo"} />
                  </li>
                </ul>
                <p className="grid__competances row2__p">Languages:</p>{" "}
                <ul className="grid__competances row2__ul">
                  <li>
                    <Js className={"grid__logo"} />
                  </li>

                  <li>
                    <Typescript className={"grid__logo"} />
                  </li>
                </ul>
                <p className="grid__competances row3__p">Style:</p>{" "}
                <ul className="grid__competances row3__ul">
                  <li>
                    <Sass className={"grid__logo"} />
                  </li>
                  <li>
                    <Scomponent className={"grid__logo"} />
                  </li>
                </ul>
                <p className="grid__competances row4__p">Outils:</p>
                <ul className="grid__competances row4__ul">
                  <li>
                    <Eslint className={"grid__logo"} />
                  </li>
                  <li>
                    <Atomic className={"grid__logo"} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="cube cube__back">
              {" "}
              <div className="modale__competances__grid ">
                <p className="grid__competances row1__p">Serveur:</p>{" "}
                <ul className="grid__competances row1__ul">
                  <li>
                    <Nodejs className={"grid__logo"} />
                  </li>
                  <li>
                    <Express className={"grid__logo"} />
                  </li>
                </ul>
                <p className="grid__competances row2__p">Database:</p>{" "}
                <ul className="grid__competances row2__ul">
                  <li>
                    <Mysql className={"grid__logo"} />
                  </li>
                  <li>
                    <Mangodb className={"grid__logo"} />
                  </li>
                </ul>
                <p className="grid__competances row3__p">Securité:</p>{" "}
                <ul className="grid__competances row3__ul">
                  <li>
                    <Jwt className={"grid__logo"} />
                  </li>
                  <li>
                    <Passport className={"grid__logo"} />
                  </li>
                  <li>
                    <p>OWASP</p>
                  </li>
                </ul>
                <p className="grid__competances row4__p">
                  Architecture<br></br> & Outils:
                </p>
                <ul className="grid__competances row4__ul">
                  <li>
                    <p>MVC</p>
                  </li>
                  <li>
                    <p>API REST</p>
                  </li>
                  <li>
                    <Postman className={"grid__logo"} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="cube cube__analyse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
