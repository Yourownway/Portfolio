import React, { useState } from "react";
import { Glass } from "../../assets/img/projects/index";

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div className="projects__search">
      <div className="projects__search__content">
        <input className={`projects__search__input ${open ? "active" : ""}`} />
        <button
          onClick={() => setOpen(!open)}
          className="projects__search__btn">
          <Glass />
        </button>
      </div>
    </div>
  );
}
