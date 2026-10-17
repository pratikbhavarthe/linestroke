"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#222222", color: "#f3f7fc", fontFamily: "sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", textAlign: "center" }}>
          <div>
            <h1>Linestroke could not load.</h1>
            <p>Please try again.</p>
            <button type="button" onClick={reset} style={{ border: 0, borderRadius: "999px", padding: "0.8rem 1.25rem", background: "#c9e4ff", color: "#2b438d" }}>
              Reload page
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
