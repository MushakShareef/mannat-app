type MediaPlaceholderProps = {
  type?: "image" | "video";
  label: string;
  ratio?: string; // e.g. "aspect-[4/5]", "aspect-video"
  className?: string;
};

/**
 * Visual placeholder standing in for real media.
 * Replace by dropping a file in /public and swapping this
 * component for a Next.js <Image /> or <video> tag —
 * see the README for exact instructions.
 */
export default function MediaPlaceholder({
  type = "image",
  label,
  ratio = "aspect-[4/5]",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-sm border border-gold/30 bg-panel ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold-soft">
          {type === "video" ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="5" width="14" height="14" rx="2" />
              <path d="M16 9.5 22 6v12l-6-3.5" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          )}
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-ivory-dim">
          {type} placeholder
        </p>
        <p className="font-display text-sm italic text-ivory-dim">{label}</p>
      </div>
      <div className="absolute inset-0 border border-dashed border-gold/20 m-2 rounded-sm" />
    </div>
  );
}
