type Props = {
  brandName: string;
  certTitle: string;
  awardedTo: string;
  certName: string;
  certText: string;
  certNumber: string;
  certWpm: string;
  wpmLabel: string;
  certAccuracy: string;
  accuracyLabel: string;
  certDuration: string;
  durationLabel: string;
  certDate: string;
  certDateLabel: string;
  tierLabel: string;
};

export function CertificateVisual(p: Props) {
  return (
    <div className="w-full" style={{ aspectRatio: "297/210" }}>
      {/* Dark outer border */}
      <div
        className="h-full rounded-sm"
        style={{ background: "#2c2210", padding: "clamp(10px, 3%, 20px)" }}
      >
        {/* Cream inner area */}
        <div
          className="h-full rounded-[1px]"
          style={{ background: "#fdf8ee", padding: "clamp(6px, 2%, 10px)" }}
        >
          {/* Gold inset border */}
          <div
            className="h-full rounded-[1px] flex flex-col justify-between text-center"
            style={{
              border: "3px solid #d4a84b",
              padding: "clamp(14px, 4%, 22px) clamp(20px, 6%, 36px) clamp(10px, 3%, 16px)",
            }}
          >
            <div className="relative">
              {/* Certificate number */}
              <span
                className="absolute top-0 right-0 font-mono"
                style={{ fontSize: "clamp(6px, 1.4vw, 9px)", color: "#b89a4a", letterSpacing: "0.5px" }}
              >
                {p.certNumber}
              </span>

              {/* Brand */}
              <p
                style={{
                  fontSize: "clamp(8px, 1.8vw, 12px)",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  color: "#3d3215",
                  marginBottom: "4px",
                }}
              >
                {p.brandName}
              </p>
              <p
                style={{
                  fontSize: "clamp(6px, 1.4vw, 9px)",
                  letterSpacing: "3px",
                  color: "#8a6d2a",
                  marginBottom: "clamp(8px, 2.5%, 14px)",
                }}
              >
                {p.certTitle}
              </p>

              {/* Divider */}
              <div
                style={{
                  width: "50px",
                  height: "1px",
                  background: "#d4a84b",
                  margin: "0 auto clamp(8px, 2%, 12px)",
                }}
              />

              {/* Ribbon seal medal */}
              <div
                className="mx-auto"
                style={{
                  width: "clamp(50px, 12vw, 80px)",
                  marginBottom: "clamp(4px, 1.5%, 8px)",
                }}
              >
                <svg viewBox="0 0 100 115" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38 65 L28 105 L40 92 L50 110 L50 68" fill="#c49a3e" />
                  <path
                    d="M38 65 L28 105 L40 92 L50 110 L50 68"
                    fill="#b8902e"
                    opacity="0.5"
                  />
                  <path d="M62 65 L72 105 L60 92 L50 110 L50 68" fill="#d4a84b" />
                  <circle cx="50" cy="40" r="30" fill="#d4a84b" />
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map(
                    (i) => {
                      const a = (i * Math.PI * 2) / 22 - Math.PI / 2;
                      return (
                        <circle
                          key={i}
                          cx={50 + Math.cos(a) * 28}
                          cy={40 + Math.sin(a) * 28}
                          r="2"
                          fill="#c49a3e"
                        />
                      );
                    }
                  )}
                  <circle cx="50" cy="40" r="22" fill="none" stroke="#b8902e" strokeWidth="1.5" />
                  <circle cx="50" cy="40" r="20" fill="#dbb44e" />
                  <circle cx="50" cy="40" r="16" fill="none" stroke="#c49a3e" strokeWidth="1" />
                  <text
                    x="50"
                    y="44"
                    textAnchor="middle"
                    fill="#8a6d2a"
                    fontSize="12"
                    fontWeight="700"
                    letterSpacing="2"
                  >
                    {p.tierLabel}
                  </text>
                </svg>
              </div>

              {/* Awarded to */}
              <p
                style={{
                  fontSize: "clamp(8px, 1.6vw, 11px)",
                  color: "#8a6d2a",
                  marginBottom: "3px",
                }}
              >
                {p.awardedTo}
              </p>
              <p
                className="font-poppins"
                style={{
                  fontSize: "clamp(16px, 4vw, 28px)",
                  fontWeight: 700,
                  color: "#3d3215",
                  marginBottom: "3px",
                }}
              >
                {p.certName}
              </p>
              <p
                style={{
                  fontSize: "clamp(8px, 1.8vw, 12px)",
                  color: "#8a6d2a",
                  marginBottom: "clamp(10px, 3%, 18px)",
                }}
              >
                {p.certText}
              </p>

              {/* Stats */}
              <div className="flex gap-2 sm:gap-[10px] justify-center">
                {[
                  { val: p.certWpm, label: p.wpmLabel },
                  { val: p.certAccuracy, label: p.accuracyLabel },
                  { val: p.certDuration, label: p.durationLabel },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[5px]"
                    style={{ background: "#f5edda", padding: "clamp(6px, 1.5%, 10px) clamp(10px, 3%, 20px)" }}
                  >
                    <span
                      style={{ fontSize: "clamp(14px, 3vw, 20px)", fontWeight: 700, color: "#3d3215" }}
                    >
                      {s.val}{" "}
                    </span>
                    <span
                      style={{ fontSize: "clamp(8px, 1.6vw, 11px)", fontWeight: 500, color: "#8a6d2a" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              className="flex justify-between items-end"
              style={{ borderTop: "1px solid #e8dcc4", paddingTop: "clamp(6px, 2%, 12px)" }}
            >
              <div className="text-left">
                <p style={{ fontSize: "clamp(7px, 1.5vw, 10px)", color: "#3d3215" }}>
                  {p.certDate}
                </p>
                <p
                  style={{
                    fontSize: "clamp(5px, 1.2vw, 8px)",
                    color: "#b89a4a",
                    letterSpacing: "0.8px",
                  }}
                >
                  {p.certDateLabel}
                </p>
              </div>
              <p style={{ fontSize: "clamp(7px, 1.5vw, 10px)", color: "#b89a4a" }}>
                fastforwardtyping.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
