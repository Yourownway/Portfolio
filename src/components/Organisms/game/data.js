export default {
  perso1: {
    srcY: 0,
    positionX: Math.floor(175 - 26 / 2),
    positionY: Math.floor(200 - 27 / 2),
    width: 27,
    height: 26,
    speedX: 0,
    speedY: 0,
  },
  mapData: {
    speedY: 0,
    speedX: 0,
    cheminY1: {
      positionX: 0,
      positionY: 0,
      colStart: 0,
      colEnd: 7,
      rowStart: 0,
      rowEnd: 2,
    },
    cheminY2: {
      positionX: 0,
      positionY: 0,
      colStart: 0,
      colEnd: 7,
      rowStart: 4,
      rowEnd: 6,
    },
    portal1: {
      positionX: 0,
      positionY: 0,
      colStart: 0,

      rowStart: 2,
    },
    portal2: {
      positionX: 0,
      positionY: 0,
      colStart: 0,
      rowStart: 6,
    },
    portal3: {
      positionX: 0,
      positionY: 0,
      colStart: 5,

      rowStart: 2,
    },
    portal4: {
      positionX: 0,
      positionY: 0,
      colStart: 5,

      rowStart: 6,
    },
    passerelle: { colStart: 2, colEnd: 5, rowStart: 0, rowEnd: 8 },
  },
  backgroundData: { width: 350, height: 400 },
};
