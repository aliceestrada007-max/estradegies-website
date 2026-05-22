type Variant = "cream" | "navy" | "stone";
type Padding = "default" | "hero" | "compact";

const variants: Record<Variant, string> = {
  cream: "bg-cream",
  navy: "bg-navy text-cream",
  stone: "bg-stone",
};

const paddings: Record<Padding, string> = {
  default: "py-20 md:py-28",
  hero: "py-28 md:py-40 lg:py-44",
  compact: "py-14 md:py-20",
};

export function Section({
  children,
  variant = "cream",
  padding = "default",
  className = "",
  id,
}: {
  children: React.ReactNode;
  variant?: Variant;
  padding?: Padding;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      <div className={`mx-auto max-w-6xl px-6 lg:px-10 ${paddings[padding]}`}>
        {children}
      </div>
    </section>
  );
}
