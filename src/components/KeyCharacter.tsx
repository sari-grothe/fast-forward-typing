type Pose = "waving" | "running";

type Props = {
  pose?: Pose;
  size?: number;
  className?: string;
};

export function KeyCharacter({ pose = "waving", size = 120, className }: Props) {
  if (pose === "running") {
    return (
      <svg
        width={size}
        height={size * 0.85}
        viewBox="-65 -42 130 110"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <g transform="rotate(-8)">
          <rect x="-32" y="-32" width="64" height="64" rx="12" fill="white" stroke="#3f0ff2" strokeWidth="2" />
          <rect x="-26" y="-26" width="52" height="46" rx="8" fill="#eeecfe" />
          <text x="0" y="1" fontFamily="Poppins, sans-serif" fontSize="24" fontWeight="800" fill="#3f0ff2" textAnchor="middle">&gt;&gt;</text>
          <circle cx="-7" cy="14" r="2.5" fill="#050111" />
          <line x1="3" y1="11" x2="10" y2="13.5" stroke="#050111" strokeWidth="2" strokeLinecap="round" />
          <path d="M-5 20 Q0 25 6 20" stroke="#050111" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <path d="M-16 34 L-27 54 L-38 51" stroke="#3f0ff2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 32 L22 52 L33 45" stroke="#3f0ff2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="-52" y1="0" x2="-42" y2="0" stroke="#f8a37c" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-58" y1="10" x2="-40" y2="10" stroke="#f8a37c" strokeWidth="3" strokeLinecap="round" />
        <line x1="-52" y1="20" x2="-42" y2="20" stroke="#f8a37c" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="-47" cy="42" r="6" fill="#f8a37c" opacity="0.25" />
        <circle cx="-58" cy="36" r="4" fill="#f8a37c" opacity="0.15" />
        <circle cx="-42" cy="48" r="5" fill="#f8a37c" opacity="0.2" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="-58 -42 116 106"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="-36" y="-36" width="72" height="72" rx="14" fill="white" stroke="#3f0ff2" strokeWidth="2" />
      <rect x="-30" y="-30" width="60" height="55" rx="9" fill="#eeecfe" />
      <text x="0" y="-1" fontFamily="Poppins, sans-serif" fontSize="28" fontWeight="800" fill="#3f0ff2" textAnchor="middle">&gt;&gt;</text>
      <circle cx="-8" cy="17" r="3" fill="#050111" />
      <circle cx="8" cy="17" r="3" fill="#050111" />
      <path d="M-5 24 Q0 29 5 24" stroke="#050111" strokeWidth="2" strokeLinecap="round" />
      <line x1="-36" y1="6" x2="-50" y2="-5" stroke="#3f0ff2" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="6" x2="50" y2="-5" stroke="#3f0ff2" strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="-10" x2="64" y2="-10" stroke="#f8a37c" strokeWidth="2" strokeLinecap="round" />
      <line x1="56" y1="-1" x2="70" y2="-1" stroke="#f8a37c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="54" y1="8" x2="64" y2="8" stroke="#f8a37c" strokeWidth="2" strokeLinecap="round" />
      <line x1="-12" y1="36" x2="-16" y2="52" stroke="#3f0ff2" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="36" x2="16" y2="52" stroke="#3f0ff2" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="-18" cy="55" rx="7" ry="3.5" fill="#3f0ff2" />
      <ellipse cx="18" cy="55" rx="7" ry="3.5" fill="#3f0ff2" />
    </svg>
  );
}
