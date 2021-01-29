import React, { Suspense, useEffect, useState } from "react";
import Slider from "react-slick";

export default function SliderTech({ data }) {
  const [state, setState] = useState([]);
  var settings = {
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    // speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  useEffect(() => {
    setState(
      data.map((Element) =>
        React.lazy(() => import(`../../assets/img/projects/tech/${Element}.js`))
      )
    );
  }, []);
  console.log(state, "state");
  return (
    <div className="projects__sliderTech__container">
      <Suspense fallback={<div>Chargement...</div>}>
        <Slider {...settings}>
          {state.map((Element) => (
            <div
              className="projects__sliderTech__slide"
              alt={Element}
              key={Element}>
              <Element className="projects__sliderTech__img" />
            </div>
          ))}
        </Slider>
      </Suspense>
    </div>
  );
}
