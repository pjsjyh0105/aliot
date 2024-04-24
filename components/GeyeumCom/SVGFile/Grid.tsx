export const Gridbtn = ({ fillcolor }: { fillcolor: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
    >
      <g filter="url(#filter0_d_2871_71092)">
        <rect x="4" width="48" height="48" rx="24" fill={fillcolor} />
        <rect
          x="19"
          y="15"
          width="18"
          height="18"
          rx="1"
          stroke="white"
          stroke-width="1.5"
        />
        <path d="M25 15V33" stroke="white" stroke-width="1.2" />
        <path d="M31 15V33" stroke="white" stroke-width="1.2" />
        <path d="M37 21L19 21" stroke="white" stroke-width="1.2" />
        <path d="M37 27L19 27" stroke="white" stroke-width="1.2" />
      </g>
      <defs>
        <filter
          id="filter0_d_2871_71092"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2871_71092"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2871_71092"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
