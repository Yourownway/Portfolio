import React, { useState } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import {
  About,
  Download,
  Formation,
  Skills,
  planete,
  moon,
} from "../../assets/img/profil/index";
// import { star } from "../../assets/img/index";
import ModalesProfil from "../Organisms/ModalesProfil";

export default function Profil() {
  const [formation, setFromation] = useState(false);
  const [competances, setCompetances] = useState(false);
  const [about, setAbout] = useState(false);
  const phone = useMediaQuery("(max-width: 600px)");
  // eslint-disable-next-line
  // const backgroundPlanetePhone = {
  //   background: "url(" + planete + ") no-repeat center/55%",
  // };
  const backgroundPlanete = {
    background: "url(" + planete + ") no-repeat center/45%",
  };
  const backgroundMoon = {
    background: "url(" + moon + ") no-repeat content-box center/100%",
  };
  return (
    <section className="profil " id="Profil">
      <div className="profil__container container">
        <h1 className="profil__title title__span"> Profil</h1>
        <div className="profil__content" style={backgroundPlanete}>
          <div className="profil__moon-flex">
            <div className="profil__moon__container">
              <div
                className="profil__formation profil__moon"
                style={backgroundMoon}
                onClick={() => {
                  setFromation(!formation);
                }}
              >
                <Formation className="profil__img" />
              </div>
              <h4 className="profil__description">Formation</h4>
            </div>
            <div className="profil__moon__container">
              <div
                className="profil__skills profil__moon"
                style={backgroundMoon}
                onClick={() => {
                  setCompetances(!competances);
                }}
              >
                <Skills className="profil__img" />
              </div>
              <h4 className="profil__description">Compétences</h4>
            </div>{" "}
          </div>
          <div className="profil__moon-flex">
            <div className="profil__moon__container">
              <div
                className="profil__about profil__moon "
                onClick={() => {
                  setAbout(!about);
                }}
                style={backgroundMoon}
              >
                <About className="profil__img" />
              </div>
              <h4 className="profil__description">A propos de moi</h4>
            </div>
            <div className="profil__moon__container">
              <div
                className="profil__download profil__moon"
                style={backgroundMoon}
              >
                <Download className="profil__img" />
              </div>
              <h4 className="profil__description">Mon CV</h4>
            </div>
          </div>
        </div>
      </div>

      <ModalesProfil
        formation={formation}
        setFromation={setFromation}
        competances={competances}
        setCompetances={setCompetances}
        about={about}
        setAbout={setAbout}
      />
    </section>
  );
}
