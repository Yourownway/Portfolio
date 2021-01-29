import React from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { Burger } from "../index";
import logo from "../../assets/img/header/logo.svg";
import NavDesktop from "../Atoms/NavDesktop";
export default function Header() {
  const phone = useMediaQuery("(max-width: 600px)");
  return (
    <header className="header">
      {phone ? (
        <>
          <Burger />{" "}
          <img className="header__logo-burger" src={logo} alt="logo LD" />
        </>
      ) : (
        <>
          <img className="header__logo-desktop" src={logo} alt="logo LD" />
          <NavDesktop />
        </>
      )}
    </header>
  );
}
