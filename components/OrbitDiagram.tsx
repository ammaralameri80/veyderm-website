// Animated ecosystem diagram, ported 1:1 from the reference.
// Concentric rings + dotted spokes + four nodes (Doctors / Clinics / Patients /
// Distributors) around a central serif "V". Animations (spin, flow, ripple,
// breathe, glow, data pulses) live in globals.css and are disabled under
// prefers-reduced-motion.

const CORE_V_PATH = `M404 2341 c-14 -15 3 -34 49 -55 77 -34 110 -84 212 -321 26 -60 73 -168 105 -240 80 -179 240 -542 285 -647 20 -47 44 -89 53 -93 24 -9 45 21 82 115 18 47 43 108 56 135 12 28 48 113 79 190 31 77 82 199 112 270 30 72 75 180 100 240 57 140 116 251 156 293 34 36 96 72 122 72 11 0 15 7 13 21 -3 20 -8 21 -216 20 -117 0 -217 -3 -222 -6 -19 -12 3 -34 40 -40 28 -5 49 -17 71 -43 29 -33 31 -39 26 -93 -5 -55 -61 -205 -210 -564 -30 -71 -57 -139 -61 -150 -8 -23 -3 -32 -133 265 -202 461 -219 518 -168 558 14 11 40 23 60 26 37 7 48 17 40 38 -4 10 -67 13 -326 13 -176 0 -323 -2 -325 -4z`;

export function OrbitDiagram() {
  return (
    <svg
      className="orbit"
      viewBox="0 0 460 460"
      role="img"
      aria-label="Veyderm connects doctors, clinics, patients and distributors"
    >
      {/* orbit rings */}
      <g className="spin">
        <circle className="ring" cx="230" cy="230" r="205" />
        <circle className="ring" cx="230" cy="230" r="150" style={{ opacity: 0.7 }} />
        <circle className="ring" cx="230" cy="230" r="92" style={{ opacity: 0.5 }} />
        {/* decorative specks on outer ring */}
        <circle className="speck" cx="230" cy="25" r="3" />
        <circle className="speck" cx="404" cy="300" r="3" />
        <circle className="speck" cx="56" cy="300" r="3" />
        <circle className="speck" cx="360" cy="90" r="2.5" />
      </g>
      {/* spokes */}
      <path id="sp1" className="spoke" d="M120 130 L230 230" />
      <path id="sp2" className="spoke" d="M340 130 L230 230" />
      <path id="sp3" className="spoke" d="M120 330 L230 230" />
      <path id="sp4" className="spoke" d="M340 330 L230 230" />
      {/* ripples from the core */}
      <circle className="ripple" cx="230" cy="230" r="52" />
      <circle className="ripple r2" cx="230" cy="230" r="52" />
      {/* data pulses travelling into the agent */}
      <circle className="pulse" r="3.5">
        <animateMotion
          dur="2.4s"
          begin="0s"
          repeatCount="indefinite"
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="spline"
          keySplines=".4 0 .6 1"
        >
          <mpath href="#sp1" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.15;.8;1"
          dur="2.4s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
      <circle className="pulse" r="3.5">
        <animateMotion
          dur="2.4s"
          begin=".6s"
          repeatCount="indefinite"
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="spline"
          keySplines=".4 0 .6 1"
        >
          <mpath href="#sp2" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.15;.8;1"
          dur="2.4s"
          begin=".6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle className="pulse" r="3.5">
        <animateMotion
          dur="2.4s"
          begin="1.2s"
          repeatCount="indefinite"
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="spline"
          keySplines=".4 0 .6 1"
        >
          <mpath href="#sp3" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.15;.8;1"
          dur="2.4s"
          begin="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle className="pulse" r="3.5">
        <animateMotion
          dur="2.4s"
          begin="1.8s"
          repeatCount="indefinite"
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="spline"
          keySplines=".4 0 .6 1"
        >
          <mpath href="#sp4" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.15;.8;1"
          dur="2.4s"
          begin="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      {/* central core */}
      <g className="core">
        <circle cx="230" cy="230" r="50" fill="url(#coreGrad)" />
        <g transform="translate(192.39 175.41) scale(0.3377)">
          <g
            transform="translate(0.000000,331.000000) scale(0.100000,-0.100000)"
            fill="#fff"
          >
            <path d={CORE_V_PATH} />
          </g>
        </g>
      </g>
      <defs>
        <radialGradient id="coreGrad" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#6a5cd6" />
          <stop offset="100%" stopColor="#362b87" />
        </radialGradient>
      </defs>
      {/* NODE: Doctors (top-left) */}
      <g className="nodeg" transform="translate(120,130)">
        <circle className="node" cx="0" cy="0" r="42" />
        <g className="ico" transform="translate(-15.6,-15.6) scale(1.3)">
          <path d="M4.8 2.3v1.9" />
          <path d="M9.5 2.3v1.9" />
          <path d="M4.8 3.9H4a1.7 1.7 0 0 0-1.7 1.7v3.4a5 5 0 0 0 10 0V5.6A1.7 1.7 0 0 0 10.6 3.9h-.8" />
          <path d="M7.3 15.6a5 5 0 0 0 10 0v-2.5" />
          <circle cx="17.3" cy="10.6" r="1.7" />
        </g>
        <text className="lbl" x="0" y="63">
          Doctors
        </text>
      </g>
      {/* NODE: Clinics (top-right) */}
      <g className="nodeg d2" transform="translate(340,130)">
        <circle className="node" cx="0" cy="0" r="42" />
        <g className="ico" transform="translate(-15.6,-15.6) scale(1.3)">
          <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
          <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2" />
          <path d="M12 6v4" />
          <path d="M14 8h-4" />
          <path d="M14 14h-4" />
          <path d="M14 18h-4" />
        </g>
        <text className="lbl" x="0" y="63">
          Clinics
        </text>
      </g>
      {/* NODE: Patients (bottom-left) */}
      <g className="nodeg d4" transform="translate(120,330)">
        <circle className="node" cx="0" cy="0" r="42" />
        <g className="ico" transform="translate(-15.6,-15.6) scale(1.3)">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </g>
        <text className="lbl" x="0" y="63">
          Patients
        </text>
      </g>
      {/* NODE: Distributors (bottom-right) */}
      <g className="nodeg d3" transform="translate(340,330)">
        <circle className="node" cx="0" cy="0" r="42" />
        <g className="ico" transform="translate(-15.6,-15.6) scale(1.3)">
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
          <path d="M12 22V12" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <path d="m7.5 4.27 9 5.15" />
        </g>
        <text className="lbl" x="0" y="63">
          Distributors
        </text>
      </g>
    </svg>
  );
}
