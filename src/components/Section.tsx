import { PropsWithChildren } from "react";

export function Section({ id, title, children }: PropsWithChildren<{ id: string; title?: string }>) {
  return (
    <section id={id} className="container py-16 md:py-24">
      {title ? (
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          {title} <span className="text-[var(--accent)]">/</span>
        </h2>
      ) : null}
      <div className="grid gap-6">
        {children}
      </div>
    </section>
  );
}

