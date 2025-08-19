import { skills } from "@/data/content";

export function Skills() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span key={s} className="tag rounded-md px-3 py-1 text-xs">
          {s}
        </span>
      ))}
    </div>
  );
}

