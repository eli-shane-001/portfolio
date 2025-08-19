import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";

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
        © {new Date().getFullYear()} Mohammed Awais. All rights reserved. ·
        <a href="mailto:asharawais04@gmail.com" className="hover:underline ml-1">Email</a> ·
        <a href="https://www.linkedin.com/in/mohammed-awais-netsuite" target="_blank" rel="noreferrer" className="hover:underline ml-1">LinkedIn</a>
      </footer>
    </div>
  );
}
