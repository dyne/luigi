// SPDX-FileCopyrightText: 2022 Dyne.org foundation
// SPDX-FileCopyrightText: 2022 Puria Nafisi Azizi <puria@dyne.org>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import React, { useEffect, useState } from "react";
import "@fontsource-variable/syne";
import { COLOR_PRESETS, SETTINGS } from "../commons";

export const handler = ({ inputs, mechanic }) => {
  const {
    secondary,
    format,
    line_1,
    line_2,
    line_3,
    text_color,
    location,
    date,
    first_profile,
    second_profile,
    color,
    accent,
    interval,
  } = inputs;

  const [firstProfileHref, setFirstProfileHref] = useState("");
  const [secondProfileHref, setSecondProfileHref] = useState("");

  const loadImageFromFileObject = (fileObject, stateSetter) => {
    const reader = new FileReader();
    reader.onload = () => {
      stateSetter(reader.result);
    };
    reader.readAsDataURL(fileObject);
  };

  useEffect(() => {
    if (first_profile)
      loadImageFromFileObject(first_profile, setFirstProfileHref);
    if (second_profile)
      loadImageFromFileObject(second_profile, setSecondProfileHref);
    if (
      (firstProfileHref || secondProfileHref) &&
      (!first_profile || firstProfileHref) &&
      (!second_profile || secondProfileHref)
    )
      mechanic.done();
  }, [firstProfileHref, first_profile, secondProfileHref, second_profile]);

  //   useEffect(() => {
  //     if(first_profile && second_profile) mechanic.done();
  //   }, [first_profile, second_profile, firtsProfileHref, secondProfileHref]);

  return (
    <svg
      width="1200"
      height="675"
      viewBox="0 0 1200 675"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Twitter post - 64" clipPath="url(#clip0_876_847)">
        <rect width="1200" height="675" fill={color} />
        <path
          id="Rectangle 87"
          opacity="0.3"
          d="M642 0L642 32.0001C642 340.175 891.825 590 1200 590V590L1200 -7.76016e-05L642 0Z"
          fill={secondary}
        />
        <path
          id="Rectangle 87_2"
          d="M1200 565H392C331.249 565 282 614.249 282 675V675H1200V565Z"
          fill={accent}
        />
        <text
          id="date"
          fill={color}
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Syne"
          fontSize="40"
          letterSpacing="-0.02em"
        >
          <tspan x="362.312" y="639">
            {location} / {date}
          </tspan>
        </text>
        <g>
          <g id="Group 2">
            <path
              id="Vector"
              d="M790.843 621.278H780.039C779.854 621.278 779.702 621.43 779.702 621.616V623.642C779.702 623.827 779.854 623.979 780.039 623.979H790.843C791.029 623.979 791.181 623.827 791.181 623.642V621.616C791.181 621.43 791.029 621.278 790.843 621.278ZM785.188 627.018H780.039C779.854 627.018 779.702 627.17 779.702 627.355V629.381C779.702 629.567 779.854 629.719 780.039 629.719H785.188C785.374 629.719 785.526 629.567 785.526 629.381V627.355C785.526 627.17 785.374 627.018 785.188 627.018ZM771.105 617.501H769.278C769.016 617.501 768.805 617.712 768.805 617.974V628.44C768.805 628.592 768.877 628.731 768.999 628.82L775.283 633.403C775.494 633.555 775.79 633.513 775.942 633.302L777.026 631.821V631.816C777.178 631.605 777.132 631.31 776.921 631.158L771.573 627.292V617.974C771.578 617.712 771.362 617.501 771.105 617.501V617.501Z"
              fill={color}
            />
            <path
              id="Vector_2"
              d="M784.927 632.331H782.487C782.251 632.331 782.027 632.454 781.901 632.656C781.365 633.504 780.74 634.289 780.023 635.007C778.786 636.243 777.347 637.214 775.747 637.889C774.089 638.59 772.329 638.944 770.514 638.944C768.695 638.944 766.935 638.59 765.281 637.889C763.681 637.214 762.242 636.243 761.006 635.007C759.769 633.77 758.799 632.331 758.123 630.732C757.423 629.077 757.068 627.317 757.068 625.499C757.068 623.68 757.423 621.924 758.123 620.265C758.799 618.666 759.769 617.227 761.006 615.99C762.242 614.754 763.681 613.783 765.281 613.108C766.935 612.407 768.699 612.053 770.514 612.053C772.333 612.053 774.093 612.407 775.747 613.108C777.347 613.783 778.786 614.754 780.023 615.99C780.74 616.708 781.365 617.493 781.901 618.341C782.027 618.543 782.251 618.666 782.487 618.666H784.927C785.218 618.666 785.403 618.362 785.273 618.105C782.521 612.631 776.942 609.073 770.713 609.001C761.592 608.887 754.017 616.353 754 625.465C753.983 634.593 761.381 642 770.51 642C776.819 642 782.491 638.43 785.273 632.893C785.403 632.635 785.214 632.331 784.927 632.331V632.331Z"
              fill={color}
            />
          </g>
          <text
            id="21:30 - 22:30 GMT +2"
            fill={color}
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Syne"
            fontSize="40"
            letterSpacing="-0.02em"
          >
            <tspan x="807" y="635">
              {" "}
              {interval}{" "}
            </tspan>
          </text>
        </g>
        <path
          id="Vector_3"
          d="M999.923 95C993.949 95 988.947 98.2654 985.765 102.417C982.584 106.564 980.822 111.657 980.586 116.814C980.581 116.951 980.586 116.966 980.586 117.07H960.731C957.84 117.203 955.329 119.956 955.462 122.847C955.596 125.738 958.353 128.24 961.249 128.107H1033.07C1036.02 128.107 1037.91 128.974 1039.2 130.264C1040.49 131.555 1041.36 133.446 1041.36 136.386V221.902C1041.36 224.842 1040.49 226.65 1039.2 227.935C1037.91 229.221 1036.02 230.176 1033.07 230.176H991.63C988.71 230.132 986.027 232.781 986.027 235.692C986.027 238.603 988.71 241.253 991.63 241.208H1033.07C1038.45 241.208 1043.43 239.307 1046.97 235.776C1050.5 232.245 1052.41 227.26 1052.41 221.897V219.139H1067.26L1099.02 240.258C1100.68 241.381 1102.95 241.504 1104.72 240.573C1106.48 239.637 1107.66 237.687 1107.66 235.692V219.139C1107.92 219.139 1108.18 219.099 1108.43 219.055C1113.3 218.351 1117.85 216.647 1121.38 213.366C1124.9 210.076 1126.99 205.22 1126.99 199.827V174.999C1127.06 171.867 1123.98 169.055 1120.86 169.395C1118.15 169.695 1115.89 172.271 1115.94 174.999V199.827C1115.94 202.753 1115.2 204.112 1113.87 205.343C1112.54 206.575 1110.23 207.614 1106.87 208.101H1102.13C1099.24 208.101 1096.6 210.732 1096.6 213.618V225.256L1072.09 208.963C1071.16 208.377 1070.07 208.077 1068.98 208.101H1052.4V136.381C1052.4 131.018 1050.5 125.95 1046.97 122.418C1043.44 118.887 1038.45 117.075 1033.07 117.075H991.635C991.823 114.282 992.992 111.204 994.571 109.145C996.198 107.017 997.876 106.042 999.923 106.042H1107.66C1110.6 106.042 1112.5 106.909 1113.79 108.199C1115.08 109.485 1115.95 111.376 1115.95 114.321V128.112C1115.91 131.028 1118.55 133.707 1121.47 133.707C1124.39 133.707 1127.04 131.028 1127 128.112V114.321C1127 108.948 1125.1 103.885 1121.56 100.359C1118.03 96.8322 1113.03 95.0148 1107.66 95.0148H999.923V95ZM925.337 117.07C919.955 117.07 914.973 118.882 911.436 122.413C907.904 125.95 906 131.018 906 136.381V221.897C906 227.26 907.904 232.245 911.436 235.776C914.968 239.307 919.955 241.208 925.337 241.208H933.624V260.52C933.629 262.603 934.927 264.628 936.811 265.504C938.695 266.381 941.083 266.076 942.686 264.741L973.073 239.913C975.312 238.061 975.663 234.348 973.808 232.112C971.953 229.876 968.234 229.526 965.994 231.378L944.669 248.793V235.687C944.669 232.801 942.035 230.171 939.144 230.171H925.332C922.382 230.171 920.493 229.216 919.2 227.93C917.913 226.645 917.04 224.837 917.04 221.897V136.381C917.04 133.441 917.908 131.55 919.2 130.259C920.488 128.974 922.377 128.102 925.332 128.102H939.144C942.065 128.141 944.748 125.497 944.748 122.586C944.748 119.675 942.065 117.025 939.144 117.07H925.332H925.337ZM1120.87 144.567C1118.15 144.867 1115.89 147.443 1115.94 150.172V152.93C1115.91 155.845 1118.55 158.525 1121.47 158.525C1124.39 158.525 1127.03 155.841 1126.99 152.93V150.172C1127.06 147.039 1123.98 144.227 1120.86 144.567H1120.87Z"
          fill="white"
        />
        <text
          id="The triple ai podcast"
          fill={text_color}
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Syne"
          fontSize="24"
          fontWeight="500"
          letterSpacing="-0.02em"
        >
          <tspan x="59" y="111.3">
            {format.toUpperCase()}
          </tspan>
        </text>
        <rect
          id="Rectangle 91"
          x="59"
          y="338"
          width="333"
          height="183"
          rx="91.5"
          fill={accent}
        />
        <g id="Mask group">
          <mask
            id="mask0_876_847"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="219"
            y="358"
            width="145"
            height="145"
          >
            <circle
              id="Ellipse 11"
              cx="291.306"
              cy="430.306"
              r="72.3056"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_876_847)">
            <rect
              id="Fyu9awN9_400x400 copy 3"
              x="179.857"
              y="335.167"
              width="222.897"
              height="190.278"
              fill="url(#pattern0)"
            />
            <rect
              id="05EFH8C__400x400 copy 3"
              x="191.817"
              y="328.643"
              width="197.889"
              height="194.627"
              fill="url(#pattern1)"
            />
          </g>
        </g>
        <g id="Mask group_2">
          <mask
            id="mask1_876_847"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="88"
            y="358"
            width="145"
            height="145"
          >
            <circle
              id="Ellipse 11_2"
              cx="160.306"
              cy="430.306"
              r="72.3056"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask1_876_847)">
            <rect
              id="Fyu9awN9_400x400 copy 3_2"
              x="48.8572"
              y="335.167"
              width="222.897"
              height="190.278"
              fill="url(#pattern2)"
            />
          </g>
        </g>
        <text
          id="Technology, Mindfulness, Decentralization: Visions of Smart Cities"
          fill={text_color}
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Syne"
          fontSize="48"
          fontWeight="500"
          letterSpacing="0em"
        >
          <tspan x="59" y="178.6">
            {line_1}{" "}
          </tspan>
          <tspan x="59" y="232.6">
            {line_2}
          </tspan>
          <tspan x="59" y="286.6">
            {line_3}
          </tspan>
        </text>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_876_847"
            transform="translate(0.0731707) scale(0.00213415 0.0025)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#first_image"
            transform="translate(0 -0.00837988) scale(0.00250627 0.00254827)"
          />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#second_image"
            transform="translate(0.0731707) scale(0.00213415 0.0025)"
          />
        </pattern>
        <clipPath id="clip0_876_847">
          <rect width="1200" height="675" fill="white" />
        </clipPath>
        <image
          id="first_image"
          width="400"
          height="400"
          href={firstProfileHref}
        />
        <image
          id="second_image"
          width="399"
          height="399"
          href={secondProfileHref}
        />
      </defs>
      <text>
        <tspan></tspan>
      </text>
    </svg>
  );
};

