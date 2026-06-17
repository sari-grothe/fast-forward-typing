type Pose = "waving" | "running";

type Props = {
  pose?: Pose;
  size?: number;
  className?: string;
};

export function KeyCharacter({ pose = "waving", size = 80, className }: Props) {
  if (pose === "running") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="-60 -40 120 100"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <g transform="rotate(-8)">
          <rect x="-30" y="-30" width="60" height="60" rx="10" fill="white" stroke="#3f0ff2" strokeWidth="1.5" />
          <rect x="-25" y="-25" width="50" height="45" rx="7" fill="#eeecfe" />
          <text x="0" y="0" fontFamily="Poppins, sans-serif" fontSize="22" fontWeight="800" fill="#3f0ff2" textAnchor="middle">&gt;&gt;</text>
          <circle cx="-6" cy="12" r="2" fill="#050111" />
          <line x1="4" y1="10" x2="10" y2="12" stroke="#050111" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M-4 18 Q1 22 6 18" stroke="#050111" strokeWidth="1.3" strokeLinecap="round" />
        </g>
        <path d="M-15 32 L-25 50 L-35 48" stroke="#3f0ff2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 30 L20 48 L30 42" stroke="#3f0ff2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="-50" y1="0" x2="-40" y2="0" stroke="#f8a37c" strokeWidth="2" strokeLinecap="round" />
        <line x1="-55" y1="10" x2="-38" y2="10" stroke="#f8a37c" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-50" y1="20" x2="-40" y2="20" stroke="#f8a37c" strokeWidth="2" strokeLinecap="round" />
        <circle cx="-45" cy="40" r="5" fill="#f8a37c" opacity="0.3" />
        <circle cx="-55" cy="35" r="3" fill="#f8a37c" opacity="0.2" />
        <circle cx="-40" cy="45" r="4" fill="#f8a37c" opacity="0.25" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="-55 -40 110 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="-35" y="-35" width="70" height="70" rx="12" fill="white" stroke="#3f0ff2" strokeWidth="1.5" />
      <rect x="-30" y="-30" width="60" height="55" rx="8" fill="#eeecfe" />
      <text x="0" y="-2" fontFamily="Poppins, sans-serif" fontSize="28" fontWeight="800" fill="#3f0ff2" textAnchor="middle">&gt;&gt;</text>
      <circle cx="-8" cy="16" r="2.5" fill="#050111" />
      <circle cx="8" cy="16" r="2.5" fill="#050111" />
      <path d="M-5 22 Q0 27 5 22" stroke="#050111" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="-35" y1="5" x2="-48" y2="-5" stroke="#3f0ff2" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="35" y1="5" x2="48" y2="-5" stroke="#3f0ff2" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="-10" x2="62" y2="-10" stroke="#f8a37c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="54" y1="-2" x2="68" y2="-2" stroke="#f8a37c" strokeWidth="2" strokeLinecap="round" />
      <line x1="52" y1="6" x2="62" y2="6" stroke="#f8a37c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="-12" y1="35" x2="-15" y2="50" stroke="#3f0ff2" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="35" x2="15" y2="50" stroke="#3f0ff2" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="-17" cy="52" rx="6" ry="3" fill="#3f0ff2" />
      <ellipse cx="17" cy="52" rx="6" ry="3" fill="#3f0ff2" />
    </svg>
  );
}
