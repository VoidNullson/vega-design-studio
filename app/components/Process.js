import { Container

 } from "../ui/elements";export default function Process() {
		const steps = [
			{
				k: "01",
				t: "Discovery",
				d: "Define goals, audience, and success metrics.",
			},
			{
				k: "02",
				t: "Design Sprint",
				d: "Rapid iterations on brand, design, and business solutions; Path plan in days, not weeks.",
			},
			{
				k: "03",
				t: "Build & QA",
				d: "Build your solutions for review and approval",
			},
			{
				k: "04",
				t: "Launch & Grow",
				d: "Deploy you solutions. Monitor your retults. We offer support for all of our solutions.",
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
							Developed with speed and clarity
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