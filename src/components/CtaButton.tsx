import Link from "next/link";

type Variant = "primary" | "secondary" | "inverted" | "inverted-secondary";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  type?: "submit" | "button";
  arrow?: boolean;
  className?: string;
};

// One size for every marketing CTA so button pairs line up and labels
// never wrap onto two lines. Pair them in a `flex flex-wrap gap-3`
// container: a long label pushes the whole second button to the next
// row instead of breaking mid-label.
const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 px-5 py-2.5 text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200";

const variants: Record<Variant, string> = {
  primary: "border-transparent bg-indigo text-white shadow-lg shadow-indigo/25 hover:shadow-xl hover:shadow-indigo/30",
  secondary:
    "border-indigo text-indigo hover:bg-indigo/5 dark:text-white dark:border-white/30 dark:hover:bg-white/5",
  inverted: "border-transparent bg-white text-indigo shadow-lg hover:shadow-xl",
  "inverted-secondary": "border-white/30 text-white hover:bg-white/10",
};

const arrowColor: Record<Variant, string> = {
  primary: "text-electric-yellow",
  secondary: "text-indigo dark:text-electric-yellow",
  inverted: "text-indigo",
  "inverted-secondary": "text-electric-yellow",
};

export function CtaButton({ children, variant = "primary", href, type = "button", arrow, className = "" }: Props) {
  const showArrow = arrow ?? (variant === "primary" || variant === "inverted");
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {showArrow && (
        <span className={`${arrowColor[variant]} group-hover:translate-x-0.5 transition-transform`}>&gt;&gt;</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
