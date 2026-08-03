import { processSteps } from "@/data/process"

function ProcessList() {
  return (
    <ol className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((step) => (
        <li key={step.index} className="border-t border-border pt-6">
          <span className="font-mono text-meta text-primary">{step.index}</span>
          <h3 className="mt-3 font-display text-h3 font-medium text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-body text-muted-foreground">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  )
}

export { ProcessList }
