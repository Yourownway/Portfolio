import React, { createContext, useEffect, useRef, useState } from "react";
import Planete from "../../assets/img/profil/planete.svg";
import {
  R2D2,
  theme,
  texture,
  portalBase,
  rune1,
  rune2,
} from "../../assets/game/index";
import initPerso1 from "./game/utils/personnage";
import data from "./game/data";
import initBackground, { initChemin, initPortal } from "./game/map-world";
import useKeyboard from "./game/utils/useKeyboard";

export default function Caneva() {
  const canvasRef = useRef(null);
  const canvasMapRef = useRef(null);
  let { perso1, mapData } = data;
  // const [perso, setPerso] = useState(perso1);

  const [perso, setPerso] = useState(perso1);

  const [map, setMap] = useState(mapData);

  // X 350/7 Y 400/8

  useEffect(() => {
    let { backgroundData, map } = data;

    const canvasMap = canvasMapRef.current;
    const ctx = canvasMap.getContext("2d");
    initBackground(ctx, canvasMap, backgroundData, theme);
  }, [perso]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let position = canvas.getBoundingClientRect();

    // initChemin(ctx, map, texture);
    // initPerso1(ctx, perso, R2D2);
    // initBackground(ctx, canvas, backgroundData, theme);
    ctx.clearRect(0, 0, 350, 400);
    function animate() {
      initChemin(ctx, map, texture, perso);
      initPortal(ctx, map, perso, portalBase, rune1, rune2);
      initPerso1(ctx, canvas, perso, R2D2);
      // setPerso(Test);

      // else{
      //   perso.speed = 1;
      //   setPerso(perso)
      // }
      requestAnimationFrame(animate);
    }
    animate();
  }, [perso]);

  useEffect(() => {
    const limit = {
      right: 200,
      left: 100,
      top: 100,
      bottom: 250,
    };
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    window.addEventListener("keydown", (e) => {
      if (perso.positionY < 0) {
        perso.speedY = 0;
        perso.positionY = 0;
      }
      if (perso.positionY > canvas.height - 10) {
        perso.speedY = 0;
        perso.positionY = canvas.height - 10;
      }
      if (perso.positionX < 0) {
        perso.speedY = 0;
        perso.positionX = 0;
      }
      if (perso.positionX > canvas.width - 30) {
        perso.speedY = 0;
        perso.positionX = canvas.width - 30;
      }

      switch (e.code) {
        case "ArrowUp":
          perso.speedY = -2;
          perso.positionY = perso.positionY + perso.speedY;

          // console.log(contextRef.current);
          perso.srcY = perso.height * 3;
          if (perso.positionY === limit.bottom) {
            map.speedY = 0;
          }
          if (perso.positionY === limit.top) {
            map.speedY = 1;
          }
          setMap(map);
          setPerso(perso);
          break;
        case "ArrowDown":
          // console.log(canvasRef.current.width);
          perso.speedY = 2;
          perso.positionY = perso.positionY + perso.speedY;
          perso.srcY = perso.height * 0;
          if (perso.positionY === limit.bottom) {
            map.speedY = -1;
          }
          if (perso.positionY === limit.top) {
            map.speedY = 0;
          }
          // if (perso.positionY === 240) {
          //   map.speedY -= 1;
          //   //   return (map.speedY = 0);
          //   return setMap(map);
          // }
          console.log(perso.positionY);

          setPerso(perso);

          // if (map.speedY > 4 || (map.speedY < -4) & (perso.positionY > 160)) {
          //   return (map.speedY = 0);
          // } else {
          //   map.speedY -= 1;
          //   perso.speed = 0;
          //   setPerso(perso);
          // }

          break;

        case "ArrowRight":
          perso.speedX = 2;
          perso.positionX = perso.positionX + perso.speedX;
          if (perso.positionX === limit.right) {
            map.speedX = -1;
          }
          perso.srcY = perso.height * 2;
          if (perso.positionX === limit.left) {
            map.speedX = 0;
          }
          setPerso(perso);

          break;
        case "ArrowLeft":
          perso.speedX = -2;
          perso.positionX = perso.positionX + perso.speedX;
          if (perso.positionX === limit.right) {
            map.speedX = 0;
          }
          if (perso.positionX === limit.left) {
            map.speedX = 1;
          }
          perso.srcY = perso.height * 1;
          setPerso(perso);
          break;
        default:
          console.log("hello");
      }
    });
  }, []);

  return (
    <div className="canvas__container">
      <canvas height={400} width={350} className="canvas" ref={canvasRef} />
      <canvas
        height={400}
        width={350}
        className="canvasMap"
        ref={canvasMapRef}
      />
    </div>
  );
}
