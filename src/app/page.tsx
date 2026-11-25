import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { personal } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <footer className="container py-12 text-sm text-center text-[var(--muted)]">
        © {new Date().getFullYear()} {personal.name}. All rights reserved. ·{" "}
        <a href={`mailto:${personal.email}`} className="hover:underline">
          Email
        </a>{" "}
        ·{" "}
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
