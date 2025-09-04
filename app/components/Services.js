
import { Container } from "@/ui/elements";

export default function Services() {
	const items = [
		{
			t: "Brand & Identity",
			d: "Premium identity and messaging that build trust and consistency across every touchpoint. Logos, brand kit, web/social templates.",
		},
		{
			t: "Web & Digital Experiences",
			d: "High-performance websites and apps designed for speed, scalability, and premium experience.",
		},
		{
			t: "AI Solutions",
			d: "AI that pays for itself. Capture more leads, resolve questions faster, and remove repetitive work.",
		},
		{
			t: "Marketing",
			d: "Social Media Campaigns, Ads, and SEO that generate qualified leads.",
		},
	];
	return (
		<section id="services" className="bg-[color:var(--bg,#0b0b0b)] py-16">
			<Container>
				<div className="mb-8 text-center">
					<div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">
						our expertise
					</div>
					<h2 className="mt-2 text-3xl font-semibold text-white">
						Everything you need to join the future
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-neutral-400">
						Engagements typically run 1–4 weeks with clear
						milestones and goal.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((s, i) => (
						<div
							key={i}
							className="rounded-2xl border border-white/10 bg-white/5 p-5"
						>
							<div className="text-white">{s.t}</div>
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