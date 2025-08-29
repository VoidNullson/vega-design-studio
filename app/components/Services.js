
import { Container } from "../ui/elements";

export default function Services() {
	const items = [
		{
			t: "Brand & Identity",
			d: "Logos, visual systems, and storytelling that position you with elegance and authority.Logos, typography, color systems, and brand kits designed to look premium and convert.",
		},
		{
			t: "Web & Digital Experiences",
			d: "High-performance websites and apps designed for speed, scalability, and premium experience.",
		},
		{
			t: "AI Integration",
			d: "Practical AI assistants, automations, and content systems where they drive the most value.",
		},
		{
			t: "Launch Marketing",
			d: "Social media, online advertisement, and analytics.",
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