import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, variant, children, className = "" }: ButtonProps) {
  const variantClass = styles[variant] ?? "";

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className={`${styles.btn} ${variantClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${styles.btn} ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
