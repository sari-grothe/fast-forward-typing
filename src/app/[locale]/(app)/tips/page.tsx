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
      canonical: `https://fastforwardtyping.com/${locale}/tips`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/tips`])),
    },
  };
}

export default async function TipsPage({ params }: Props) {
  const { locale } = await params;
  const tips = getTipsByLocale(locale as Locale);
  const ui = tipsUi[locale as Locale];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: ui.pageTitle,
    description: ui.pageSubtitle,
    url: `https://fastforwardtyping.com/${locale}/tips`,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: "Fast Forward >> Typing",
      url: "https://fastforwardtyping.com",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tips.length,
      itemListElement: tips.map((tip, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://fastforwardtyping.com/${locale}/tips/${tip.slug}`,
        name: tip.title,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://fastforwardtyping.com/${locale}` },
      { "@type": "ListItem", position: 2, name: ui.pageTitle, item: `https://fastforwardtyping.com/${locale}/tips` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TipsOverview tips={tips} locale={locale as Locale} />
    </>
  );
}
