import type { Metadata } from "next";
import { pageTitle, ogImages } from "@/lib/seo";
import { locales, type Locale } from "@/i18n/config";
import { getHelpCategories, helpUi, strengths } from "@/lib/help-data";
import { HelpCenter } from "@/components/help/HelpCenter";
import { BASE_URL } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = helpUi[locale as Locale] ?? helpUi.en;

  return {
    title: pageTitle(l.metaTitle),
    description: l.metaDescription,
    openGraph: { title: l.metaTitle, description: l.metaDescription, type: "website", images: ogImages(locale) },
    alternates: {
      canonical: `${BASE_URL}/${locale}/help`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}/help`])),
    },
  };
}

export default async function HelpPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const categories = getHelpCategories(l);

  // One consolidated FAQPage schema for the whole page (all categories),
  // not one per section - multiple FAQPage blocks on a single page can
  // keep Google/AI crawlers from picking any of them up for rich results.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      }))
    ),
  };

  return (
    <div className="marketing-ambient">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HelpCenter locale={l} categories={categories} strengths={strengths[l] ?? strengths.en} />
    </div>
  );
}
