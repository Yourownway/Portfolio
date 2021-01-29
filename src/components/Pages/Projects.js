import React from "react";

import useMediaQuery from "../../Hooks/useMediaQuery";
import Search from "../Atoms/Search";
import Caneva from "../Organisms/Caneva";
import Carousel from "../Organisms/Carousel";
export default function Porjects() {
  return (
    <section className="projects" id="Projects">
      <div className="projects__container container">
        <div className="projects__title">
          <h1 className=" title__span">Projects</h1> <Search />{" "}
        </div>
        {/* <Carousel /> */}
        <Caneva />
      </div>
    </section>
  );
}
