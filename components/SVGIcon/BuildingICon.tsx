export const FileIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          d="M23.8272 12.9665L22.3971 15.2335C22.2139 15.5239 21.8946 15.7 21.5513 15.7H12C11.4477 15.7 11 16.1477 11 16.7V27.5C11 28.0523 11.4477 28.5 12 28.5H28C28.5523 28.5 29 28.0523 29 27.5V13.5C29 12.9477 28.5523 12.5 28 12.5H24.673C24.3297 12.5 24.0104 12.6761 23.8272 12.9665Z"
          stroke="#717171"
          strokeWidth="1.8"
        />
        <path
          d="M29 21V28C29 28.2761 28.7761 28.5 28.5 28.5H11.6099C11.3366 28.5 11.114 28.2806 11.11 28.0073L11.0074 21.0073C11.0033 20.7283 11.2284 20.5 11.5074 20.5H28.5C28.7761 20.5 29 20.7239 29 21Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
          stroke={selected == value ? "#7E73FE" : "#717171"}
        />
      </svg>
    </>
  );
};
export const UploadIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7313 9C14.3293 9 11.6157 11.7068 11.1286 15.1119C8.70936 15.7911 7 18.1632 7 20.8823C7 20.9607 7.00141 21.0389 7.0042 21.1167C7.00141 21.189 7 21.2615 7 21.3343C7 24.3965 9.48241 26.8789 12.5446 26.8789H17.7083V25.0789H12.5446C10.4765 25.0789 8.8 23.4024 8.8 21.3343C8.8 21.2756 8.80134 21.2173 8.804 21.1594L8.8058 21.1199L8.80415 21.0804C8.80139 21.0148 8.8 20.9488 8.8 20.8823C8.8 18.6924 10.2919 16.9905 12.0802 16.7488L12.8202 16.6488L12.8585 15.9031C13.0083 12.9867 15.1987 10.8 17.7313 10.8C19.2318 10.8 20.5954 11.5543 21.5043 12.7817L21.9923 13.4406L22.6937 13.016C23.1764 12.7238 23.7222 12.5615 24.2998 12.5615C26.0149 12.5615 27.5588 14.0459 27.7254 16.126L27.7766 16.7655L28.3979 16.9257C29.9531 17.3266 31.195 18.8911 31.195 20.8532C31.195 20.9196 31.1935 20.9855 31.1907 21.0509L31.1889 21.0937L31.1911 21.1364C31.1945 21.2019 31.1962 21.2679 31.1962 21.3343C31.1962 23.4024 29.5197 25.0789 27.4516 25.0789H22.2859V26.8789H27.4516C30.5138 26.8789 32.9962 24.3965 32.9962 21.3343C32.9962 21.2512 32.9944 21.1685 32.9907 21.0862C32.9936 21.0089 32.995 20.9312 32.995 20.8532C32.995 18.3772 31.5494 16.2025 29.4404 15.3748C28.9746 12.8074 26.9125 10.7615 24.2998 10.7615C23.653 10.7615 23.0343 10.8898 22.4643 11.1224C21.265 9.82264 19.5954 9 17.7313 9Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
        <path
          d="M20 29L20 20"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M18 21L20 19L22 21"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const EnvIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.9347 7.68756C20.5015 7.43748 19.9679 7.43748 19.5347 7.68756L9.7 13.3656C9.26684 13.6157 9 14.0779 9 14.5781V25.9342C9 26.4344 9.26684 26.8965 9.7 27.1466L16.9801 31.3498V29.2713L10.8 25.7032V14.809L20.2347 9.36188L29.6694 14.809V23.5107H31.4694V14.5781C31.4694 14.0779 31.2026 13.6157 30.7694 13.3656L20.9347 7.68756Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0332 15.6184L19.334 20.7855V28.9349H21.134V20.7855L30.4349 15.6184L29.5607 14.0449L20.234 19.2264L10.9074 14.0449L10.0332 15.6184Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.4885 25.8492L20.3612 30.789C20.3443 30.7993 20.3309 30.8143 20.3225 30.8322L19.4236 32.7583C19.3934 32.823 19.4387 32.8975 19.51 32.9005L21.6337 32.9895C21.6535 32.9903 21.673 32.9853 21.6899 32.975L29.8438 28.019L28.4885 25.8492ZM30.8293 27.4199L31.501 27.0117C32.1046 26.6448 32.2966 25.858 31.9297 25.2544C31.5628 24.6507 30.776 24.4588 30.1723 24.8257L29.474 25.2501L30.8293 27.4199Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
      </svg>
    </>
  );
};

