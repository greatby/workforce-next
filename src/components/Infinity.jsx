"use client"
const InfinityWave = () => (
  <div className="w-full h-screen overflow-hidden bg-black flex items-center justify-center">
    <svg
      viewBox="0 0 800 400"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
     
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#ff00f0" />
        </linearGradient>

       
        <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>
      </defs>


      <circle cx="400" cy="200" r="180" fill="url(#gradient2)" filter="url(#blur)" />

      <path
        id="infinityPath"
        fill="none"
        stroke="url(#gradient1)"
        strokeWidth="8"
        d="
          M 200,200
          C 200,100 400,100 400,200
          C 400,300 600,300 600,200
          C 600,100 400,100 400,200
          C 400,300 200,300 200,200
        "
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="1000"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="
          M 200,200
          C 200,100 400,100 400,200
          C 400,300 600,300 600,200
          C 600,100 400,100 400,200
          C 400,300 200,300 200,200
        "
        fill="none"
        stroke="url(#gradient1)"
        strokeWidth="2"
        strokeDasharray="10,10"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-100"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

export default InfinityWave