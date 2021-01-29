import React, { useEffect, useState } from "react";
import Axios from "axios";
export default function useWhell(eWhell) {
  const [hash, setHash] = useState(window.location.hash);
  const [index, setIndex] = useState(0);
  const [popState, setPopState] = useState({});
  const URL = "http://localhost:3000/";
  // const [sectionTags, setSectionTags] = useState(
  //   Array.from(document.getElementsByTagName("section")).map(
  //     (section) => section
  //   )
  // );
  const Array = ["#Accueil", "#Profil", "#Projects", "#Contact"];

  useEffect(() => {
    window.location.hash = Array[0];
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", (e) => setPopState(e));
    setIndex(Array.findIndex((hash) => hash === window.location.hash));
  }, [popState]);

  useEffect(() => {
    //init hash
    // const sectionTags = Array.from(
    //   document.getElementsByTagName("section")
    // ).map((section) => section);
    // if (window.location.hash === "") {
    //   window.location.hash = sectionTags[0].id;
    // }

    setIndex(Array.findIndex((hash) => hash === window.location.hash));
    const container = document.getElementById("container");
    container.scrollTop = 0;
    // const body = document.getElementsByTagName("body")[0];
    // console.log(body);

    // setHash(window.location.hash);

    if (eWhell && eWhell.deltaY > 0 && index < Array.length - 1) {
      window.location.href = URL + Array[index + 1];

      setIndex(index + 1);
    } else if (eWhell && eWhell.deltaY < 0 && index > 0) {
      window.location.href = URL + Array[index - 1];
      setIndex(index - 1);
    } else {
      window.location.href = URL + Array[0];
      setIndex(0);
    }

    // if (e && e.deltaY < 0) {
    //   window.location.href = URL + Array[index - 1];

    //   setIndex(index - 1);
    // } else {
    //   window.location.href = URL + Array[0];
    //   setIndex(0);
    // }
    // let i = sectionTags.findIndex(
    //   (section) => section.id === window.location.hash.replace("#", "")
    // );
    // window.location.href = URL + window.location.hash.replace("#", "");
    // setIndex(i);
    // setHash(window.location.hash);
    // setIndex(index + 1);

    // console.log(indexOf(sectionTags.find((section) => section.id === "Accueil")),'');
    // console.log("hash l 25", hash);
    // console.log("indexl27", index);
    //
    //

    // if (e && e.deltaY < 0) {
    //   container.scrollBy(0, -sectionTags[1].offsetTop);
    //   // setIndex(section.indexOf(hash) + 1);
    //   // console.log(section.indexOf(hash));
    //   // setIndex(section.indexOf(hash) + 1);
    //   // console.log(hash);
    //   // setIndex(section.indexOf(hash);
    // } else {
    // }
  }, [eWhell]);

  return;
}
