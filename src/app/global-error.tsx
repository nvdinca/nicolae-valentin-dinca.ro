"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ro">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f8f5f0", color: "#0c0c0c", padding: "2rem" }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.2em", opacity: 0.6 }}>EROARE CRITICĂ</p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "0.5rem" }}>
            Ceva nu a mers bine
          </h1>
          <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
            A apărut o problemă care a afectat întregul site. Poți încerca din nou.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1.5rem",
              background: "#0c0c0c",
              color: "#f8f5f0",
              border: "none",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Încearcă din nou
          </button>
        </div>
      </body>
    </html>
  );
}
