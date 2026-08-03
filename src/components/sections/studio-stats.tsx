const STATS = [
  { label: "Years in practice", value: "10+" },
  { label: "Programs delivered", value: "40+" },
  { label: "Industries served", value: "6" },
]

interface StudioStatsProps {
  className?: string
}

function StudioStats({ className }: StudioStatsProps) {
  return (
    <dl className={className}>
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center">
          <dt className="font-mono text-meta uppercase tracking-(--text-meta--letter-spacing) text-muted-foreground">
            {stat.label}
          </dt>
          <dd className="mt-2 font-display text-h2 font-medium text-primary">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export { StudioStats }
