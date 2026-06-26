import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { KeyCharacter } from "@/components/KeyCharacter";
import { MobileMenu } from "@/components/MobileMenu";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jetbrains",
});

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

  const title = dict.meta.title;
  const description = dict.meta.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "de" ? "de_DE" : locale === "fr" ? "fr_FR" : "en_US",
      siteName: "Fast Forward >> Typing",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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
    <html lang={locale} className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        {locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="/en" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()` }} />
      </head>
      <body className="min-h-screen flex flex-col bg-lavender text-dark-text dark:bg-dark dark:text-white font-sans antialiased transition-colors">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-indigo focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-semibold">
          Skip to content
        </a>
        <header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-dark-border bg-white/80 dark:bg-dark/80 backdrop-blur-sm">
          <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 sm:px-6 py-3" aria-label="Main navigation">
            <Link href={`/${locale}`} className="text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap shrink-0">
              <span className="text-indigo">&gt;&gt;</span>Typing
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex items-center gap-1 text-sm font-medium">
                <Link href={`/${locale}/speed-test`} className="nav-keycap">
                  {dict.nav.typingTest}
                </Link>
                <Link href={`/${locale}/lessons`} className="nav-keycap">
                  {dict.nav.typingCourse}
                </Link>
                <Link href={`/${locale}/tips`} className="nav-keycap">
                  {dict.nav.typingTips}
                </Link>
              </div>
              <MobileMenu locale={locale} dict={dict} />
              <LanguageSwitcher currentLocale={locale as Locale} />
            </div>
          </nav>
        </header>
        <main id="main-content" className="pt-20 flex-1">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-dark-border mt-auto">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-8 text-sm">
              <div className="col-span-2 sm:col-span-1">
                <Link href={`/${locale}`} className="text-lg font-semibold tracking-tight">
                  <span className="text-indigo">&gt;&gt;</span>Typing
                </Link>
                <KeyCharacter pose="sitting" size={64} className="mt-3" />
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.learnTyping}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <Link href={`/${locale}/speed-test`} className="hover:text-indigo transition-colors">{dict.footer.typingTest}</Link>
                  <Link href={`/${locale}/lessons`} className="hover:text-indigo transition-colors">{dict.footer.typingCourse}</Link>
                  <Link href={`/${locale}/tips`} className="hover:text-indigo transition-colors">{dict.footer.typingTips}</Link>
                  <Link href={`/${locale}/certificate`} className="hover:text-indigo transition-colors">{dict.footer.certificate}</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.forTeachers}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <Link href={`/${locale}/teachers`} className="hover:text-indigo transition-colors">{dict.footer.classroomLicenses}</Link>
                  <Link href={`/${locale}/teachers`} className="hover:text-indigo transition-colors">{dict.footer.progressReports}</Link>
                  <Link href={`/${locale}/teachers`} className="hover:text-indigo transition-colors">{dict.footer.lessonPlans}</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.forCompanies}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <Link href={`/${locale}/companies`} className="hover:text-indigo transition-colors">{dict.footer.teamTraining}</Link>
                  <Link href={`/${locale}/companies`} className="hover:text-indigo transition-colors">{dict.footer.employeeReports}</Link>
                  <Link href={`/${locale}/companies`} className="hover:text-indigo transition-colors">{dict.footer.pricing}</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.tools}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <Link href={`/${locale}/tools/keyboard-layouts`} className="hover:text-indigo transition-colors">{dict.footer.keyboardLayouts}</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-dark-text dark:text-white mb-3">{dict.footer.resources}</p>
                <div className="flex flex-col gap-2 text-zinc-500">
                  <Link href={`/${locale}/tips`} className="hover:text-indigo transition-colors">{dict.footer.blog}</Link>
                  <Link href={`/${locale}/help`} className="hover:text-indigo transition-colors">{dict.footer.helpCenter}</Link>
                  <Link href={`/${locale}/contact`} className="hover:text-indigo transition-colors">{dict.footer.contact}</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-zinc-200 dark:border-dark-border pt-4 mb-4 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
              <Link href={`/${locale}/privacy`} className="hover:text-indigo transition-colors">{dict.footer.privacy}</Link>
              <span className="text-zinc-300 dark:text-dark-border">·</span>
              <Link href={`/${locale}/terms`} className="hover:text-indigo transition-colors">{dict.footer.terms}</Link>
              <span className="text-zinc-300 dark:text-dark-border">·</span>
              <Link href={`/${locale}/imprint`} className="hover:text-indigo transition-colors">{dict.footer.imprint}</Link>
            </div>
            <div className="flex items-center justify-between text-sm text-zinc-500">
              <p>&copy; {new Date().getFullYear()} Fast Forward <span className="text-indigo">&gt;&gt;</span> Typing</p>
              <ThemeToggle label={dict.footer.darkMode} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
