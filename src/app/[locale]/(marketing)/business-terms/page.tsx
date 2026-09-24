import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalMetadata } from "@/lib/legal/route";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return legalMetadata("business-terms", locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <LegalPage docKey="business-terms" locale={locale as Locale} />;
}
