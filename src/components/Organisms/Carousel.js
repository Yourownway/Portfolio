import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "../Molecules/Slide";
import SlideDesktop from "../Molecules/SlideDesktop";
import useMediaQuery from "../../Hooks/useMediaQuery";
import projectsData from "../../FakeDb/projectsData";
import { NextArrow, PrevArrow } from "../../assets/img/slide/index";
export default function Carousel() {
  const tablet = useMediaQuery("(max-width: 768px)");
  const settings = {
    customPaging: function (i) {
      if (!tablet) {
        return (
          <a>
            <img
              style={{ width: "auto", height: "100%" }}
              src={`projects/netflix.jpg`}
            />
          </a>
        );
      } else {
        return <button>{i + 1}</button>;
      }
    },

    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,

    nextArrow: <NextArrow className="projects__carousel__arrow" />,
    prevArrow: <PrevArrow className="projects__carousel__arrow" />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          // customPaging: (dots) => <ul>{dots}</ul>,
          // appendDots: (dots) => <ul>{dots}</ul>,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="projects__carousel__container">
      {tablet ? (
        <Slider className="projects__carousel__content" {...settings}>
          {projectsData.data.map((data) => (
            <Slide data={data} />
          ))}
        </Slider>
      ) : (
        <Slider className="projects__carouselDesktop__content" {...settings}>
          {projectsData.data.map((data) => (
            <SlideDesktop data={data} />
          ))}
        </Slider>
      )}
    </div>
  );
}
