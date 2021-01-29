import React from "react";

export default function ModaleFormation({ setFromation }) {
  return (
    <div className="profil__modale">
      <h1 className="profil__modale__title">Formation</h1>
      <div
        className="profil__modale__close"
        onClick={() => setFromation(false)}>
        <div></div>
      </div>
      <ul className="profil__modale__timeline">
        <li className="profil__modale__timeline__li">
          <input
            class="radio"
            id="simplon"
            name="formation"
            type="radio"
            defaultChecked
          />
          <div class="relative">
            <span class="date">Mars 2020 </span>
            <span class="circle"></span>
            <label className="label label__simplon" htmlFor="simplon">
              Simplon.co
            </label>
          </div>
          <div class="content">
            <p>
              Formation développeur web et web mobile <br></br>-Titre
              professionnel RNCP niveau III <br></br>-Certification SEO Opquast
              Avancé (810/1000)
              <br></br> -Certification Agile Scrum Kanban{" "}
            </p>
          </div>
        </li>
        <li className="profil__modale__timeline__li">
          <input class="radio" id="prepa" name="formation" type="radio" />
          <div class="relative">
            <span class="date">2012-2013</span>
            <span class="circle"></span>
            <label className="label label__prepa" htmlFor="prepa">
              Classe prépa
            </label>
          </div>
          <div class="content">
            {" "}
            <p>
              -Technique et Science de l'ingenieur: Math Sup, Electronique ,
              Physiques , Mécanique , Chimie{" "}
            </p>
          </div>
        </li>
        <li className="profil__modale__timeline__li">
          <input class="radio" id="bac" name="formation" type="radio" />
          <div class="relative">
            <span class="date">2012</span>
            <span class="circle"></span>
            <label className="label label__bac" htmlFor="bac">
              Baccalauréat STI Genie Electronique
            </label>
          </div>
          <div class="content">
            {" "}
            <p>
              -Traitement des signaux électroniques <br></br> -Conception
              graphique d'un système électronique (Proteus, Kicad) <br></br>
              -Réalisation d'un système électronique <br></br>Etude des
              composants, lectures des documentations techniques <br></br>
              -Logique combinatoire ( Table de Karnaugh, Algèbre de Boole){" "}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
