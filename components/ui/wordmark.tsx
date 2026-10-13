import Link from "next/link";

type WordmarkProps = {
  className?: string;
};

// Text wordmark until Kai has a logo. On hover, an iridescent copy of the
// word fades in over the ink one, like light catching mother-of-pearl.
export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Sanctishell, home"
      className={`group relative inline-block font-display text-[1.75rem] font-normal leading-none tracking-[0.02em] ${className}`}
    >
      <span>Sanctishell</span>
      <span
        aria-hidden="true"
        className="nacre-text absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
      >
        Sanctishell
      </span>
    </Link>
  );
}
