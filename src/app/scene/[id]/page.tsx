import { notFound } from "next/navigation";
import { SCENES } from "@/lib/skit-data";
import { SceneShell } from "@/components/SceneShell";
import { Card } from "@/components/Card";
import { ScriptSectionBlock } from "@/components/DialogBlock";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return SCENES.filter((s) => s.number !== null).map((s) => ({ id: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const scene = SCENES.find((s) => s.slug === id);
  if (!scene) return {};
  return {
    title: scene.number !== null
      ? `Scene ${scene.number}: ${scene.title} — சின்ன வீடு`
      : `${scene.title} — சின்ன வீடு`,
  };
}

export default async function ScenePage({ params }: Props) {
  const { id } = await params;
  const scene = SCENES.find((s) => s.slug === id);
  if (!scene || scene.number === null) notFound();

  const sceneIndex = SCENES.findIndex((s) => s.slug === id);
  const prev = sceneIndex > 0 ? SCENES[sceneIndex - 1] : null;
  const next = sceneIndex < SCENES.length - 1 ? SCENES[sceneIndex + 1] : null;

  const prevHref = prev
    ? prev.slug === "overview"
      ? "/"
      : `/scene/${prev.slug}`
    : undefined;
  const nextHref = next ? `/scene/${next.slug}` : undefined;

  return (
    <SceneShell
      sceneNumber={scene.number}
      title={scene.title}
      duration={scene.duration}
      prevHref={prevHref}
      prevLabel={prev ? (prev.number !== null ? `Scene ${prev.number} — ${prev.title}` : prev.title) : undefined}
      nextHref={nextHref}
      nextLabel={next ? (next.number !== null ? `Scene ${next.number} — ${next.title}` : undefined) : undefined}
    >
      {/* Synopsis */}
      {scene.synopsis && (
        <Card title="Scene Overview" icon="🎬">
          <p style={{ color: "#9e8a70", lineHeight: 1.8, fontSize: "0.92rem" }}>
            {scene.synopsis}
          </p>
        </Card>
      )}

      {/* Reference video */}
      {scene.videoEmbedId && (
        <Card title="Reference Video" icon="🎥">
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{ paddingBottom: "56.25%", background: "#0e0a05" }}
          >
            <iframe
              src={`https://drive.google.com/file/d/${scene.videoEmbedId}/preview`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title={`Scene ${scene.number} reference video`}
            />
          </div>
        </Card>
      )}

      {/* Production notes */}
      {scene.productionNotes && scene.productionNotes.length > 0 && (
        <Card title="How We're Adapting This Scene" icon="🎭">
          <div className="space-y-4">
            {scene.productionNotes.map((note, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: "#c9a227", color: "#0e0a05" }}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#f0c94a" }}>
                    {note.heading}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#9e8a70" }}>
                    {note.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Script sections */}
      {scene.scriptSections?.map((section) => (
        <ScriptSectionBlock key={section.id} section={section} />
      ))}
    </SceneShell>
  );
}
