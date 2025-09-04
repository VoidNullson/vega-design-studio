import {Container} from '../ui/elements'
import { BOOKING } from '../information';

export default function Pricing() {
	const tiers = [
		{
			name: "Web Essentials",
			price: "$2,500",
			points: [
				"Modern Website with Advanced SEO",
				"Design & Brand Kit",
				"Marketing & Analytics",
				"Online Presence Optimization",
			],
			cta: "Start a sprint",
		},
		{
			name: "Online Storefront",
			price: "$4,500",
			points: [
				"E-commerce site",
				"Branding and Printed Material",
				"Marketing and Ad Campaign",
				"Site support",
			],
			cta: "Book discovery",
		},
		{
			name: "AI Agents and Tools",
			price: "$2,500 + $299/mo",
			points: [
        "Customer Service Representatives",
				"Customer - Product Liaison",
				"Task Workers",
				"Content Writers",
        "Save on man-hours with our limitless solutions",
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
						Bundle Examples
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-neutral-400">
						Packages will be tailored to each business's needs.
						Prices vary. Visit our Services page for general pricing. Payment plans are available.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{tiers.map((t, i) => (
						<div
							key={i}
							className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
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
								className="mt-auto inline-block rounded-full bg-white py-2 text-sm font-semibold text-black hover:opacity-90 text-center"
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
