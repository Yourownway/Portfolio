export default function InitPerso1(ctx, canvas, persoData, imgSrc, setState) {
  const image = new Image();
  image.src = imgSrc;
  let data = new Perso1(
    persoData.srcY,
    persoData.width,
    persoData.height,
    persoData.positionX,
    persoData.positionY,
    persoData.speedX,
    persoData.speedY
  );

  image.onload = () => {
    data.draw(ctx, image, canvas);
  };
  return data;
}

class Perso1 {
  constructor(srcY, width, height, positionX, positionY, speedX, speedY) {
    this.srcY = srcY;
    this.width = width;
    this.height = height;
    this.positionX = positionX + speedX;
    this.positionY = positionY + speedY;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  //

  draw(ctx, image, canvas) {
    ctx.drawImage(
      image,
      0,
      this.srcY,
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }
}
