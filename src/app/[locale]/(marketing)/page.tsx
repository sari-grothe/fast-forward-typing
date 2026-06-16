import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-tight">
          {dict.home.headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl">
          {dict.home.subheadline}
        </p>
      </section>
    </div>
  );
}
