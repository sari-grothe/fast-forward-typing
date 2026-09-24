import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getResourcesByLocale, resourcesUi } from "@/lib/resources";
import { ResourcesOverview } from "@/components/resources/ResourcesOverview";
import { FinalCTA } from "@/components/FinalCTA";
import { BASE_URL } from "@/lib/schema";
import { pageTitle, ogImages } from "@/lib/seo";
import { localizedPath } from "@/i18n/routes";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const ui = resourcesUi[locale as Locale];
  const title = pageTitle(ui.pageTitle);
  const description = ui.metaDescription;

  return {
    title,
    description,
    openGraph: { title, description, type: "website", images: ogImages(locale) },
    alternates: {
      canonical: `${BASE_URL}${localizedPath(locale, "resources")}`,
      languages: Object.fromEntries([...locales.map((l) => [l, localizedPath(l, "resources")]), ["x-default", `/en/resources`]]),
    },
  };
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  const items = getResourcesByLocale(locale as Locale);
  const ui = resourcesUi[locale as Locale];
  const dict = await getDictionary(locale as Locale);
  const h = dict.home as Record<string, unknown>;
  const final_ = h.finalCta as Record<string, string>;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: ui.pageTitle,
    description: ui.pageSubtitle,
    url: `${BASE_URL}${localizedPath(locale, "resources")}`,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: "Fast Forward >> Typing",
      url: BASE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}${localizedPath(locale, "resources")}/${item.slug}`,
        name: item.title,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: ui.pageTitle, item: `${BASE_URL}${localizedPath(locale, "resources")}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ResourcesOverview
        items={items}
        locale={locale as Locale}
        finalCta={{ title: final_.title, description: final_.desc, ctaLearn: h.ctaLearn as string, ctaTest: h.ctaTest as string }}
      />
      <div className="mx-auto max-w-5xl px-6 pb-10">
        <FinalCTA
          locale={locale}
          title={final_.title}
          description={final_.desc}
          ctaLearn={h.ctaLearn as string}
          ctaTest={h.ctaTest as string}
        />
      </div>
    </>
  );
}
