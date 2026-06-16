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
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="/en" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()` }} />
      </head>
      <body className="min-h-screen flex flex-col bg-lavender text-dark-text dark:bg-dark dark:text-white font-sans antialiased transition-colors">
        <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-dark-border bg-white/80 dark:bg-dark/80 backdrop-blur-sm">
          <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 sm:px-6 py-3">
            <a href={`/${locale}`} className="text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap shrink-0">
              <span className="text-indigo">&gt;&gt;</span>Typing
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
                <a href={`/${locale}/pricing`} className="text-zinc-600 dark:text-zinc-400 hover:text-indigo transition-colors">
                  {dict.nav.pricing}
                </a>
              </div>
              <LanguageSwitcher currentLocale={locale as Locale} />
            </div>
          </nav>
        </header>
        <main className="pt-20 flex-1">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-dark-border mt-auto">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-8 text-sm">
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.product}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <a href={`/${locale}/speed-test`} className="hover:text-indigo transition-colors">{dict.footer.typingTest}</a>
                  <a href={`/${locale}/lessons/1`} className="hover:text-indigo transition-colors">{dict.footer.typingCourse}</a>
                  <a href={`/${locale}/tips`} className="hover:text-indigo transition-colors">{dict.footer.typingTips}</a>
                  <a href={`/${locale}/certificate`} className="hover:text-indigo transition-colors">{dict.footer.certificate}</a>
                  <a href={`/${locale}/pricing`} className="hover:text-indigo transition-colors">{dict.footer.pricing}</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.forTeachers}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <a href={`/${locale}/teachers`} className="hover:text-indigo transition-colors">{dict.footer.classroomLicenses}</a>
                  <a href={`/${locale}/teachers`} className="hover:text-indigo transition-colors">{dict.footer.progressReports}</a>
                  <a href={`/${locale}/teachers`} className="hover:text-indigo transition-colors">{dict.footer.lessonPlans}</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.forCompanies}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <a href={`/${locale}/companies`} className="hover:text-indigo transition-colors">{dict.footer.teamTraining}</a>
                  <a href={`/${locale}/companies`} className="hover:text-indigo transition-colors">{dict.footer.employeeReports}</a>
                  <a href={`/${locale}/companies`} className="hover:text-indigo transition-colors">{dict.footer.pricing}</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.resources}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <a href={`/${locale}/tips`} className="hover:text-indigo transition-colors">{dict.footer.blog}</a>
                  <a href={`/${locale}/help`} className="hover:text-indigo transition-colors">{dict.footer.helpCenter}</a>
                  <a href={`/${locale}/contact`} className="hover:text-indigo transition-colors">{dict.footer.contact}</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.legal}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <a href={`/${locale}/privacy`} className="hover:text-indigo transition-colors">{dict.footer.privacy}</a>
                  <a href={`/${locale}/terms`} className="hover:text-indigo transition-colors">{dict.footer.terms}</a>
                  <a href={`/${locale}/imprint`} className="hover:text-indigo transition-colors">{dict.footer.imprint}</a>
                </div>
              </div>
            </div>
            <div className="border-t border-zinc-200 dark:border-dark-border pt-6 flex items-center justify-between text-sm text-zinc-500">
              <p>&copy; {new Date().getFullYear()} Fast Forward <span className="text-indigo">&gt;&gt;</span> Typing</p>
              <ThemeToggle label={dict.footer.darkMode} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
