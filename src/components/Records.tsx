import { experiences, projects } from "@/data/content";
import { personal } from "@/data/content";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((b, i) => (
        <li key={i} className="relative pl-4 leading-[1.6] text-[0.9375rem]">
          <span
            className="absolute left-0 top-[0.62em] h-[3px] w-[3px] rounded-full bg-[var(--ink-soft)]"
            aria-hidden="true"
          />
          {b}
        </li>
      ))}
    </ul>
  );
}

export function Records() {
  return (
    <div className="pt-8 lg:pt-14">
      <p className="max-w-[62ch] text-[1.0625rem] leading-[1.65]">
        {personal.summary}
      </p>

      <hr className="rule mt-10 mb-2" />

      <section aria-labelledby="experience" className="py-8">
        <h2 id="experience" className="meta meta-ink mb-6">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6"
            >
              <p className="meta sm:pt-1">{exp.period}</p>
              <div>
                <h3 className="text-[1.0625rem] leading-snug">
                  {exp.role}
                  <span className="text-[var(--ink-soft)]">, {exp.company}</span>
                </h3>
                <Bullets items={exp.bullets} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="rule" />

      <section aria-labelledby="work" className="py-8">
        <h2 id="work" className="meta meta-ink mb-6">
          Selected work
        </h2>
        <div className="space-y-8">
          {projects.map((p) => (
            <article key={p.name}>
              <h3 className="text-[1.0625rem] leading-snug">
                {p.name}
                <span className="text-[var(--ink-soft)]">, {p.role}</span>
              </h3>
              <Bullets items={p.bullets} />
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mt-3 inline-block text-[0.9375rem]"
                >
                  {p.evidence ?? "Read more"}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
