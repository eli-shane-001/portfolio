import { projects } from "@/data/content";

export function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((p) => (
        <div key={p.name} className="glass rounded-xl p-5">
          <h3 className="text-lg font-semibold">
            {p.name} <span className="text-[var(--accent)]">—</span> {p.role}
          </h3>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm/6 text-[var(--foreground)]/90">
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

