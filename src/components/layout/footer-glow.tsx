// The Dia gradient is built from overlapping vertical bands. Their heights
// rise toward the centre, so the blurred top edges read as one broad dome.
// Keeping the source's 1271 x 599 coordinate system preserves that silhouette
// while `preserveAspectRatio="none"` lets it fill the responsive footer.
const bands = [
  { x: -16, height: 323 },
  { x: 125, height: 404 },
  { x: 266, height: 478 },
  { x: 407, height: 530 },
  { x: 549, height: 584 },
  { x: 689, height: 530 },
  { x: 830, height: 478 },
  { x: 971, height: 404 },
  { x: 1112, height: 323 },
] as const

function FooterGlow() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1271 599"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="footer-glow-blur"
          x="-46"
          y="0"
          width="1363"
          height="644"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="15" />
        </filter>
        <linearGradient id="footer-glow-fill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#4c4c35" />
          <stop offset="0.2" stopColor="#858839" />
          <stop offset="0.4" stopColor="#dfb836" />
          <stop offset="0.6" stopColor="#ffe270" />
          <stop offset="0.78" stopColor="#dcff3e" />
          <stop offset="1" stopColor="#dcff3e" stopOpacity="0" />
        </linearGradient>
      </defs>

      {bands.map(({ x, height }) => (
        <g key={x} filter="url(#footer-glow-blur)">
          <rect
            x={x}
            y={599 - height}
            width="175"
            height={height}
            fill="url(#footer-glow-fill)"
          />
        </g>
      ))}
    </svg>
  )
}

export { FooterGlow }
