import React, { useEffect, useState } from "react";
import { netflix } from "../../assets/img/projects/index";
import { Github, Globe, ArrowUp } from "../../assets/img/slide/index";
import SliderTech from "./SliderTech";
export default function SlideDesktop({ data }) {
  return (
    <>
      {" "}
      <div className="projects__slideDesktop__container">
        <div className="projects__slideDesktop__section1">
          <h1 className="projects__slideDesktop__title">
            <span className="color-projects">Projets </span> {data.title}
          </h1>
          <img
            className="projects__slideDesktop__img"
            src={`projects/${data.img}.jpg`}
          />
          <SliderTech data={data.tech} />
        </div>
        <div className="projects__slideDesktop__section2">
          <h2 className="projects__slideDesktop__subtitle title__span">
            Context
          </h2>
          <div className="projects__slideDesktop__description">
            <p>{data.description}</p>
          </div>{" "}
          <div className="projects__slideDesktop__links">
            <Github className="projects__slideDesktop__icons" />
            <Globe className="projects__slideDesktop__icons" />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
