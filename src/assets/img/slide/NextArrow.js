import * as React from "react";

function SvgNextArrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M246.4 0L152 96l96 92.8H0v134.4h248L152 416l94.4 96 262.4-256L246.4 0zm-49.6 416l129.6-124.8H32v-70.4h294.4L196.8 96l49.6-49.6 216 209.6-216 211.2-49.6-51.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNextArrow;
