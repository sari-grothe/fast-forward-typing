import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}`])
      ),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="/en" />
      </head>
      <body className="bg-dark text-white font-sans antialiased">
        <header className="fixed top-0 w-full z-50 border-b border-dark-border bg-dark/80 backdrop-blur-sm">
          <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
            <a href={`/${locale}`} className="text-lg font-semibold tracking-tight">
              Fast Forward <span className="text-indigo">&gt;&gt;</span> Typing
            </a>
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
                <a href={`/${locale}/speed-test`} className="text-zinc-400 hover:text-indigo transition-colors">
                  {dict.nav.speedTest}
                </a>
                <a href={`/${locale}/lessons/1`} className="text-zinc-400 hover:text-indigo transition-colors">
                  {dict.nav.lessons}
                </a>
                <a href={`/${locale}/practice`} className="text-zinc-400 hover:text-indigo transition-colors">
                  {dict.nav.practice}
                </a>
              </div>
              <LanguageSwitcher currentLocale={locale as Locale} />
            </div>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="border-t border-dark-border mt-32">
          <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Fast Forward Typing</p>
            <div className="flex gap-6">
              <a href={`/${locale}/privacy`} className="hover:text-indigo transition-colors">
                {dict.footer.privacy}
              </a>
              <a href={`/${locale}/terms`} className="hover:text-indigo transition-colors">
                {dict.footer.terms}
              </a>
              <a href={`/${locale}/imprint`} className="hover:text-indigo transition-colors">
                {dict.footer.imprint}
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
