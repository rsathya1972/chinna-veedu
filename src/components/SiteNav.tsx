"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { SCENES } from "@/lib/skit-data";

function buildItems() {
  return SCENES.map((scene) => ({
    href: scene.slug === "overview" ? "/" : `/scene/${scene.slug}`,
    short: scene.number !== null ? `Scene ${scene.number}` : "Overview",
    full:
      scene.number !== null
        ? `Scene ${scene.number} — ${scene.title}`
        : scene.title,
    comingSoon: !!scene.comingSoon,
  }));
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const items = buildItems();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const current = items.find((i) => isActive(i.href));

  return (
    <>
      {/* ── Desktop: horizontal tab strip (md+) ────────────────── */}
      <nav
        className="hidden md:block sticky top-0 z-50 border-b overflow-x-auto"
        style={{ background: "#1a120b", borderColor: "#3a2a18" }}
        aria-label="Scene navigation"
      >
        <div className="flex min-w-max">
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-150"
                style={{
                  color: active ? "#f0c94a" : "#9e8a70",
                  borderBottom: active
                    ? "3px solid #c9a227"
                    : "3px solid transparent",
                }}
              >
                {item.full}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ── Mobile: compact bar + dropdown (< md) ──────────────── */}
      <div
        className="md:hidden sticky top-0 z-50 border-b"
        style={{ background: "#1a120b", borderColor: "#3a2a18" }}
      >
        {/* Current scene bar */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 gap-3"
          aria-expanded={open}
          aria-label="Open scene navigation"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="shrink-0 text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{ background: "#c9a227", color: "#0e0a05" }}
            >
              {current?.short ?? "Menu"}
            </span>
            <span
              className="text-sm font-semibold truncate"
              style={{ color: "#f0c94a" }}
            >
              {current
                ? SCENES.find(
                    (s) =>
                      (s.slug === "overview" ? "/" : `/scene/${s.slug}`) ===
                      current.href
                  )?.title
                : "Navigate"}
            </span>
          </div>
          <span style={{ color: "#9e8a70" }} aria-hidden="true">
            {open ? <X size={18} /> : <Menu size={18} />}
          </span>
        </button>

        {/* Dropdown menu */}
        {open && (
          <div
            className="border-t"
            style={{ borderColor: "#3a2a18", background: "#0e0a05" }}
          >
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3 border-b text-sm font-semibold transition-colors"
                  style={{
                    borderColor: "#1a120b",
                    background: active ? "#221a10" : "transparent",
                    color: active ? "#f0c94a" : "#9e8a70",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="shrink-0 text-xs font-black tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{
                        background: active ? "#c9a227" : "#3a2a18",
                        color: active ? "#0e0a05" : "#9e8a70",
                      }}
                    >
                      {item.short}
                    </span>
                    <span>{SCENES.find((s) => (s.slug === "overview" ? "/" : `/scene/${s.slug}`) === item.href)?.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.comingSoon && (
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ background: "#2e2214", color: "#5a4228" }}
                      >
                        Soon
                      </span>
                    )}
                    {active && <ChevronRight size={14} style={{ color: "#c9a227" }} />}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
