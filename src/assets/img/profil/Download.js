import * as React from "react";

function SvgDownload(props) {
  return (
    <svg
      width={48}
      height={44}
      viewBox="-10 0 70 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M28 15.672V0H3C1.337 0 0 1.233 0 2.766v53.468C0 57.767 1.337 59 3 59h42c1.663 0 3-1.233 3-2.766V18.437H31c-1.65 0-3-1.244-3-2.765zm9.556 24.356L25.504 51.056c-.832.761-2.174.761-3.005 0L10.446 40.028c-1.268-1.16-.378-3.153 1.406-3.153H20v-9.219c0-1.018.895-1.843 2-1.843h4c1.105 0 2 .825 2 1.843v9.219h8.148c1.784 0 2.674 1.992 1.408 3.153zM47.125 12.1L34.888.807A3.132 3.132 0 0032.763 0H32v14.75h16v-.703c0-.726-.313-1.429-.875-1.947z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownload;
