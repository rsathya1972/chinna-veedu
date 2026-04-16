import { CHARACTERS } from "@/lib/skit-data";

export function CharacterGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CHARACTERS.map((char) => (
        <div
          key={char.id}
          className="rounded-xl p-4 border transition-transform hover:-translate-y-1 hover:border-gold-500/60 duration-200"
          style={{ background: "#221a10", borderColor: "#3a2a18" }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5" aria-hidden="true">
              {char.emoji}
            </span>
            <div>
              <div className="font-bold text-gold-400 text-base leading-tight">
                {char.name}
              </div>
              <div
                className="text-xs mt-0.5 mb-1"
                style={{ color: "#e07b39", fontStyle: "italic" }}
              >
                Played by {char.playedBy} · {char.tagline}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: "#c8b896" }}>
                {char.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