export const inputs = {
  format: {
    type: "text",
    default: "THE TRIPLE AI PODCAST",
  },
  line_1: {
    type: "text",
    default: "Technology, Mindfulness,",
  },
  line_2: {
    type: "text",
    default: "Decentralization:",
  },
  line_3: {
    type: "text",
    default: "Visions of Smart Cities",
  },
  location: {
    type: "text",
    default: "Twitterspace",
  },
  date: {
    type: "text",
    default: new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    }),
  },
  interval: {
    type: "text",
    default: "21:30 - 22:30 GMT +2",
  },
  first_profile: {
    type: "image",
  },
  second_profile: {
    type: "image",
  },
  color: {
    type: "color",
    model: "hex",
    default: "#FFEEDD",
    editable: false,
  },
  text_color: {
    type: "color",
    model: "hex",
    default: "#000000",
    editable: false,
  },
  secondary: {
    type: "color",
    model: "hex",
    default: "#F6D6B0",
    editable: false,
  },
  accent: {
    type: "color",
    model: "hex",
    default: "#FFEEDD",
    editable: false,
  },
};

export const presets = COLOR_PRESETS;
export const settings = SETTINGS;
export const ExtraUI = (props) => {
  const { values, onChange } = props;

  return <div>(c) Dyne.org made by pna</div>;
};
