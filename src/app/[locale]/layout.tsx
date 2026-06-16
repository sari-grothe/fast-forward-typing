import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
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
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark')}catch(e){}})()` }} />
      </head>
      <body className="bg-lavender text-dark-text dark:bg-dark dark:text-white font-sans antialiased transition-colors">
        <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-dark-border bg-white/80 dark:bg-dark/80 backdrop-blur-sm">
          <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 sm:px-6 py-3">
            <a href={`/${locale}`} className="text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap shrink-0">
              FF<span className="text-indigo">&gt;&gt;</span><span className="hidden sm:inline">Typing</span>
            </a>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex items-center gap-4 text-sm font-medium">
                <a href={`/${locale}/speed-test`} className="text-zinc-600 dark:text-zinc-400 hover:text-indigo transition-colors">
                  {dict.nav.typingTest}
                </a>
                <a href={`/${locale}/lessons/1`} className="text-zinc-600 dark:text-zinc-400 hover:text-indigo transition-colors">
                  {dict.nav.typingCourse}
                </a>
                <a href={`/${locale}/tips`} className="text-zinc-600 dark:text-zinc-400 hover:text-indigo transition-colors">
                  {dict.nav.typingTips}
                </a>
              </div>
              <LanguageSwitcher currentLocale={locale as Locale} />
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-dark-border mt-32">
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
