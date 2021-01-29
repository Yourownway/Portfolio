import * as React from "react";

function SvgProjects(props) {
  return (
    <svg
      width={33}
      height={33}
      viewBox="0 0 44 44"
      fill="none"
      fill-opacity={props.hash === "#Projects" ? "1" : "0.5"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M39.875 11h-16.5L18.68 6.305a2.75 2.75 0 00-1.945-.805H4.125A4.125 4.125 0 000 9.625v24.75A4.125 4.125 0 004.125 38.5h35.75A4.125 4.125 0 0044 34.375v-19.25A4.125 4.125 0 0039.875 11zm0 23.375H4.125V9.625h12.042l4.694 4.695a2.75 2.75 0 001.945.805h17.069v19.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgProjects;
