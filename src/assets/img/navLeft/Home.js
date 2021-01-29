import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      width={33}
      height={33}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fill-opacity={props.hash === "#Accueil" ? "1" : "0.5"}
      {...props}>
      <g clipPath="url(#home_svg__clip0)" fill="#fff">
        <path
          d="M39.328 17.882L21.381 1.529a2.042 2.042 0 00-2.762 0L.672 17.882a2.038 2.038 0 00-.531 2.257 2.038 2.038 0 001.912 1.31H4.92v16.384c0 .65.526 1.177 1.176 1.177h9.837c.65 0 1.176-.527 1.176-1.177v-9.948h5.782v9.948c0 .65.527 1.177 1.176 1.177h9.837c.65 0 1.176-.527 1.176-1.177V21.45h2.867c.854 0 1.604-.515 1.913-1.31.308-.796.1-1.682-.532-2.257zM34.771 3.338h-7.9l9.076 8.253V4.515c0-.65-.526-1.177-1.176-1.177z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="home_svg__clip0">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgHome;
