import type { Metadata } from "next";
import "./globals.css";
import { FilmStrip } from "@/components/FilmStrip";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "சின்ன வீடு — Tamil Stage Skit",
  description:
    "A stage skit inspired by K. Bhagyaraj's 1985 Tamil classic Chinna Veedu — a story of vanity, wit, and the triumph of character over appearances.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <FilmStrip />

        <header className="border-b border-gold-500/40 py-5 sm:py-8 px-4 text-center"
          style={{ background: "linear-gradient(160deg, #0a0602 0%, #1a120b 100%)" }}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">🎬</span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-400 tracking-wide"
              style={{ textShadow: "0 2px 20px rgba(201,162,39,0.4)", fontFamily: "Georgia, serif" }}>
              சின்ன வீடு
            </h1>
            <span className="text-2xl sm:text-3xl" aria-hidden="true">🎬</span>
          </div>
          <p className="text-xs sm:text-sm mt-1" style={{ color: "#9e8a70", fontStyle: "italic" }}>
            Inspired by K. Bhagyaraj&apos;s 1985 Tamil Classic · Stage Skit
          </p>
          <div className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-yellow-100 text-xs font-bold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border"
            style={{ background: "rgba(139,26,26,0.8)", borderColor: "rgba(176,48,48,0.5)" }}>
            🎭 Stage Production
          </div>
        </header>

        <SiteNav />

        <main className="flex-1 max-w-4xl mx-auto w-full px-3 sm:px-4 py-6 sm:py-8 pb-20">
          {children}
        </main>

        <FilmStrip />
        <footer className="border-t text-center text-xs py-4 px-4"
          style={{ background: "#1a120b", borderColor: "#3a2a18", color: "#9e8a70" }}>
          சின்ன வீடு · Based on K. Bhagyaraj&apos;s 1985 Classic · Stage Skit Production
        </footer>
      </body>
    </html>
  );
}
