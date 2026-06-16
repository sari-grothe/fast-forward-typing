import type { Locale } from "@/i18n/config";
import { SpeedTest } from "./SpeedTest";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SpeedTestPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <SpeedTest locale={locale as Locale} />
    </div>
  );
}
