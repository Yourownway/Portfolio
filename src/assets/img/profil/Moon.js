import * as React from "react";

function SvgMoon(props) {
  return (
    <svg
      width={75}
      height={73}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M37 72.274c20.433 0 36.998-16.179 36.998-36.136C73.998 16.181 57.433.002 37 .002S0 16.181 0 36.138c0 19.957 16.565 36.136 37 36.136z"
        fill="url(#moon_svg__paint0_linear)"
      />
      <path
        d="M37.002 0c-2.267 0-4.482.21-6.637.59 17.266 3.057 30.363 17.802 30.363 35.546a35.27 35.27 0 01-3.866 16.078c-1.252-5.505-6.44-9.562-12.532-9.202-5.92.349-10.793 4.994-11.28 10.768a11.564 11.564 0 002.364 8.064c2.698 3.516.805 8.59-3.585 9.548-.484.106-.972.202-1.463.29 2.154.38 4.37.59 6.636.59 20.434 0 37-16.179 37-36.136C74.001 16.18 57.434 0 37.001 0z"
        fill="url(#moon_svg__paint1_linear)"
      />
      <path
        d="M18.29 42.99c4.323 0 7.827-3.423 7.827-7.645 0-4.222-3.504-7.645-7.827-7.645s-7.827 3.423-7.827 7.645c0 4.222 3.504 7.645 7.827 7.645z"
        fill="url(#moon_svg__paint2_linear)"
      />
      <path
        d="M42.128 27.7c4.323 0 7.827-3.423 7.827-7.645 0-4.222-3.504-7.644-7.827-7.644s-7.827 3.422-7.827 7.644c0 4.222 3.504 7.645 7.827 7.645z"
        fill="url(#moon_svg__paint3_linear)"
      />
      <defs>
        <linearGradient
          id="moon_svg__paint0_linear"
          x1={0}
          y1={36.138}
          x2={73.999}
          y2={36.138}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAF6FF" />
          <stop offset={0.521} stopColor="#D8ECFE" />
          <stop offset={1} stopColor="#B3DAFE" />
        </linearGradient>
        <linearGradient
          id="moon_svg__paint1_linear"
          x1={-25.763}
          y1={36.136}
          x2={50.698}
          y2={36.136}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAF6FF" />
          <stop offset={0.521} stopColor="#D8ECFE" />
          <stop offset={1} stopColor="#B3DAFE" />
        </linearGradient>
        <linearGradient
          id="moon_svg__paint2_linear"
          x1={-25.766}
          y1={35.345}
          x2={50.695}
          y2={35.345}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAF6FF" />
          <stop offset={0.521} stopColor="#D8ECFE" />
          <stop offset={1} stopColor="#B3DAFE" />
        </linearGradient>
        <linearGradient
          id="moon_svg__paint3_linear"
          x1={-25.767}
          y1={20.055}
          x2={50.694}
          y2={20.055}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAF6FF" />
          <stop offset={0.521} stopColor="#D8ECFE" />
          <stop offset={1} stopColor="#B3DAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgMoon;
