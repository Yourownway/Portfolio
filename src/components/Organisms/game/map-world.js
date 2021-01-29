export default function initBackground(ctx, canvas, data, imgSrc) {
  const image = new Image();
  image.src = imgSrc;
  let background = new Background(canvas.width, canvas.height);

  background.draw(ctx, image);
}

export function initChemin(ctx, data, imgSrc) {
  const image = new Image();
  image.src = imgSrc;

  let chemin = new Chemin(
    data.passerelle.colStart,
    data.passerelle.colEnd,
    data.passerelle.rowStart,
    data.passerelle.rowEnd,
    0,

    data.speedX
  );
  let cheminY1 = new Chemin(
    data.cheminY1.colStart,
    data.cheminY1.colEnd,
    data.cheminY1.rowStart,
    data.cheminY1.rowEnd,
    data.speedY,
    data.speedX
  );
  let cheminY2 = new Chemin(
    data.cheminY2.colStart,
    data.cheminY2.colEnd,
    data.cheminY2.rowStart,
    data.cheminY2.rowEnd,
    data.speedY,
    data.speedX
  );
  let cheminY3 = new Chemin(
    data.cheminY1.colStart,
    data.cheminY1.colEnd,
    data.cheminY1.rowStart - 4,
    data.cheminY1.rowEnd - 4,
    data.speedY,
    data.speedX
  );
  let cheminY4 = new Chemin(
    data.cheminY2.colStart,
    data.cheminY2.colEnd,
    data.cheminY2.rowStart + 4,
    data.cheminY2.rowEnd + 4,
    data.speedY,
    data.speedX
  );

  image.onload = () => {
    ctx.clearRect(0, 0, 350, 400);
    chemin.draw(ctx, image);
    // cheminY1.draw(ctx, image);
    cheminY2.draw(ctx, image);
    cheminY3.draw(ctx, image);
    // cheminY4.draw(ctx, image);
  };
}
export function initPortal(ctx, data, perso, src1, src2, src3) {
  const portal = new Image();
  portal.src = src1;
  const rune1 = new Image();
  rune1.src = src2;
  const rune2 = new Image();
  rune2.src = src3;
  let array = [];
  let portal1 = new Chemin(
    data.portal1.colStart,
    data.portal1.colEnd,
    data.portal1.rowStart,
    data.portal1.rowEnd,
    data.speedY,
    data.speedX
  );
  let portal2 = new Chemin(
    data.portal2.colStart,
    data.portal2.colEnd,
    data.portal2.rowStart,
    data.portal2.rowEnd,
    data.speedY,
    data.speedX
  );
  let portal3 = new Chemin(
    data.portal3.colStart,
    data.portal3.colEnd,
    data.portal3.rowStart,
    data.portal3.rowEnd,
    data.speedY,
    data.speedX
  );
  let portal4 = new Chemin(
    data.portal4.colStart,
    data.portal4.colEnd,
    data.portal4.rowStart,
    data.portal4.rowEnd,
    data.speedY,
    data.speedX
  );
  array.push(portal1, portal2, portal3, portal4);

  portal.onload = () => {
    portal1.drawPortal(ctx, portal);
    portal2.drawPortal(ctx, portal);
    portal3.drawPortal(ctx, portal);
    portal4.drawPortal(ctx, portal);
  };
  rune1.onload = () => {
    portal1.drawRune(ctx, rune1);
    portal2.drawRune(ctx, rune1);
    portal3.drawRune(ctx, rune1);
    portal4.drawRune(ctx, rune1);
  };

  array.map((data) => {
    if (
      (perso.positionY > data.positionY) &
      (perso.positionY < data.positionY + 100) &
      (perso.positionX > data.positionX) &
      (perso.positionX < data.positionX + 100)
    ) {
      rune2.onload = () => {
        data.drawRune(ctx, rune2);
      };
    }
  });
}

class Background {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw(ctx, image) {
    image.onload = () => {
      ctx.drawImage(image, 0, 0, this.width, this.height);
    };
  }
}
class Chemin {
  constructor(colStart, colEnd, rowStart, rowEnd, speedY, speedX) {
    this.colStart = colStart;
    this.colEnd = colEnd;
    this.rowStart = rowStart;
    this.rowEnd = rowEnd;
    this.speedY = speedY;
    this.speedX = speedX;
    this.positionX = (colStart + speedX) * 50;
    this.positionY = (rowStart + speedY) * 50;
  }
  //
  draw(ctx, image) {
    for (
      var i = this.rowStart + this.speedY;
      i < this.rowEnd + this.speedY;
      i++
    ) {
      for (
        var j = this.colStart + this.speedX;
        j < this.colEnd + this.speedX;
        j++
      ) {
        ctx.drawImage(image, 0, 0, 128, 128, j * 50, i * 50, 50, 50);
      }
    }
  }
  drawPortal(ctx, img) {
    // console.log(this.positionX, "colStart", this.positionY, "rowStart");
    ctx.drawImage(
      img,
      0,
      0,
      1024,
      1024,
      50 * (this.colStart + this.speedX),
      50 * (this.rowStart + this.speedY),
      100,
      100
    );
  }
  drawRune(ctx, img) {
    ctx.drawImage(
      img,
      0,
      0,
      1024,
      1024,
      50 * (this.colStart + this.speedX),
      50 * (this.rowStart + this.speedY),
      200,
      200
    );
  }
}
