import {Container} from '../ui/elements'
import { BOOKING } from '../information';

export default function Pricing() {
	const tiers = [
		{
			name: "One‑Week Sprint",
			price: "$2,500",
			points: [
				"3-page site",
				"Logo refresh",
				"Basic SEO",
				"Launch assets",
			],
			cta: "Start a sprint",
		},
		{
			name: "Growth Kit",
			price: "$4,500",
			points: [
				"5–7 page site",
				"Brand kit",
				"SEO + Analytics",
				"30-day launch support",
			],
			cta: "Book discovery",
		},
		{
			name: "AI Advantage",
			price: "$2,500 + $299/mo",
			points: [
				"AI website chat",
				"Listing writer",
				"Market reports",
				"Monthly content",
			],
			cta: "Add AI",
		},
	];
	return (
		<section id="pricing" className="bg-black py-16">
			<Container>
				<div className="mb-8 text-center">
					<div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">
						Pricing
					</div>
					<h2 className="mt-2 text-3xl font-semibold text-white">
						Clear packages, real outcomes
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-neutral-400">
						Most projects close in 1–4 weeks. Payment plans
						available.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{tiers.map((t, i) => (
						<div
							key={i}
							className="rounded-2xl border border-white/10 bg-white/5 p-6"
						>
							<div className="text-white">{t.name}</div>
							<div className="mt-2 text-3xl font-semibold text-white">
								{t.price}
							</div>
							<ul className="mt-4 space-y-2 text-sm text-neutral-300">
								{t.points.map((p, j) => (
									<li key={j}>• {p}</li>
								))}
							</ul>
							<a
								href={BOOKING}
								target="_blank"
								rel="noopener"
								className="mt-5 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
							>
								{t.cta}
							</a>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
