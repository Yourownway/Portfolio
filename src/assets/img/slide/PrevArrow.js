import * as React from "react";

function SvgPrevArrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="projects__carousel__arrow"
      {...props}>
      <path
        d="M262.401 0l94.4 96-96 92.8h248v134.4h-248l96 92.8-94.4 96L.001 256 262.4 0zm49.6 416l-129.6-124.8h294.4v-70.4h-294.4L312.001 96l-49.6-49.6-216 209.6 216 211.2 49.6-51.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPrevArrow;
