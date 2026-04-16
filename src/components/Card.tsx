interface CardProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
  accent?: boolean;
}

export function Card({ title, icon, children, accent = false }: CardProps) {
  return (
    <div
      className="rounded-xl border mb-5 overflow-hidden"
      style={{
        background: accent ? "rgba(224,123,57,0.06)" : "#1a120b",
        borderColor: accent ? "rgba(224,123,57,0.35)" : "#3a2a18",
      }}
    >
      {title && (
        <div
          className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 border-b text-xs font-extrabold tracking-[0.18em] uppercase"
          style={{
            borderColor: accent ? "rgba(224,123,57,0.25)" : "#3a2a18",
            color: accent ? "#e89a5c" : "#e07b39",
          }}
        >
          {icon && <span aria-hidden="true">{icon}</span>}
          {title}
        </div>
      )}
      <div className="px-4 sm:px-5 py-4">{children}</div>
    </div>
  );
}
