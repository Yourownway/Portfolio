import React from "react";
import ModaleAbout from "../Molecules/ModaleAbout";
import ModaleCompetances from "../Molecules/ModaleCompetances";
import ModaleFormation from "../Molecules/ModaleFormation";

export default function ModalesProfil({
  formation,
  setFromation,
  competances,
  setCompetances,
  about,
  setAbout,
}) {
  return (
    <>
      {formation ? <ModaleFormation setFromation={setFromation} /> : null}
      {competances ? (
        <ModaleCompetances
          competances={competances}
          setCompetances={setCompetances}
        />
      ) : null}
      {about ? <ModaleAbout setAbout={setAbout} /> : null}
    </>
  );
}
