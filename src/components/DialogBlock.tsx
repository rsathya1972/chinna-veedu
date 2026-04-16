"use client";

import { useState } from "react";
import type { ScriptSection, Language } from "@/lib/skit-data";

function StageDirectionRow({ text }: { text: string }) {
  return (
    <div
      className="flex gap-2 items-start text-sm rounded-lg px-4 py-3 mb-3 border"
      style={{
        color: "#e89a5c",
        fontStyle: "italic",
        background: "rgba(224,123,57,0.07)",
        borderColor: "rgba(224,123,57,0.2)",
        borderStyle: "dashed",
      }}
    >
      <span className="shrink-0 mt-px">📍</span>
      <span>{text}</span>
    </div>
  );
}

function DialogRow({
  speaker,
  lines,
  lang,
}: {
  speaker: { tanglish: string; tamil: string };
  lines: { tanglish: string; tamil: string };
  lang: Language;
}) {
  const isTamil = lang === "tamil";
  return (
    <div className="mb-4">
      <div
        className="text-xs font-bold tracking-widest uppercase mb-1.5"
        style={{ color: "#c9a227" }}
      >
        {isTamil ? speaker.tamil : speaker.tanglish}
      </div>
      <div
        className="rounded-r-lg px-3 sm:px-4 py-2.5 sm:py-3 border-l-[3px]"
        style={{
          background: "#221a10",
          borderColor: isTamil ? "#8b1a1a" : "#c9a227",
        }}
      >
        <p className="dialog-text" style={{ color: "#e8dcc8" }}>
          {isTamil ? lines.tamil : lines.tanglish}
        </p>
      </div>
    </div>
  );
}

export function ScriptSectionBlock({ section }: { section: ScriptSection }) {
  const [lang, setLang] = useState<Language>("tanglish");

  return (
    <div
      className="rounded-xl border mb-5"
      style={{ background: "#1a120b", borderColor: "#3a2a18" }}
    >
      {/* Section header */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b"
        style={{ borderColor: "#3a2a18" }}
      >
        <h3
          className="text-xs font-extrabold tracking-[0.18em] uppercase"
          style={{ color: "#e07b39" }}
        >
          📜 {lang === "tamil" ? section.title.tamil : section.title.tanglish}
        </h3>

        {/* Language switcher */}
        <div className="flex gap-1.5">
          {(["tanglish", "tamil"] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase border transition-all duration-150"
              style={
                lang === l
                  ? {
                      background: "#c9a227",
                      color: "#0e0a05",
                      borderColor: "#c9a227",
                    }
                  : {
                      background: "#221a10",
                      color: "#9e8a70",
                      borderColor: "#3a2a18",
                    }
              }
            >
              {l === "tanglish" ? "Tanglish" : "தமிழ்"}
            </button>
          ))}
        </div>
      </div>

      {/* Script content */}
      <div className="px-3 sm:px-5 py-4 sm:py-5">
        {section.blocks.map((block, i) => {
          if (block.type === "stage-direction") {
            return <StageDirectionRow key={i} text={block.text} />;
          }
          if (block.type === "divider") {
            return (
              <hr
                key={i}
                className="my-4"
                style={{ borderColor: "#3a2a18" }}
              />
            );
          }
          return (
            <DialogRow
              key={i}
              speaker={block.speaker}
              lines={block.lines}
              lang={lang}
            />
          );
        })}
      </div>
    </div>
  );
}
