import { SCENES } from "@/lib/skit-data";
import { SceneShell } from "@/components/SceneShell";
import { CharacterGrid } from "@/components/CharacterGrid";
import { Card } from "@/components/Card";

export default function OverviewPage() {
  const numberedScenes = SCENES.filter((s) => s.number !== null);
  const firstScene = numberedScenes[0];

  return (
    <SceneShell
      sceneNumber={null}
      title="Overview"
      nextHref={firstScene ? `/scene/${firstScene.slug}` : undefined}
      nextLabel={firstScene ? `Scene 1 — ${firstScene.title}` : undefined}
    >
      {/* Skit theme */}
      <Card title="Skit Theme" icon="🎭">
        <div style={{ color: "#9e8a70", lineHeight: 1.85, fontSize: "0.92rem" }}>
          <p className="mb-3">
            Based on the{" "}
            <strong style={{ color: "#f0c94a" }}>1985 Tamil cult classic Chinna Veedu</strong>,
            directed by and starring <strong style={{ color: "#e8dcc8" }}>K. Bhagyaraj</strong>.
            The film centres on{" "}
            <em>Chakrapani</em> — a man obsessed with his notion of ideal beauty — who feels
            cheated when fate gives him the wholesome but &ldquo;ordinary&rdquo; Chakkubai as his wife.
          </p>
          <p className="mb-3">
            Drawn to his sophisticated neighbour Banu, he nurtures an obsession and dreams of a
            &ldquo;Chinna Veedu&rdquo; (separate home). Chakkubai, armed with high emotional intelligence
            and razor-sharp wit, outmanoeuvres him at every turn, ultimately proving that character
            outlasts vanity.
          </p>
          <p className="font-semibold" style={{ color: "#e07b39" }}>
            This skit blends Bhagyaraj&apos;s signature humour with a timeless social message:
            looks fade, but goodness endures.
          </p>
        </div>
      </Card>

      {/* Characters */}
      <Card title="Cast of Characters" icon="🎭">
        <CharacterGrid />
      </Card>

      {/* Scenes at a glance — driven from SCENES data */}
      <Card title="Scenes at a Glance" icon="🎬">
        <div className="space-y-3">
          {numberedScenes.map((scene) => {
            const href = `/scene/${scene.slug}`;
            const isComingSoon = !!scene.comingSoon;
            return (
              <a
                key={scene.id}
                href={isComingSoon ? undefined : href}
                className={`flex items-start gap-4 p-4 rounded-lg border transition-all duration-150 ${
                  isComingSoon
                    ? "cursor-default opacity-60"
                    : "hover:border-gold-500/50 hover:-translate-y-0.5"
                }`}
                style={{ background: "#221a10", borderColor: "#3a2a18", textDecoration: "none" }}
              >
                <span
                  className="shrink-0 text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-full mt-0.5"
                  style={{ background: "#c9a227", color: "#0e0a05" }}
                >
                  {scene.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold" style={{ color: "#f0c94a" }}>
                      {scene.title}
                    </span>
                    {scene.duration && (
                      <span className="text-xs" style={{ color: "#e07b39" }}>
                        ⏱ {scene.duration}
                      </span>
                    )}
                    {isComingSoon && (
                      <span
                        className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded"
                        style={{ background: "#3a2a18", color: "#9e8a70" }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {scene.synopsis && (
                    <p className="text-sm mt-1 line-clamp-2" style={{ color: "#9e8a70" }}>
                      {scene.synopsis}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </Card>
    </SceneShell>
  );
}
