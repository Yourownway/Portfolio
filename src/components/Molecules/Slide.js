import React, { useState } from "react";
import { netflix } from "../../assets/img/projects/index";
import { Github, Globe, ArrowUp } from "../../assets/img/slide/index";
import SliderTech from "./SliderTech";
export default function Slide({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="projects__slide__container">
        {!open ? (
          <div className="projects__slide__section1">
            <h1 className="projects__slide__title">Projets {data.title}</h1>
            <img
              className="projects__slide__img"
              src={`projects/${data.img}.jpg`}
            />
          </div>
        ) : (
          <div className="projects__slide__section2">
            <h2 className="projects__slide__subtitle title__span">Context</h2>
            <div className="projects__slide__description">
              <p>{data.description}</p>
              <SliderTech data={data.tech} />
            </div>
          </div>
        )}{" "}
        <div className={`projects__slide__links${open ? "--open" : ""}`}>
          <Github className={`projects__slide__icone${open ? "--open" : ""}`} />
          <Globe className={`projects__slide__icone${open ? "--open" : ""}`} />
          <div
            className={`projects__slide__toogle`}
            onClick={() => {
              setOpen(!open);
            }}>
            {" "}
            <p>Details</p>
            <input
              className="projects__slide__checkbox"
              type="checkbox"
              checked={open}
              onChange={() => {
                setOpen(!open);
              }}
            />{" "}
            <ArrowUp className="projects__slide__arrowUp" />
          </div>
        </div>
      </div>
    </>
  );
}
