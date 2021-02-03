import React from "react";
import { arrow } from "../../assets/img/contact/index";
import { star } from "../../assets/img/index";
export default function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="contact__container container">
        <div className="contact__info">
          <h1 className="contact__title title__span">Contact</h1>
          <p className="contact__description">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre Le lorem ipsum est, en imprimerie,
            une{" "}
          </p>
          <h3 className="contact__email">Lorris.dhedin@hotmail.fr</h3>
          <h3 className="contact__phone">+33 7 67 67 29 26</h3>
          <h4 className="contact__adresse">
            175 avenue Henri Ravera, 92220 Bagneux
          </h4>
        </div>
        <div className="contact__form-container">
          <form className="contact__form">
            <input className="form__name" type="text" placeholder="Nom" />
            <input className="form__email" type="text" placeholder="Email" />
            <textarea className="form__message" placeholder="Message" />
            <button className="form__button">
              ENVOYER <img className="form__arrow" src={arrow} alt="arrow" />
            </button>
          </form>
        </div>
        <div className="star__container-contact">
          <div className="star__col1">
            <img className="star__element1 star" src={star} alt="star" />
            {/* <img className="star__element2 star" src={star} /> */}
            <img className="star__element3 star" src={star} alt="star" />
          </div>
          <div className="star__col2">
            <img className="star__element1 star" src={star} alt="star" />
            {/* <img className="star__element2 star" src={star} /> */}
            {/* <img className="star__element3 star" src={star} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
