import { education } from "@/data/content";

export function Education() {
  return (
    <div className="grid gap-4">
      {education.map((e) => (
        <div key={e.degree} className="glass rounded-xl p-5">
          <h3 className="text-lg font-semibold">{e.degree}</h3>
          <p className="text-sm text-[var(--muted)]">{e.school} · {e.period}</p>
          <p className="mt-2 text-sm text-[var(--foreground)]/90">{e.detail}</p>
        </div>
      ))}
    </div>
  );
}

