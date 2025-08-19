import { experiences } from "@/data/content";

export function Experience() {
  return (
    <div className="grid gap-4">
      {experiences.map((exp) => (
        <div key={exp.company} className="glass rounded-xl p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                {exp.role} <span className="text-[var(--accent)]">@</span> {exp.company}
              </h3>
              <p className="text-sm text-[var(--muted)]">{exp.period}</p>
            </div>
          </div>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm/6 text-[var(--foreground)]/90">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

