import { education, personal, skills } from "@/data/content";

export function Identity() {
  return (
    <div className="pt-14 lg:pt-14">
      <h1 className="text-[2.6rem] leading-[1.05] font-normal tracking-[-0.02em]">
        {personal.name}
      </h1>
      <p className="mt-3 text-[1.0625rem] text-[var(--ink-soft)]">{personal.role}</p>

      <p className="mt-6 flex items-start gap-2">
        <span
          className="mt-[0.6em] h-[7px] w-[7px] shrink-0 rounded-full bg-[var(--accent)]"
          aria-hidden="true"
        />
        <span className="text-[0.9375rem] leading-snug">{personal.availability}</span>
      </p>

      <dl className="mt-8 space-y-2.5 text-[0.9375rem]">
        <div>
          <dt className="sr-only">Email</dt>
          <dd>
            <a href={`mailto:${personal.email}`} className="link">
              {personal.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">LinkedIn</dt>
          <dd>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">GitHub</dt>
          <dd>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Resume</dt>
          <dd>
            <a href={personal.resumeHref} download className="link">
              Resume (PDF)
            </a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Location</dt>
          <dd className="meta">{personal.location}</dd>
        </div>
      </dl>
    </div>
  );
}

/* Skills and education. Last on mobile, tucked under the identity block in
   the rail on desktop. */
export function Backmatter() {
  return (
    <div className="print-block pb-16 lg:pb-14">
      <hr className="rule" />

      <section aria-labelledby="rail-skills" className="mt-8">
        <h2 id="rail-skills" className="meta meta-ink">
          Skills
        </h2>
        <p className="mt-3 text-[0.9375rem] leading-[1.7] lg:text-[0.875rem] lg:leading-[1.6]">
          {skills.join(", ")}
        </p>
      </section>

      <hr className="rule mt-8" />

      <section aria-labelledby="rail-education" className="mt-8">
        <h2 id="rail-education" className="meta meta-ink">
          Education
        </h2>
        <div className="mt-3 space-y-4">
          {education.map((e) => (
            <div key={e.degree}>
              <p className="text-[0.9375rem] leading-snug">{e.degree}</p>
              <p className="meta mt-1">
                {e.school}, {e.period}
              </p>
              <p className="meta">{e.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
