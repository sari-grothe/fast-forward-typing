import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { Dashboard } from "./Dashboard";

type Props = {
  params: Promise<{ locale: string }>;
};

// Personal progress page, read from localStorage per visitor - a
// crawler sees an empty "0 lessons done" shell with nothing to
// differentiate it from any other visitor's dashboard. Nothing to
// index, and indexing it would just be thin/duplicate content.
export async function generateMetadata(): Promise<Metadata> {
  return { robots: { index: false, follow: true } };
}

export default async function DashboardPage({ params }: Props) {
  const { locale } = await params;
  return <Dashboard locale={locale as Locale} />;
}
