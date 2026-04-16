export function FilmStrip() {
  return (
    <div
      className="film-strip w-full flex items-center justify-start gap-0 overflow-hidden"
      style={{ height: 28 }}
      aria-hidden="true"
    >
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="shrink-0"
          style={{
            width: 14,
            height: 14,
            margin: "0 9px",
            borderRadius: 3,
            background: "#0e0a05",
            border: "2px solid #3a2a18",
          }}
        />
      ))}
    </div>
  );
}