export const BuildingIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.92383 11.5C8.92383 10.9477 9.37154 10.5 9.92383 10.5H21.3284C21.8806 10.5 22.3284 10.9477 22.3284 11.5V31.001H17.5964V26.7698C17.5964 26.4936 17.3726 26.2698 17.0964 26.2698H14.1539C13.8778 26.2698 13.6539 26.4936 13.6539 26.7698V31.001H8.92383V11.5ZM10.4992 14.1548C10.4992 13.8786 10.723 13.6548 10.9992 13.6548H12.3647C12.6408 13.6548 12.8647 13.8786 12.8647 14.1548V15.5203C12.8647 15.7964 12.6408 16.0203 12.3647 16.0203H10.9992C10.723 16.0203 10.4992 15.7964 10.4992 15.5203V14.1548ZM10.9992 17.5952C10.723 17.5952 10.4992 17.819 10.4992 18.0952V19.4607C10.4992 19.7368 10.723 19.9607 10.9992 19.9607H12.3647C12.6408 19.9607 12.8647 19.7368 12.8647 19.4607V18.0952C12.8647 17.819 12.6408 17.5952 12.3647 17.5952H10.9992ZM10.4992 22.0396C10.4992 21.7635 10.723 21.5396 10.9992 21.5396H12.3647C12.6408 21.5396 12.8647 21.7635 12.8647 22.0396V23.4052C12.8647 23.6813 12.6408 23.9052 12.3647 23.9052H10.9992C10.723 23.9052 10.4992 23.6813 10.4992 23.4052V22.0396ZM14.9437 13.6548C14.6675 13.6548 14.4437 13.8786 14.4437 14.1548V15.5203C14.4437 15.7964 14.6675 16.0203 14.9437 16.0203H16.3092C16.5853 16.0203 16.8092 15.7964 16.8092 15.5203V14.1548C16.8092 13.8786 16.5853 13.6548 16.3092 13.6548H14.9437ZM14.4437 18.0952C14.4437 17.819 14.6675 17.5952 14.9437 17.5952H16.3092C16.5853 17.5952 16.8092 17.819 16.8092 18.0952V19.4607C16.8092 19.7368 16.5853 19.9607 16.3092 19.9607H14.9437C14.6675 19.9607 14.4437 19.7368 14.4437 19.4607V18.0952ZM14.9437 21.5396C14.6675 21.5396 14.4437 21.7635 14.4437 22.0396V23.4052C14.4437 23.6813 14.6675 23.9052 14.9437 23.9052H16.3092C16.5853 23.9052 16.8092 23.6813 16.8092 23.4052V22.0396C16.8092 21.7635 16.5853 21.5396 16.3092 21.5396H14.9437ZM18.8861 13.6548C18.6099 13.6548 18.3861 13.8786 18.3861 14.1548V15.5203C18.3861 15.7964 18.6099 16.0203 18.8861 16.0203H20.2516C20.5277 16.0203 20.7516 15.7964 20.7516 15.5203V14.1548C20.7516 13.8786 20.5277 13.6548 20.2516 13.6548H18.8861ZM18.3861 18.0952C18.3861 17.819 18.6099 17.5952 18.8861 17.5952H20.2516C20.5277 17.5952 20.7516 17.819 20.7516 18.0952V19.4607C20.7516 19.7368 20.5277 19.9607 20.2516 19.9607H18.8861C18.6099 19.9607 18.3861 19.7368 18.3861 19.4607V18.0952ZM18.8861 21.5396C18.6099 21.5396 18.3861 21.7635 18.3861 22.0396V23.4052C18.3861 23.6813 18.6099 23.9052 18.8861 23.9052H20.2516C20.5277 23.9052 20.7516 23.6813 20.7516 23.4052V22.0396C20.7516 21.7635 20.5277 21.5396 20.2516 21.5396H18.8861Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.9999 17.5952H22.3264V30.9997H24.6915V28.3451C24.6915 28.069 24.9153 27.8451 25.1915 27.8451H27.3455C27.6216 27.8451 27.8455 28.069 27.8455 28.3451V30.9997H30.9999V18.5952C30.9999 18.0429 30.5522 17.5952 29.9999 17.5952ZM29.4216 19.6706C29.4216 19.3944 29.1977 19.1706 28.9216 19.1706L23.6136 19.1706C23.3374 19.1706 23.1136 19.3944 23.1136 19.6706L23.1136 20.2476C23.1136 20.5237 23.3374 20.7476 23.6136 20.7476H28.9216C29.1977 20.7476 29.4216 20.5237 29.4216 20.2476V19.6706ZM29.4216 22.8253C29.4216 22.5492 29.1977 22.3253 28.9216 22.3253H23.6136C23.3374 22.3253 23.1136 22.5492 23.1136 22.8253L23.1136 23.4023C23.1136 23.6785 23.3374 23.9023 23.6136 23.9023L28.9216 23.9023C29.1977 23.9023 29.4216 23.6785 29.4216 23.4023V22.8253Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
      </svg>
    </>
  );
};
export const AssetIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          d="M20.25 8.64434C20.4047 8.55502 20.5953 8.55502 20.75 8.64434L30.6423 14.3557C30.797 14.445 30.8923 14.61 30.8923 14.7887V26.2113C30.8923 26.39 30.797 26.555 30.6423 26.6443L20.75 32.3557C20.5953 32.445 20.4047 32.445 20.25 32.3557L10.3577 26.6443C10.203 26.555 10.1077 26.39 10.1077 26.2113V14.7887C10.1077 14.61 10.203 14.445 10.3577 14.3557L20.25 8.64434Z"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.8"
        />
        <path
          d="M20.25 13.6443C20.4047 13.555 20.5953 13.555 20.75 13.6443L26.3122 16.8557C26.4669 16.945 26.5622 17.11 26.5622 17.2887V23.7113C26.5622 23.89 26.4669 24.055 26.3122 24.1443L20.75 27.3557C20.5953 27.445 20.4047 27.445 20.25 27.3557L14.6878 24.1443C14.5331 24.055 14.4378 23.89 14.4378 23.7113V17.2887C14.4378 17.11 14.5331 16.945 14.6878 16.8557L20.25 13.6443Z"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.8"
        />
        <path
          d="M10.5 15.5L20.5 20.8333M20.5 20.8333L30.5 15.5M20.5 20.8333V31.5"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.8"
        />
      </svg>
    </>
  );
};
export const AssetSettingIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          d="M20.25 8.14434C20.4047 8.05502 20.5953 8.05502 20.75 8.14434L30.6423 13.8557C30.797 13.945 30.8923 14.11 30.8923 14.2887V25.7113C30.8923 25.89 30.797 26.055 30.6423 26.1443L20.75 31.8557C20.5953 31.945 20.4047 31.945 20.25 31.8557L10.3577 26.1443C10.203 26.055 10.1077 25.89 10.1077 25.7113V14.2887C10.1077 14.11 10.203 13.945 10.3577 13.8557L20.25 8.14434Z"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.8"
        />
        <path
          d="M20.25 13.1443C20.4047 13.055 20.5953 13.055 20.75 13.1443L26.3122 16.3557C26.4669 16.445 26.5622 16.61 26.5622 16.7887V23.2113C26.5622 23.39 26.4669 23.555 26.3122 23.6443L20.75 26.8557C20.5953 26.945 20.4047 26.945 20.25 26.8557L14.6878 23.6443C14.5331 23.555 14.4378 23.39 14.4378 23.2113V16.7887C14.4378 16.61 14.5331 16.445 14.6878 16.3557L20.25 13.1443Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
          fillOpacity="0.25"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.8"
        />
        <path
          d="M10.5 15L20.5 20.3333M20.5 20.3333L30.5 15M20.5 20.3333V31"
          stroke="#717171"
          strokeWidth="1.8"
        />
        <g filter="url(#filter0_d_2569_21283)">
          <circle
            cx="28"
            cy="14.5"
            r="5.5"
            fill={selected == value ? "#7E73FE" : "#717171"}
          />
        </g>
        <path
          d="M25.5 12.9375C25.6786 12.625 26.4286 12 28 12C29.5714 12 30.3214 12.625 30.5 12.9375M25.5 12.9375C25.5595 13.25 26.1429 13.875 28 13.875C29.8571 13.875 30.4405 13.25 30.5 12.9375M25.5 12.9375V14.6562M30.5 12.9375V14.6562M25.5 14.6562V16.19C25.5 16.3094 25.5415 16.427 25.6398 16.4948C25.9541 16.7117 26.6929 17 28 17C29.3071 17 30.0459 16.7117 30.3602 16.4948C30.4585 16.427 30.5 16.3094 30.5 16.19V14.6562M25.5 14.6562C25.6786 14.9167 26.4286 15.4375 28 15.4375C29.5714 15.4375 30.3214 14.9167 30.5 14.6562"
          stroke="white"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_d_2569_21283"
            x="22"
            y="9"
            width="12"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="0.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2569_21283"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2569_21283"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
