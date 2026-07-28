/**
 * German-flag motifs — the site's quietest brand signal.
 *
 * Used as a 4px rail above the header, a vertical spine on featured cards, and
 * a small chip beside the wordmark. Purely decorative, so always aria-hidden.
 */

/** Horizontal black/red/gold bar. Full-width by default. */
export const FlagRail = ({ className = "" }: { className?: string }) => (
  <div className={`flex h-1 w-full ${className}`} aria-hidden="true">
    <i className="flex-1 bg-[#1A1714]" />
    <i className="flex-1 bg-flag-red" />
    <i className="flex-1 bg-gold-bright" />
  </div>
);

/** Vertical black/red/gold spine, pinned to the left edge of a positioned parent. */
export const FlagSpine = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-y-0 left-0 flex w-1.5 flex-col ${className}`} aria-hidden="true">
    <i className="flex-1 bg-[#1A1714]" />
    <i className="flex-1 bg-flag-red" />
    <i className="flex-1 bg-gold-bright" />
  </div>
);

/** Small rounded flag chip for inline use next to text. */
export const FlagChip = ({ className = "" }: { className?: string }) => (
  <span
    className={`inline-flex h-3.5 w-6 shrink-0 overflow-hidden rounded-[3px] shadow-warm-sm ${className}`}
    aria-hidden="true"
  >
    <i className="flex-1 bg-[#1A1714]" />
    <i className="flex-1 bg-flag-red" />
    <i className="flex-1 bg-gold-bright" />
  </span>
);
