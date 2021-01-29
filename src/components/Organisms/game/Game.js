import React from "react";
import { data } from "./data";

export default function Game() {
  const canvasRef = useRef(null);
  const { perso1, mapData } = data;

  const [perso, setPerso] = useState({
    srcY: 0,
    positionX: 150,
    positionY: 200,
    // positionX: 30,
    // positionY: 40,
    width: perso1.width,
    height: perso1.height,
    speed: 2,
  });
  const [map, setMap] = useState(mapData);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let position = canvas.getBoundingClientRect();
    console.log(position, "position");

    ctx.clearRect(0, 0, 350, 400);
    function animate() {
      // ctx.clearRect(0, 0, 350, 400);
      initChemin(ctx, map, texture, perso);
      initPerso1(ctx, canvas, perso, R2D2);

      // else{
      //   perso.speed = 1;
      //   setPerso(perso)
      // }
      requestAnimationFrame(animate);
    }
    animate();
  }, [perso]);

  return (
    <div className="canvas__container">
      <canvas height={400} width={350} className="canvas" ref={canvasRef} />
    </div>
  );
}
