import Link from "next/link";

type Variant = "primary" | "secondary" | "light";

type Props = {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary: "bg-navy text-cream hover:bg-navy-dark",
  secondary: "border border-navy text-navy hover:bg-navy hover:text-cream",
  light: "bg-cream text-navy hover:bg-cream-warm",
};

export function CTAButton({
  href = "/contact",
  variant = "primary",
  children,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-4 text-sm tracking-wide font-medium transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
