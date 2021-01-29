import { useEffect, useState } from "react";

export default function useKeyboard({ perso }) {
  const [state, setState] = useState(perso);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          // console.log(contextRef.current);
          state.positionY = state.positionY - state.speed;
          state.srcY = state.height * 3;
          setState(state);
          console.log("hello", state);
          return state;
          break;
        case "ArrowDown":
          // console.log(canvasRef.current.width);
          state.positionY = state.positionY + state.speed;
          state.srcY = state.height * 0;
          setState(state);
          return state;
          break;

        case "ArrowRight":
          state.positionX = state.positionX + state.speed;
          state.srcY = state.height * 2;
          setState(state);
          return state;
          break;
        case "ArrowLeft":
          state.positionX = state.positionX - state.speed;
          state.srcY = state.height * 1;
          setState(state);
          break;
        default:
          return state;
      }
    });
  }, []);
}
