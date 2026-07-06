import type { Locale } from "@/i18n/config";
import { Dashboard } from "./Dashboard";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DashboardPage({ params }: Props) {
  const { locale } = await params;
  return <Dashboard locale={locale as Locale} />;
}