export const CameraScenarioIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          d="M10 14V11H13.8889M26.6667 11H30V14"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 27L30 30L26.1111 30M13.3333 30L10 30L10 27"
          stroke={selected == value ? "#7E73FE" : "#717171"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="13"
          y="15"
          width="14"
          height="11"
          rx="1"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
      </svg>
    </>
  );
};
export const QRIcon = ({ selected, value }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          fill={selected == value ? "black" : ""}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8 17.7V12.3H17.2V17.7H11.8ZM10 11.5C10 10.9477 10.4477 10.5 11 10.5H18C18.5523 10.5 19 10.9477 19 11.5V18.5C19 19.0523 18.5523 19.5 18 19.5H11C10.4477 19.5 10 19.0523 10 18.5V11.5ZM11.8 28.7V23.3H17.2V28.7H11.8ZM10 22.5C10 21.9477 10.4477 21.5 11 21.5H18C18.5523 21.5 19 21.9477 19 22.5V29.5C19 30.0523 18.5523 30.5 18 30.5H11C10.4477 30.5 10 30.0523 10 29.5V22.5ZM22.8 12.3V17.7H28.2V12.3H22.8ZM22 10.5C21.4477 10.5 21 10.9477 21 11.5V18.5C21 19.0523 21.4477 19.5 22 19.5H29C29.5523 19.5 30 19.0523 30 18.5V11.5C30 10.9477 29.5523 10.5 29 10.5H22ZM21.2 21.5C21.0895 21.5 21 21.5895 21 21.7V24.3C21 24.4105 21.0895 24.5 21.2 24.5H23.8C23.9105 24.5 24 24.4105 24 24.3V21.7C24 21.5895 23.9105 21.5 23.8 21.5H21.2ZM24.2 24.5C24.0895 24.5 24 24.5895 24 24.7V27.3C24 27.4105 24.0895 27.5 24.2 27.5H26.8C26.9105 27.5 27 27.4105 27 27.3V24.7C27 24.5895 26.9105 24.5 26.8 24.5H24.2ZM27 21.7C27 21.5895 27.0895 21.5 27.2 21.5H29.8C29.9105 21.5 30 21.5895 30 21.7V24.3C30 24.4105 29.9105 24.5 29.8 24.5H27.2C27.0895 24.5 27 24.4105 27 24.3V21.7ZM27.2 27.5C27.0895 27.5 27 27.5895 27 27.7V30.3C27 30.4105 27.0895 30.5 27.2 30.5H29.8C29.9105 30.5 30 30.4105 30 30.3V27.7C30 27.5895 29.9105 27.5 29.8 27.5H27.2ZM21 27.7C21 27.5895 21.0895 27.5 21.2 27.5H23.8C23.9105 27.5 24 27.5895 24 27.7V30.3C24 30.4105 23.9105 30.5 23.8 30.5H21.2C21.0895 30.5 21 30.4105 21 30.3V27.7Z"
          fill={selected == value ? "#7E73FE" : "#717171"}
        />
      </svg>
    </>
  );
};
