type PhotoSlotProps = {
  label: string; // what photo belongs here, e.g. "Jacob Qumsiyeh at his bench, 1980s"
  className?: string; // set the final aspect ratio here, e.g. "aspect-[4/5]"
};

// A reserved space for a real photo that doesn't exist yet (CLAUDE.md §2b, §7b).
// Sized at the final ratio, with a soft nacre glow so the layout still feels finished.
// TODO: replace with real photo. `npm run check:placeholders` lists every PhotoSlot.
export function PhotoSlot({ label, className = "" }: PhotoSlotProps) {
  return (
    <div
      role="img"
      aria-label={`Photo coming soon: ${label}`}
      className={`relative flex items-end overflow-hidden bg-surface ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_20%,var(--color-nacre-rose),transparent_55%),radial-gradient(ellipse_at_80%_75%,var(--color-nacre-aqua),transparent_55%),radial-gradient(ellipse_at_65%_25%,var(--color-nacre-lilac),transparent_50%)] opacity-30"
      />
      <p className="eyebrow relative p-5">Photo to come · {label}</p>
    </div>
  );
}
