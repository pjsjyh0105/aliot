const svgrectData = btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="148" height="52" viewBox="0 0 148 52" fill="none">
<g filter="url(#filter0_d_2871_71477)">
<rect x="4" width="140" height="44" rx="8" fill="black" fill-opacity="0.3" shape-rendering="crispEdges"/>
<rect x="4.75" y="0.75" width="138.5" height="42.5" rx="7.25" stroke="#FF6767" stroke-width="1.5" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_2871_71477" x="0" y="0" width="148" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0 0.188235 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2871_71477"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2871_71477" result="shape"/>
</filter>
</defs>
</svg>
`);
export const svgrectUrl = `data:image/svg+xml;base64,${svgrectData}`;
