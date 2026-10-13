// TODO: TEMPORARY design-token preview, NOT the homepage.
// Replace this file with the real homepage (tracker #2).

const swatches = [
  { name: "bg", label: "Pearl ivory", className: "bg-bg" },
  { name: "surface", label: "Linen", className: "bg-surface" },
  { name: "text", label: "Warm ink", className: "bg-text" },
  { name: "text-muted", label: "Stone", className: "bg-text-muted" },
  { name: "accent", label: "Olive", className: "bg-accent" },
  { name: "gold", label: "Soft gold", className: "bg-gold" },
  { name: "border", label: "Sand", className: "bg-border" },
];

export default function TokenPreview() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-24 pt-36 md:px-8 md:pt-44">
      <p className="eyebrow">Beit Sahour · Bethlehem</p>
      <h1 className="mt-4 font-display text-5xl font-light leading-tight md:text-7xl">
        Made by hand in <em className="italic">Bethlehem.</em>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-text-muted">
        Design token preview: colors, fonts and type styles for the Foundation.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="button"
          className="rounded-brand bg-accent px-6 py-3 text-sm font-medium text-bg"
        >
          Add to bag
        </button>
        <a href="#" className="border-b border-text pb-1 text-sm font-medium">
          Discover the workshop →
        </a>
      </div>

      <hr className="my-16 border-border" />

      <p className="eyebrow">Colors</p>
      <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {swatches.map((s) => (
          <li key={s.name}>
            <div className={`h-20 rounded-brand border border-border ${s.className}`} />
            <p className="mt-2 text-sm font-medium">{s.label}</p>
            <p className="text-xs text-text-muted">--color-{s.name}</p>
          </li>
        ))}
      </ul>

      <hr className="my-16 border-border" />

      <p className="eyebrow">Type</p>
      <div className="mt-6 space-y-4">
        <p className="font-display text-4xl font-light">
          Cormorant Garamond Light, <em>and its italic</em>
        </p>
        <p className="text-base">
          Manrope for body text, prices and buttons. $129.00 · One of a kind
        </p>
      </div>
    </div>
  );
}
