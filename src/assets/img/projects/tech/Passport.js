import * as React from "react";

function SvgPassport(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <path d="M67.5 67.5h365v365h-365z" />
      <path
        d="M250 102c-65.4 0-118.4 53-118.4 118.4h59.2c0-32.7 26.5-59.2 59.2-59.2V102z"
        fill="#d6ff00"
      />
      <path
        d="M368.4 220.4c0-65.4-53-118.4-118.4-118.4v59.2c32.7 0 59.2 26.5 59.2 59.2h59.2z"
        fill="#34e27a"
      />
      <path
        d="M250 338.8c65.4 0 118.4-53 118.4-118.4h-59.2c0 32.7-26.5 59.2-59.2 59.2v59.2z"
        fill="#00b9f1"
      />
      <path fill="#fff" d="M190.8 338.8V220.4h-59.2V398H250v-59.2z" />
    </svg>
  );
}

export default SvgPassport;
