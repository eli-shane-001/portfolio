import { Backmatter, Identity } from "@/components/Rail";
import { Records } from "@/components/Records";
import { ThemeToggle } from "@/components/ThemeToggle";

/* DOM order is the mobile reading order: identity, records, backmatter.
   Desktop re-places the same three blocks into a rail + records column with
   grid areas, so no `order` hacks and no announcement-order surprises. */
export default function Home() {
  return (
    <div className="mx-auto max-w-[1040px] px-5 sm:px-8">
      <div className="flex flex-col lg:grid lg:grid-cols-[260px_1fr] lg:grid-rows-[min-content_1fr] lg:gap-x-16 [grid-template-areas:'id'_'rec'_'back'] lg:[grid-template-areas:'id_rec''back_rec']">
        <div className="[grid-area:id]">
          <Identity />
        </div>
        <main className="print-block min-w-0 pt-8 pb-16 lg:[grid-area:rec] lg:pt-14 lg:pb-24">
          <Records />
        </main>
        <div className="[grid-area:back]">
          <Backmatter />
        </div>
      </div>

      <footer className="no-print border-t border-[var(--rule)] py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="meta">© {new Date().getFullYear()} Mohammed Awais</p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
