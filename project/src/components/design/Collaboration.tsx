export const LeftCurve = () => {
  return (
    <svg className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[42%] w-[45%] h-[40%]">
      <path
        d="M0 100h100c50 0 50 -50 50 -50v-50"
        fill="none"
        stroke="url(#gradient-left)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4338CA" stopOpacity="0" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const RightCurve = () => {
  return (
    <svg className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[42%] w-[45%] h-[40%]">
      <path
        d="M100 100h-100c-50 0 -50 -50 -50 -50v-50"
        fill="none"
        stroke="url(#gradient-right)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="gradient-right" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4338CA" stopOpacity="0" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>
    </svg>
  );
};