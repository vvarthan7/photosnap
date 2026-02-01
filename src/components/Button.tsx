import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonColorScheme = "dark" | "light";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="43"
    height="14"
    className="ml-4"
  >
    <g fill="none" fillRule="evenodd" stroke="currentColor">
      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
    </g>
  </svg>
);

const Button = ({
  children,
  variant = "primary",
  colorScheme = "dark",
  href,
  className = "",
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "text-preset-7 uppercase cursor-pointer transition-all duration-300";

  const variantStyles: Record<
    ButtonVariant,
    Record<ButtonColorScheme, string>
  > = {
    primary: {
      dark: "bg-neutral-950 text-neutral-0 px-6 py-3 hover:bg-neutral-300 hover:text-neutral-950",
      light: "bg-neutral-0 text-neutral-950 px-6 py-3 hover:bg-neutral-300",
    },
    secondary: {
      dark: "bg-transparent text-neutral-950 px-6 py-3 border border-neutral-950 hover:bg-neutral-950 hover:text-neutral-0",
      light:
        "bg-transparent text-neutral-0 px-6 py-3 border border-neutral-0 hover:bg-neutral-0 hover:text-neutral-950",
    },
    link: {
      dark: "inline-flex items-center text-neutral-950 hover:underline underline-offset-4",
      light:
        "inline-flex items-center text-neutral-0 hover:underline underline-offset-4",
    },
  };

  const styles = `${baseStyles} ${variantStyles[variant][colorScheme]} ${className}`;

  const content = (
    <>
      {children}
      {variant === "link" && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={styles}>
      {content}
    </button>
  );
};

export default Button;
