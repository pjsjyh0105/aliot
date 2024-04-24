export const Resetbtn = ({ fillcolor }: { fillcolor: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
    >
      <g filter="url(#filter0_d_2871_71090)">
        <rect x="3" width="48" height="48" rx="24" fill={fillcolor} />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.5759 15.7863C20.04 17.1127 17.441 21.8594 18.7686 26.3872C20.0962 30.915 24.8484 33.512 29.3843 32.1856C33.1401 31.0873 35.5679 27.6441 35.5383 23.9218C35.5354 23.5605 35.7594 23.2291 36.1062 23.1277C36.5605 22.9949 37.0268 23.3044 37.037 23.7775C37.132 28.205 34.2643 32.3214 29.8064 33.625C24.4769 35.1835 18.89 32.1325 17.3289 26.8082C15.7677 21.4839 18.8244 15.9054 24.1538 14.3469C27.6918 13.3123 31.3433 14.3091 33.8551 16.6539V15.1054C33.8551 14.6912 34.1909 14.3554 34.6051 14.3554C35.0193 14.3554 35.3551 14.6912 35.3551 15.1054V18.1366C35.3551 18.7165 34.885 19.1866 34.3051 19.1866H31.2694C30.8552 19.1866 30.5194 18.8508 30.5194 18.4366C30.5194 18.0224 30.8552 17.6866 31.2694 17.6866H32.7627C30.6285 15.7367 27.5555 14.915 24.5759 15.7863Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2871_71090"
          x="0"
          y="0"
          width="54"
          height="54"
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
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2871_71090"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2871_71090"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
