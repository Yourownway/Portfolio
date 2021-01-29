import React from "react";

export default function ModaleAbout({ setAbout }) {
  return (
    <div className="profil__modale">
      <div className="profil__modale__close" onClick={() => setAbout(false)}>
        <div></div>
      </div>
    </div>
  );
}
