// SPDX-FileCopyrightText: 2022 Dyne.org foundation
// SPDX-FileCopyrightText: 2022 Puria Nafisi Azizi <puria@dyne.org>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import React, { useEffect, useState } from 'react';
import '@fontsource/syne';

export const handler = ({ inputs, mechanic }) => {
  const { format, line_1, line_2, line_3, text_color, secondary, color, first_profile,
    second_profile, } = inputs;

    const [firstProfileHref, setFirstProfileHref] = useState('');
    const [secondProfileHref, setSecondProfileHref] = useState('');
  
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



  return (
    <svg
      width={1200}
      height={675}
      viewBox="0 0 1200 675"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Twitter post - 97"
        clipPath="url(#clip0_921_328)"
      >
        <rect
          width={1200}
          height={675}
          fill={color}
        />
        <path
          id="Rectangle 87"
          opacity={0.3}
          d="M1213 131L1181 131C872.825 131 623 380.825 623 689L1213 689L1213 131Z"
          fill={secondary}
        />
        <text
          id="Listen now"
          fill={text_color}
          xmlSpace="preserve"
          style={{ whiteSpace: 'pre' }}
          fontFamily="Syne"
          fontSize={32}
          fontWeight={500}
          letterSpacing="0em"
          textDecoration="underline"
        >
          <tspan
            x={59}
            y={582.4}
          >
            {'Listen now'}
          </tspan>
        </text>
        <path
          id="Vector"
          d="M184.573 441.45H180.545V437.613H184.573V441.45Z"
          fill="black"
        />
        <g id="Group">
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M977.395 344.29C970.18 341.503 962.445 340.034 954.56 340.034C937.761 340.034 921.646 346.71 909.767 358.59C897.885 370.472 891.211 386.587 891.211 403.386V472.496C891.211 489.295 897.885 505.408 909.767 517.29C921.646 529.17 937.761 535.846 954.56 535.846C971.36 535.846 987.474 529.17 999.354 517.29C1011.24 505.408 1017.91 489.295 1017.91 472.496V464.727C1023.46 466.04 1029.24 466.736 1035.19 466.736C1076.51 466.736 1110.06 433.19 1110.06 391.866C1110.06 350.544 1076.51 317 1035.19 317C1011.93 317 991.13 327.631 977.397 344.291L977.395 344.29ZM970.554 354.082C965.434 352.423 960.043 351.554 954.561 351.554C940.814 351.554 927.63 357.013 917.91 366.735C908.188 376.455 902.729 389.638 902.729 403.386V472.496C902.729 486.243 908.188 499.424 917.91 509.147C927.63 518.867 940.814 524.328 954.561 524.328C968.308 524.328 981.492 518.867 991.212 509.147C1000.93 499.424 1006.39 486.243 1006.39 472.496V460.988C1004.64 460.257 1002.93 459.463 1001.25 458.605L984.014 465.498C977.598 468.067 970.267 466.563 965.383 461.675C960.492 456.79 958.99 449.459 961.559 443.044L968.452 425.807C963.252 415.617 960.321 404.082 960.321 391.867C960.321 378.091 964.046 365.18 970.554 354.082L970.554 354.082ZM980.137 427.605C980.782 425.991 980.668 424.172 979.821 422.657C974.734 413.54 971.838 403.041 971.838 391.868C971.838 356.904 1000.22 328.519 1035.19 328.519C1070.15 328.519 1098.54 356.905 1098.54 391.868C1098.54 426.831 1070.15 455.222 1035.19 455.222C1024.01 455.222 1013.52 452.324 1004.4 447.239C1002.88 446.392 1001.06 446.276 999.452 446.922L979.734 454.807C977.597 455.665 975.154 455.164 973.525 453.535C971.895 451.903 971.394 449.462 972.252 447.326L980.137 427.607L980.137 427.605Z"
            fill="white"
          />
          <path
            id="Vector_3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1052.46 414.904V368.831C1052.46 365.651 1049.88 363.071 1046.71 363.071C1043.53 363.071 1040.95 365.651 1040.95 368.831V414.904C1040.95 418.083 1043.53 420.663 1046.71 420.663C1049.88 420.663 1052.46 418.083 1052.46 414.904Z"
            fill="white"
          />
          <path
            id="Vector_4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1075.5 403.387V380.35C1075.5 377.17 1072.92 374.59 1069.74 374.59C1066.56 374.59 1063.98 377.17 1063.98 380.35V403.387C1063.98 406.565 1066.56 409.145 1069.74 409.145C1072.92 409.145 1075.5 406.565 1075.5 403.387Z"
            fill="white"
          />
          <path
            id="Vector_5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1017.91 368.832V414.905C1017.91 418.085 1020.49 420.665 1023.67 420.665C1026.85 420.665 1029.43 418.085 1029.43 414.905V368.832C1029.43 365.653 1026.85 363.073 1023.67 363.073C1020.49 363.073 1017.91 365.653 1017.91 368.832Z"
            fill="white"
          />
          <path
            id="Vector_6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M994.875 380.349V403.386C994.875 406.564 997.455 409.144 1000.63 409.144C1003.81 409.144 1006.39 406.564 1006.39 403.386V380.349C1006.39 377.169 1003.81 374.589 1000.63 374.589C997.455 374.589 994.875 377.169 994.875 380.349Z"
            fill="white"
          />
          <path
            id="Vector_7"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M948.799 558.691V570.4H931.521C928.343 570.4 925.763 572.98 925.763 576.16C925.763 579.338 928.343 581.918 931.521 581.918H977.596C980.774 581.918 983.354 579.337 983.354 576.16C983.354 572.98 980.773 570.4 977.596 570.4H960.318V558.691C1001.22 555.996 1034.35 524.828 1040.07 484.833C1040.52 481.682 1038.33 478.762 1035.19 478.313C1032.04 477.864 1029.12 480.053 1028.67 483.198C1023.48 519.48 992.276 547.366 954.562 547.366H954.55C934.698 547.366 915.659 539.483 901.617 525.441C890.121 513.947 882.749 499.099 880.458 483.193C880.003 480.048 877.082 477.859 873.939 478.314C870.788 478.769 868.605 481.689 869.06 484.839C871.704 503.189 880.209 520.322 893.472 533.585C908.308 548.426 927.988 557.306 948.799 558.695L948.799 558.691Z"
            fill="white"
          />
        </g>
        <text
          id="The triple ai podcast"
          fill={text_color}
          xmlSpace="preserve"
          style={{ whiteSpace: 'pre' }}
          fontFamily="Syne"
          fontSize={24}
          fontWeight={500}
          letterSpacing="-0.02em"
        >
          <tspan
            x={59}
            y={111.3}
          >
            {format.toUpperCase()}
          </tspan>
        </text>
        <text
          id="Technology, Mindfulness, Decentralisation: Visions of Smart Cities"
          fill={text_color}
          xmlSpace="preserve"
          style={{ whiteSpace: 'pre' }}
          fontFamily="Syne"
          fontSize={48}
          fontWeight={500}
          letterSpacing="0em"
        >
          <tspan
            x={59}
            y={178.6}
          >
            {line_1}
          </tspan>
          <tspan
            x={59}
            y={232.6}
          >
            {line_2}
          </tspan>
          <tspan
            x={59}
            y={286.6}
          >
            {line_3}
          </tspan>
        </text>
        <g id="Group 62">
          <rect
            id="Rectangle 91"
            x={59}
            y={338}
            width={534}
            height={160}
            rx={80}
            fill="#FFEEDD"
          />
          <circle
            id="Ellipse 10"
            cx={140.875}
            cy={418.127}
            r={71.3838}
            fill="#FFEEDD"
          />
          <path
            id="Vector_8"
            d="M115.854 388.762V416.45H113.01C112.852 414.631 112.773 413.325 112.773 412.534V410.398C112.432 412.105 111.665 413.698 110.542 415.026C109.475 416.239 108.008 416.846 106.138 416.846C104.601 416.86 103.097 416.397 101.833 415.521C100.506 414.596 99.4496 413.333 98.7727 411.862C98.0024 410.217 97.6174 408.418 97.6471 406.601C97.6203 404.783 97.9909 402.98 98.7332 401.32C99.3876 399.837 100.432 398.558 101.754 397.622C103.041 396.728 104.573 396.258 106.138 396.277C108.087 396.277 109.581 396.772 110.621 397.761C111.661 398.749 112.378 400.14 112.773 401.934V388.762H115.854ZM111.272 411.803C112.273 410.447 112.773 408.713 112.773 406.601C112.773 404.362 112.273 402.582 111.272 401.261C110.272 399.94 108.811 399.281 106.889 399.283C104.967 399.283 103.459 399.962 102.367 401.32C101.274 402.679 100.728 404.439 100.728 406.601C100.705 407.891 100.975 409.169 101.517 410.339C101.997 411.382 102.756 412.272 103.709 412.91C104.646 413.529 105.747 413.853 106.869 413.84C108.817 413.84 110.29 413.161 111.288 411.803H111.272Z"
            fill="black"
          />
          <path
            id="Vector_9"
            d="M137.971 396.673L127.031 424.361H123.792L127.347 416.174L119.803 396.673H123.081L128.887 412.337L134.693 396.673H137.971Z"
            fill="black"
          />
          <path
            id="Vector_10"
            d="M155.976 398.136C157.174 399.378 157.773 401.066 157.773 403.199V416.45H154.692V403.99C154.692 400.934 153.284 399.405 150.466 399.402C149.04 399.395 147.662 399.916 146.596 400.865C145.449 401.865 144.658 403.212 144.345 404.702V416.45H141.264V396.673H144.345V402.329C144.704 400.638 145.572 399.099 146.833 397.919C147.98 396.85 149.492 396.263 151.059 396.277C153.128 396.277 154.767 396.897 155.976 398.136Z"
            fill="black"
          />
          <path
            id="Vector_11"
            d="M179.573 410.121C179.269 412.004 178.303 413.716 176.848 414.947C175.314 416.235 173.359 416.911 171.359 416.846C169.635 416.866 167.94 416.407 166.461 415.521C164.99 414.643 163.788 413.377 162.986 411.862C162.126 410.244 161.692 408.434 161.722 406.601C161.694 404.767 162.115 402.954 162.947 401.32C163.716 399.804 164.883 398.525 166.323 397.622C167.775 396.721 169.454 396.255 171.161 396.277C173.847 396.277 175.94 397.134 177.441 398.848C178.941 400.562 179.692 403.015 179.692 406.205C179.692 406.736 179.692 407.131 179.652 407.392H164.803C164.921 409.147 165.672 410.798 166.916 412.04C167.497 412.624 168.19 413.085 168.954 413.394C169.717 413.704 170.535 413.855 171.359 413.84C172.559 413.868 173.737 413.508 174.716 412.811C175.642 412.156 176.323 411.209 176.651 410.121H179.573ZM167.196 400.688C166.098 401.678 165.333 402.983 165.004 404.425H176.536C176.402 402.791 175.823 401.525 174.799 400.628C173.733 399.719 172.367 399.239 170.968 399.283C169.579 399.26 168.233 399.762 167.196 400.688Z"
            fill="black"
          />
          <path
            id="Vector_12"
            d="M184.573 416.45H180.545V412.613H184.573V416.45Z"
            fill="black"
          />
          <path
            id="Vector_13"
            d="M136.6 438.372C135.122 437.524 133.906 436.286 133.085 434.792C132.177 433.133 131.72 431.264 131.762 429.373C131.724 427.488 132.18 425.627 133.085 423.974C133.906 422.464 135.121 421.207 136.6 420.335C138.034 419.482 139.672 419.038 141.339 419.049C142.994 419.041 144.619 419.485 146.039 420.335C147.505 421.21 148.707 422.468 149.515 423.974C150.406 425.631 150.855 427.491 150.818 429.373C150.859 431.262 150.41 433.129 149.515 434.792C148.707 436.283 147.504 437.521 146.039 438.372C144.61 439.197 142.989 439.627 141.339 439.618C139.677 439.629 138.042 439.199 136.6 438.372ZM144.42 435.741C145.428 435.136 146.254 434.268 146.809 433.23C147.436 432.043 147.749 430.715 147.718 429.373C147.748 428.025 147.435 426.691 146.809 425.497C146.256 424.446 145.431 423.565 144.42 422.945C143.489 422.367 142.415 422.059 141.32 422.055C140.207 422.051 139.114 422.352 138.16 422.925C137.138 423.538 136.305 424.421 135.751 425.477C135.113 426.674 134.793 428.016 134.823 429.373C134.79 430.718 135.11 432.047 135.751 433.23C136.316 434.267 137.148 435.135 138.16 435.741C139.115 436.313 140.207 436.614 141.32 436.612C142.412 436.606 143.484 436.306 144.42 435.741Z"
            fill="black"
          />
          <path
            id="Vector_14"
            d="M159.882 420.81C160.88 419.633 162.288 419.047 164.108 419.049V422.214C162.265 422.214 160.849 422.807 159.862 423.994C158.918 425.097 158.224 426.393 157.828 427.791V437.047H154.748V419.445H157.828V424.824C158.184 423.341 158.888 421.965 159.882 420.81Z"
            fill="black"
          />
          <path
            id="Vector_15"
            d="M184.573 422.846C182.938 422.846 181.148 422.332 179.202 421.304C181.227 422.751 182.241 424.861 182.243 427.632C182.279 429.198 181.904 430.746 181.157 432.122C180.474 433.356 179.462 434.376 178.235 435.069C177.023 435.75 175.655 436.105 174.265 436.097C173.111 436.112 171.964 436.271 170.849 436.572C170.15 436.809 169.803 437.244 169.803 437.877C169.794 438.066 169.831 438.255 169.91 438.427C169.989 438.599 170.108 438.749 170.257 438.866C170.659 439.133 171.138 439.258 171.619 439.222H175.608C177.844 439.222 179.647 439.71 181.019 440.686C182.391 441.661 183.075 443.257 183.073 445.472V446.263C183.073 446.497 182.98 446.721 182.815 446.887C182.649 447.052 182.425 447.145 182.192 447.145H179.992V446.275C179.992 444.903 179.63 443.888 178.906 443.229C178.182 442.57 177.096 442.24 175.648 442.24H171.817C170.103 442.24 168.827 441.947 167.986 441.37C167.579 441.099 167.248 440.727 167.027 440.29C166.805 439.854 166.7 439.367 166.722 438.878C166.685 438.362 166.793 437.845 167.033 437.387C167.274 436.929 167.638 436.548 168.085 436.287C169.074 435.726 170.208 435.471 171.343 435.555C169.829 434.985 168.526 433.964 167.611 432.628C166.62 431.16 166.115 429.416 166.169 427.644C166.138 426.077 166.52 424.528 167.275 423.155C167.967 421.893 168.991 420.846 170.237 420.129C171.461 419.42 172.852 419.051 174.265 419.061C175.098 419.054 175.926 419.188 176.714 419.456L184.573 419.417V422.846ZM177.721 431.647C178.682 430.658 179.163 429.32 179.163 427.632C179.187 426.607 178.95 425.593 178.471 424.686C178.053 423.895 177.433 423.229 176.675 422.755C175.95 422.309 175.115 422.076 174.265 422.083C173.406 422.08 172.561 422.305 171.817 422.735C171.032 423.19 170.389 423.854 169.961 424.654C169.469 425.564 169.224 426.586 169.25 427.621C169.25 429.306 169.743 430.644 170.731 431.635C171.187 432.111 171.737 432.489 172.345 432.744C172.953 432.999 173.606 433.127 174.265 433.119C174.911 433.126 175.55 432.999 176.144 432.746C176.737 432.492 177.272 432.118 177.713 431.647H177.721Z"
            fill="black"
          />
          <path
            id="Vector_16"
            d="M179.98 446.556C179.993 447.088 179.894 447.618 179.69 448.11C179.486 448.602 179.181 449.045 178.795 449.412C177.995 450.211 176.912 450.661 175.782 450.664C174.652 450.668 173.566 450.225 172.761 449.432L165.257 441.244L165.237 441.22L165.213 441.196C164.523 440.501 163.7 439.954 162.792 439.586C161.914 439.23 160.975 439.049 160.028 439.052C159.08 439.049 158.141 439.23 157.263 439.586C156.357 439.953 155.534 440.501 154.846 441.196C154.153 441.888 153.606 442.712 153.239 443.621C152.882 444.5 152.699 445.441 152.702 446.39C152.699 447.339 152.882 448.279 153.239 449.159C153.606 450.067 154.153 450.892 154.846 451.583C155.534 452.279 156.357 452.827 157.263 453.193C158.141 453.551 159.08 453.733 160.028 453.731C160.975 453.733 161.914 453.551 162.792 453.193C163.7 452.826 164.523 452.278 165.213 451.583L165.237 451.56L166.951 449.689L164.882 447.45L163.049 449.459C162.243 450.253 161.156 450.696 160.026 450.692C158.895 450.689 157.812 450.239 157.01 449.439C156.208 448.634 155.758 447.543 155.758 446.406C155.758 445.268 156.208 444.177 157.01 443.372C157.811 442.572 158.894 442.121 160.025 442.117C161.155 442.112 162.242 442.555 163.049 443.348L170.553 451.536L170.577 451.56L170.6 451.583C171.288 452.279 172.111 452.827 173.017 453.193C173.895 453.551 174.834 453.733 175.782 453.731C176.73 453.734 177.669 453.551 178.546 453.193C179.454 452.826 180.277 452.278 180.967 451.583C181.658 450.89 182.205 450.066 182.575 449.159C182.918 448.344 183.091 447.468 183.08 446.584C183.045 445.603 179.98 445.409 179.98 446.556Z"
            fill="black"
          />
          <g id="Group 54">
            <g id="Mask group">
              <mask
                id="mask0_921_328"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x={448}
                y={355}
                width={127}
                height={127}
              >
                <circle
                  id="Ellipse 11"
                  cx={511.289}
                  cy={418.704}
                  r={63.218}
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_921_328)">
                <rect
                  id="Fyu9awN9_400x400 copy 3"
                  x={413.848}
                  y={335.523}
                  width={194.882}
                  height={166.363}
                  fill="url(#pattern0)"
                />
                <rect
                  id="05EFH8C__400x400 copy 3"
                  x={424.305}
                  y={329.819}
                  width={173.018}
                  height={170.166}
                  fill="url(#pattern1)"
                />
              </g>
            </g>
            <g id="Mask group_2">
              <mask
                id="mask1_921_328"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x={346}
                y={355}
                width={128}
                height={127}
              >
                <circle
                  id="Ellipse 11_2"
                  cx={409.868}
                  cy={418.704}
                  r={63.218}
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask1_921_328)">
                <rect
                  id="Fyu9awN9_400x400 copy 3_2"
                  x={312.427}
                  y={335.523}
                  width={194.882}
                  height={166.363}
                  fill="url(#pattern2)"
                />
              </g>
            </g>
            <g id="Group 37">
              <g id="Group 35">
                <circle
                  id="Ellipse 10_2"
                  cx={305.12}
                  cy={418.874}
                  r={63.388}
                  fill="white"
                />
              </g>
              <rect
                id="final+logo+b&#38;w copy 2"
                x={245.098}
                y={358.852}
                width={119.484}
                height={120.044}
                fill="url(#pattern3)"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_921_328"
            transform="translate(0.0731707) scale(0.00213415 0.0025)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#second_image"
            transform="translate(0 -0.0083799) scale(0.00250627 0.00254827)"
          />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#first_image"
            transform="translate(0.0731707) scale(0.00213415 0.0025)"
          />
        </pattern>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image2_921_328"
            transform="translate(-0.00134477) scale(0.00066846 0.000665336)"
          />
        </pattern>
        <clipPath id="clip0_921_328">
          <rect
            width={1200}
            height={675}
            fill="white"
          />
        </clipPath>
        <image
          id="first_image"
          data-name="Fyu9awN9_400x400 copy.png"
          width={400}
          height={400}
          xlinkHref={firstProfileHref}
        />
        <image
          id="second_image"
          data-name="05EFH8C__400x400 copy(edit).png"
          width={399}
          height={399}
          xlinkHref={secondProfileHref}
        />
        <image
          id="image2_921_328"
          data-name="final+logo+b&#38;w copy.png"
          width={1500}
          height={1503}
          xlinkHref=""
        />
      </defs>
    </svg>
  );
};

