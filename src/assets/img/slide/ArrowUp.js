import * as React from "react";

function SvgArrowUp(props) {
  return (
    <svg
      width={25}
      height={14}
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M6.61.607l.001-.001c.24-.24.555-.356.872-.35h.008c.317-.006.632.11.872.35h0c.06.06.114.129.162.204l.014.022.02.02 5.838 5.84h0a1.2 1.2 0 010 1.7c-.47.47-1.231.47-1.7 0h0L7.664 3.359l-.177-.177-.177.177-5.007 5.007s0 0 0 0a1.203 1.203 0 01-1.701-1.7v-.001L6.416.851l.019-.019.014-.022c.048-.075.101-.144.162-.203z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgArrowUp;
