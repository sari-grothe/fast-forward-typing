import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTipsByLocale, tipsUi } from "@/lib/tips";
import { TipsOverview } from "@/components/tips/TipsOverview";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const ui = tipsUi[locale as Locale];
  const title = `${ui.pageTitle} - Fast Forward >> Typing`;
  const description = ui.pageSubtitle;

  return {
    title,
    description,
    openGraph: { title, description },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/tips`])),
    },
  };
}

export default async function TipsPage({ params }: Props) {
  const { locale } = await params;
  const tips = getTipsByLocale(locale as Locale);

  return <TipsOverview tips={tips} locale={locale as Locale} />;
}
