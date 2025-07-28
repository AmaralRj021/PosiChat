import React from 'react';

const PhoneMockup = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="343" height="635" viewBox="0 0 343 635" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1.5" y="1.5" width="340" height="632" rx="48.5" stroke="url(#paint0_linear_136_50)" strokeWidth="3"/>
    <path d="M115 22C115 20.3431 116.343 19 118 19H225C226.657 19 228 20.3431 228 22V22C228 23.6569 226.657 25 225 25H118C116.343 25 115 23.6569 115 22V22Z" fill="#27272A"/>
    <defs>
      <linearGradient id="paint0_linear_136_50" x1="171.5" y1="0" x2="171.5" y2="635" gradientUnits="userSpaceOnUse">
        <stop stopColor="#27272A"/>
        <stop offset="1" stopColor="#27272A" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

export default PhoneMockup;
