import { personal } from "@/data/content";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const btn =
  "inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

export function Hero() {
  return (
    <header id="about" className="container pt-16 md:pt-24">
      <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {personal.name}
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] mt-2">
            {personal.role}
          </p>
          <p className="mt-2 font-mono text-sm text-[var(--accent)]">
            {personal.tagline}
          </p>
          <p className="mt-5 leading-relaxed text-[var(--foreground)]/90">
            {personal.summary}
          </p>

          <div className="mt-6 grid sm:flex gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={btn}
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={btn}
            >
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
            <a href={`mailto:${personal.email}`} className={btn}>
              <Mail className="h-4 w-4" aria-hidden="true" /> Email
            </a>
            <a href={personal.resumeHref} download className={btn}>
              Download resume (PDF)
            </a>
          </div>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--ring)] px-3 py-1 text-xs text-[var(--foreground)]/85">
            <span
              className="h-2 w-2 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />
            {personal.availability}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <div className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {personal.location}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="glass rounded-2xl p-8">
            <ul className="grid gap-3 text-sm text-[var(--muted)]">
              {personal.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    ▸
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
