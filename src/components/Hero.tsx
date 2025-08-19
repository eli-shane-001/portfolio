import { personal } from "@/data/content";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
          <p className="mt-5 leading-relaxed text-[var(--foreground)]/90">
            {personal.summary}
          </p>

          <div className="mt-6 grid sm:flex gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={personal.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <div className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {personal.location}
            </div>
            <div className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4" /> {personal.phone}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="glass rounded-2xl p-8">
            <div className="grid gap-3 text-sm text-[var(--muted)]">
              <div>Focused on SuiteScript 1.0/2.0/2.1, Restlets, SFTP automation.</div>
              <div>Experience in custom records, integrations, custom approvals, Automations.</div>
              <div>Strong in User Event, Client, Schedule, Map/Reduce, RestLet, and scripting best practices.</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

