import { Container } from "../ui/elements";
import { BOOKING } from "../information";

export default function About() {
  return (
    <section id="about" className="bg-[color:var(--bg,#0b0b0b)] py-16">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">About</div>
            <h2 className="mt-2 text-3xl font-semibold text-white">Studio with a builder’s mindset</h2>
            <p className="mt-3 text-neutral-300">
              I’m Jacob, a designer-developer based in Los Angeles. Vega Design Studio exists to ship clean, modern, and effective experiences. I focus on high-value outcomes and fast iteration—no bloated timelines.
            </p>
            <p className="mt-3 text-neutral-300">
              Preferred stack: Next.js, Tailwind, Vercel. AI when it saves time or increases conversion.
            </p>
            <a href={BOOKING} target="_blank" rel="noopener" className="mt-5 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-90">Book a Call</a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-300">
              <div className="text-white">What I value</div>
              <ul className="mt-2 space-y-1">
                <li>• Clarity over noise</li>
                <li>• Design that sells</li>
                <li>• Fast feedback</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-300">
              <div className="text-white">Capabilities</div>
              <ul className="mt-2 space-y-1">
                <li>• Brand systems</li>
                <li>• Web apps</li>
                <li>• AI chat + automation</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
