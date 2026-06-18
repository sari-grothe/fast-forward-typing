type CertData = {
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

const certs: Record<string, CertData> = {
  de: {
    brandName: "FAST FORWARD » TYPING",
    certTitle: "LEISTUNGSZERTIFIKAT",
    awardedTo: "Zertifikat verliehen an",
    certName: "Thomas Klein",
    certText: "für das Zehnfingersystem auf Deutsch",
    certNumber: "FF-0513-DE",
    certWpm: "56",
    wpmLabel: "wpm",
    certAccuracy: "98.9",
    accuracyLabel: "%",
    certDuration: "2",
    durationLabel: "min",
    certDate: "18. Juni 2026",
    certDateLabel: "ZERTIFIZIERUNGSDATUM",
    tierLabel: "GOLD",
  },
  en: {
    brandName: "FAST FORWARD » TYPING",
    certTitle: "CERTIFICATE OF ACHIEVEMENT",
    awardedTo: "Certificate awarded to",
    certName: "Jane Smith",
    certText: "for typing in English",
    certNumber: "FF-0012-EN",
    certWpm: "85",
    wpmLabel: "wpm",
    certAccuracy: "96.1",
    accuracyLabel: "%",
    certDuration: "2",
    durationLabel: "min",
    certDate: "June 18, 2026",
    certDateLabel: "CERTIFICATION DATE",
    tierLabel: "GOLD",
  },
  fr: {
    brandName: "FAST FORWARD » TYPING",
    certTitle: "CERTIFICAT DE RÉUSSITE",
    awardedTo: "Certificat décerné à",
    certName: "Marie Dupont",
    certText: "pour la dactylographie en français",
    certNumber: "FF-0847-FR",
    certWpm: "72",
    wpmLabel: "mpm",
    certAccuracy: "95.0",
    accuracyLabel: "%",
    certDuration: "5",
    durationLabel: "min",
    certDate: "18 juin 2026",
    certDateLabel: "DATE DE CERTIFICATION",
    tierLabel: "GOLD",
  },
};

const order: Record<string, [string, string, string]> = {
  de: ["en", "fr", "de"],
  en: ["fr", "de", "en"],
  fr: ["de", "en", "fr"],
};

const CW = 460;
const CH = Math.round(CW * (210 / 297));
const BORDER = 14;
const INNER_PAD = 8;
const GOLD_INSET = 3;

function CertGroup({ data, id }: { data: CertData; id: string }) {
  const ix = BORDER;
  const iy = BORDER;
  const iw = CW - BORDER * 2;
  const ih = CH - BORDER * 2;

  const gx = ix + INNER_PAD;
  const gy = iy + INNER_PAD;
  const gw = iw - INNER_PAD * 2;
  const gh = ih - INNER_PAD * 2;

  const cx = gx + gw / 2;

  const medalCx = cx;
  const medalCy = gy + 78;
  const medalR = 22;

  return (
    <g id={id}>
      {/* Dark outer border */}
      <rect x={0} y={0} width={CW} height={CH} rx={3} fill="#2c2210" />
      {/* Cream inner */}
      <rect x={ix} y={iy} width={iw} height={ih} rx={2} fill="#fdf8ee" />
      {/* Gold inset border */}
      <rect
        x={gx}
        y={gy}
        width={gw}
        height={gh}
        rx={2}
        fill="none"
        stroke="#d4a84b"
        strokeWidth={GOLD_INSET}
      />

      {/* Cert number - top right */}
      <text
        x={gx + gw - 10}
        y={gy + 16}
        textAnchor="end"
        fill="#b89a4a"
        fontSize="7"
        fontFamily="monospace"
        letterSpacing="0.5"
      >
        {data.certNumber}
      </text>

      {/* Brand name */}
      <text
        x={cx}
        y={gy + 20}
        textAnchor="middle"
        fill="#3d3215"
        fontSize="9.5"
        fontWeight="600"
        fontFamily="Poppins, sans-serif"
        letterSpacing="2"
      >
        {data.brandName}
      </text>

      {/* Certificate title */}
      <text
        x={cx}
        y={gy + 34}
        textAnchor="middle"
        fill="#8a6d2a"
        fontSize="7"
        fontFamily="Poppins, sans-serif"
        letterSpacing="3"
      >
        {data.certTitle}
      </text>

      {/* Divider */}
      <line x1={cx - 25} y1={gy + 44} x2={cx + 25} y2={gy + 44} stroke="#d4a84b" strokeWidth="1" />

      {/* Medal - V-ribbons */}
      <path d={`M${medalCx - 9} ${medalCy + 18} L${medalCx - 16} ${medalCy + 45} L${medalCx - 7} ${medalCy + 36} L${medalCx} ${medalCy + 50} L${medalCx} ${medalCy + 20}`} fill="#c49a3e" />
      <path d={`M${medalCx - 9} ${medalCy + 18} L${medalCx - 16} ${medalCy + 45} L${medalCx - 7} ${medalCy + 36} L${medalCx} ${medalCy + 50} L${medalCx} ${medalCy + 20}`} fill="#b8902e" opacity="0.5" />
      <path d={`M${medalCx + 9} ${medalCy + 18} L${medalCx + 16} ${medalCy + 45} L${medalCx + 7} ${medalCy + 36} L${medalCx} ${medalCy + 50} L${medalCx} ${medalCy + 20}`} fill="#d4a84b" />
      {/* Medal circle */}
      <circle cx={medalCx} cy={medalCy} r={medalR} fill="#d4a84b" />
      {/* Studded edge */}
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 18 - Math.PI / 2;
        return (
          <circle
            key={i}
            cx={medalCx + Math.cos(a) * (medalR - 2)}
            cy={medalCy + Math.sin(a) * (medalR - 2)}
            r="1.3"
            fill="#c49a3e"
          />
        );
      })}
      <circle cx={medalCx} cy={medalCy} r={medalR - 4} fill="none" stroke="#b8902e" strokeWidth="1" />
      <circle cx={medalCx} cy={medalCy} r={medalR - 5} fill="#dbb44e" />
      <circle cx={medalCx} cy={medalCy} r={medalR - 8} fill="none" stroke="#c49a3e" strokeWidth="0.7" />
      <text
        x={medalCx}
        y={medalCy + 3}
        textAnchor="middle"
        fill="#8a6d2a"
        fontSize="8"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
        letterSpacing="1.5"
      >
        {data.tierLabel}
      </text>

      {/* Awarded to */}
      <text
        x={cx}
        y={medalCy + 60}
        textAnchor="middle"
        fill="#8a6d2a"
        fontSize="8"
        fontFamily="Poppins, sans-serif"
      >
        {data.awardedTo}
      </text>

      {/* Name */}
      <text
        x={cx}
        y={medalCy + 80}
        textAnchor="middle"
        fill="#3d3215"
        fontSize="22"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
      >
        {data.certName}
      </text>

      {/* Cert text */}
      <text
        x={cx}
        y={medalCy + 96}
        textAnchor="middle"
        fill="#8a6d2a"
        fontSize="8.5"
        fontFamily="Poppins, sans-serif"
      >
        {data.certText}
      </text>

      {/* Stat boxes */}
      {[
        { val: data.certWpm, label: data.wpmLabel, offset: -75 },
        { val: data.certAccuracy, label: data.accuracyLabel, offset: 0 },
        { val: data.certDuration, label: data.durationLabel, offset: 75 },
      ].map((s) => (
        <g key={s.label}>
          <rect
            x={cx + s.offset - 32}
            y={medalCy + 108}
            width={64}
            height={28}
            rx={4}
            fill="#f5edda"
          />
          <text
            x={cx + s.offset - 2}
            y={medalCy + 125}
            textAnchor="middle"
            fill="#3d3215"
            fontSize="14"
            fontWeight="700"
            fontFamily="Poppins, sans-serif"
          >
            {s.val}
          </text>
          <text
            x={cx + s.offset + 18}
            y={medalCy + 125}
            textAnchor="middle"
            fill="#8a6d2a"
            fontSize="8"
            fontWeight="500"
            fontFamily="Poppins, sans-serif"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* Footer divider */}
      <line
        x1={gx + 8}
        y1={CH - BORDER - INNER_PAD - 28}
        x2={gx + gw - 8}
        y2={CH - BORDER - INNER_PAD - 28}
        stroke="#e8dcc4"
        strokeWidth="0.8"
      />

      {/* Date */}
      <text
        x={gx + 12}
        y={CH - BORDER - INNER_PAD - 14}
        fill="#3d3215"
        fontSize="7.5"
        fontFamily="Poppins, sans-serif"
      >
        {data.certDate}
      </text>
      <text
        x={gx + 12}
        y={CH - BORDER - INNER_PAD - 5}
        fill="#b89a4a"
        fontSize="5.5"
        fontFamily="Poppins, sans-serif"
        letterSpacing="0.5"
      >
        {data.certDateLabel}
      </text>

      {/* URL */}
      <text
        x={gx + gw - 12}
        y={CH - BORDER - INNER_PAD - 10}
        textAnchor="end"
        fill="#b89a4a"
        fontSize="7.5"
        fontFamily="Poppins, sans-serif"
      >
        fastforwardtyping.com
      </text>
    </g>
  );
}

type Props = { locale: string };

export function CertificateStackSVG({ locale }: Props) {
  const [backLeft, backRight, front] = order[locale] ?? order.en;

  const svgW = 560;
  const svgH = 420;
  const frontX = (svgW - CW) / 2;
  const frontY = svgH - CH - 10;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Stacked typing certificates"
    >
      {/* Back left certificate */}
      <g transform={`translate(${frontX - 16}, ${frontY - 8}) rotate(-5, ${CW / 2}, ${CH / 2})`}>
        <CertGroup data={certs[backLeft]} id="back-left" />
      </g>

      {/* Back right certificate */}
      <g transform={`translate(${frontX + 16}, ${frontY - 4}) rotate(4, ${CW / 2}, ${CH / 2})`}>
        <CertGroup data={certs[backRight]} id="back-right" />
      </g>

      {/* Front center certificate */}
      <g transform={`translate(${frontX}, ${frontY})`}>
        <CertGroup data={certs[front]} id="front" />
      </g>
    </svg>
  );
}
