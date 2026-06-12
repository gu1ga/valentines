// Decorative winding rail rendered as a fixed-position SVG behind the content.
export function Rail() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 1000"
    >
      <defs>
        <pattern
          id="ties"
          x="0"
          y="0"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <rect x="-6" y="6" width="14" height="2" fill="#b08a6a" opacity="0.45" />
        </pattern>
      </defs>
      <path
        d="M50 0 C 20 120, 80 240, 50 360 S 20 600, 50 720 S 80 900, 50 1000"
        stroke="url(#ties)"
        strokeWidth="9"
        fill="none"
      />
      <path
        d="M50 0 C 20 120, 80 240, 50 360 S 20 600, 50 720 S 80 900, 50 1000"
        stroke="#b23a48"
        strokeWidth="0.8"
        fill="none"
        strokeDasharray="2 4"
        opacity="0.55"
      />
    </svg>
  );
}
