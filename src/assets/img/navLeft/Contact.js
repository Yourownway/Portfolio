import * as React from "react";

function SvgContact(props) {
  return (
    <svg
      width={33}
      height={33}
      fill="none"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      fill-opacity={props.hash === "#Contact" ? "1" : "0.5"}
      {...props}>
      <path
        d="M35.7692 5H32.0769V1.25C32.0769 0.56 31.5255 0 30.8462 0H8.69231C6.65662 0 5 1.6825 5 3.75V35C5 37.7575 7.208 40 9.92308 40H35.7692C36.4486 40 37 39.44 37 38.75V6.25C37 5.56 36.4486 5 35.7692 5ZM29.6154 31.25C29.6154 31.94 29.064 32.5 28.3846 32.5H13.6154C12.936 32.5 12.3846 31.94 12.3846 31.25V28.75C12.3846 25.3025 15.1465 22.5 18.5385 22.5H23.4615C26.856 22.5 29.6154 25.3025 29.6154 28.75V31.25ZM16.0769 15C16.0769 12.2425 18.2849 10 21 10C23.7151 10 25.9231 12.2425 25.9231 15C25.9231 17.7575 23.7151 20 21 20C18.2849 20 16.0769 17.7575 16.0769 15ZM29.6154 5H8.69231C8.01292 5 7.46154 4.44 7.46154 3.75C7.46154 3.06 8.01292 2.5 8.69231 2.5H29.6154V5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgContact;