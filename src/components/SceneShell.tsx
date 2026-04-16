import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface Props {
  sceneNumber: number | null;
  title: string;
  duration?: string;
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  children: React.ReactNode;
}

export function SceneShell({
  sceneNumber,
  title,
  duration,
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
  children,
}: Props) {
  return (
    <div className="scene-in">
      {/* Scene heading */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {sceneNumber !== null && (
          <span
            className="text-xs font-black tracking-[0.18em] uppercase px-3 py-1 rounded-full"
            style={{ background: "#c9a227", color: "#0e0a05" }}
          >
            Scene {sceneNumber}
          </span>
        )}
        <h2
          className="text-2xl sm:text-3xl font-bold"
          style={{ color: "#f0c94a" }}
        >
          {title}
        </h2>
        {duration && (
          <span
            className="flex items-center gap-1 text-xs font-semibold"
            style={{ color: "#e07b39" }}
          >
            <Clock size={13} />
            {duration}
          </span>
        )}
      </div>

      {children}

      {/* Prev / Next navigation */}
      <div className="flex justify-between mt-8 gap-3">
        {prevHref ? (
          <Link
            href={prevHref}
            className="flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-150 hover:bg-gold-500 hover:text-cinema-900 hover:border-gold-500 min-w-0"
            style={{
              background: "#1a120b",
              borderColor: "#3a2a18",
              color: "#e8dcc8",
            }}
          >
            <ChevronLeft size={16} className="shrink-0" />
            <span className="truncate max-w-[36vw] sm:max-w-none">{prevLabel ?? "Previous"}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextHref ? (
          <Link
            href={nextHref}
            className="flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-150 hover:bg-gold-500 hover:text-cinema-900 hover:border-gold-500 min-w-0"
            style={{
              background: "#1a120b",
              borderColor: "#3a2a18",
              color: "#e8dcc8",
            }}
          >
            <span className="truncate max-w-[36vw] sm:max-w-none">{nextLabel ?? "Next"}</span>
            <ChevronRight size={16} className="shrink-0" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