export const inputs = {
  format: {
    type: 'text',
    default: 'THE TRIPLE AI PODCAST',
  },
  line_1: {
    type: 'text',
    default: 'Technology, Mindfulness,',
  },
  line_2: {
    type: 'text',
    default: 'Decentralization:',
  },
  line_3: {
    type: 'text',
    default: 'Visions of Smart Cities',
  },
  first_profile: {
    type: 'image',
  },
  second_profile: {
    type: 'image',
  },
  color: {
    type: 'color',
    model: 'hex',
    default: '#FFEEDD',
    editable: false,
  },
  text_color: {
    type: 'color',
    model: 'hex',
    default: '#000000',
    editable: false,
  },
  secondary: {
    type: 'color',
    model: 'hex',
    default: '#F6D6B0',
    editable: false,
  },
};

export const presets = {
  ['Open source']: {
    color: '#FFEEDD',
    secondary: '#F6D6B0',
    text_color: '#000000',
  },
  Cybersecurity: {
    color: '#D6D6D6',
    secondary: '#F0F0F0',
    text_color: '#000000',
  },
  Art: {
    color: '#8980F5',
    secondary: '#FDF5EB',
    text_color: '#FFFFFF',
  },
  Crypto: {
    color: '#000000',
    secondary: '#DBDDE0',
    text_color: '#FFFFFF',
  },
  ['Circular economy']: {
    color: '#21897E',
    secondary: '#2E9E91',
    text_color: '#FFFFFF',
  },
};

export const settings = {
  engine: require('@mechanic-design/engine-react'),
  showMultipleExports: true,
  hideFeedback: true,
  hideScaleToFit: true,
  hideAutoRefresh: true,
  hideGenerate: true,
};
