import { CertificateVisual } from "./CertificateVisual";

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
    brandName: "FAST FORWARD >> TYPING",
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
    brandName: "FAST FORWARD >> TYPING",
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
    brandName: "FAST FORWARD >> TYPING",
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

type Props = { locale: string };

export function CertificateStack({ locale }: Props) {
  const [backLeft, backRight, front] = order[locale] ?? order.en;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Invisible spacer to give container height based on front cert */}
      <div className="invisible w-[88%] mx-auto">
        <CertificateVisual {...certs[front]} />
      </div>
      {/* Back left */}
      <div
        className="absolute w-[80%] top-[4%]"
        style={{ transform: "rotate(-5deg)", zIndex: 1, left: "-2%" }}
      >
        <CertificateVisual {...certs[backLeft]} />
      </div>
      {/* Back right */}
      <div
        className="absolute w-[80%] top-[6%]"
        style={{ transform: "rotate(4deg)", zIndex: 2, right: "-2%" }}
      >
        <CertificateVisual {...certs[backRight]} />
      </div>
      {/* Front center */}
      <div
        className="absolute w-[88%] left-1/2 top-1/2"
        style={{ transform: "translate(-50%, -50%)", zIndex: 3 }}
      >
        <CertificateVisual {...certs[front]} />
      </div>
    </div>
  );
}
