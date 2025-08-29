import { Container

 } from "../ui/elements";export default function Process() {
		const steps = [
			{
				k: "01",
				t: "Discovery",
				d: "A 15-minute call to define goals, audience, and success metrics.",
			},
			{
				k: "02",
				t: "Design Sprint",
				d: "Rapid iterations on brand and layout; decisions in days, not weeks.",
			},
			{
				k: "03",
				t: "Build & QA",
				d: "Next.js build, performance tuning, and device testing.",
			},
			{
				k: "04",
				t: "Launch & Grow",
				d: "SEO, analytics, and optional AI + marketing add-ons.",
			},
		];
		return (
			<section className="bg-[color:var(--bg,#0b0b0b)] py-16">
				<Container>
					<div className="mb-8 text-center">
						<div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">
							Process
						</div>
						<h2 className="mt-2 text-3xl font-semibold text-white">
							Designed for speed and clarity
						</h2>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{steps.map((s, i) => (
							<div
								key={i}
								className="rounded-2xl border border-white/10 bg-white/5 p-5"
							>
								<div className="text-xs text-neutral-400">
									{s.k}
								</div>
								<div className="mt-1 text:white">{s.t}</div>
								<p className="mt-2 text-sm text-neutral-300">
									{s.d}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		);
 }