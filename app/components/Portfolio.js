import { Container } from "../ui/elements";

const PROJECTS = [
	{
		slug: "celestia",
		title: "Celestia — Luxury Brand System",
		tag: "Brand Identity • Packaging • Web",
		img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop",
		hero: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2400&auto=format&fit=crop",
		blurb: "A lifestyle brand reimagined with a modern wordmark, cyan-accent palette, and scalable design system across packaging and web.",
		challenge:
			"Celestia needed to elevate their brand to compete with luxury labels while staying fresh and modern.",
		solution:
			"We created a sleek identity system, packaging, and a responsive site with a minimal, premium aesthetic.",
		impact: "Unified aesthetic improved perceived value and recognition across channels.",
		services: ["Brand Identity", "Design System", "Website"],
	},
	{
		slug: "aurora-ai",
		title: "Aurora AI — SaaS Web Platform",
		tag: "Product Design • Next.js • AI Assistant",
		img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2000&auto=format&fit=crop",
		hero: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2400&auto=format&fit=crop",
		blurb: "A data visualization platform with a clean design language, fast UX, and an in-product AI assistant.",
		challenge:
			"Stand out in a crowded SaaS market and reduce onboarding friction.",
		solution:
			"We built a responsive Next.js app with clear IA and embedded an AI assistant for onboarding/support.",
		impact: "Higher activation and smoother adoption measured in week-1 retention.",
		services: ["Product Design", "Next.js", "AI Assistant"],
	},
	{
		slug: "stellar",
		title: "Stellar — Campaign & Landing System",
		tag: "Creative Direction • Web • Email",
		img: "https://images.unsplash.com/photo-1529336953121-ad5a5f57f2d7?q=80&w=2000&auto=format&fit=crop",
		hero: "https://images.unsplash.com/photo-1529336953121-ad5a5f57f2d7?q=80&w=2400&auto=format&fit=crop",
		blurb: "Multi-channel campaign with modular landing pages, ad creative, and AI-assisted email flows.",
		challenge:
			"Improve campaign performance and streamline asset production.",
		solution:
			"Crafted a modular landing system, ad kits, and AI-personalized email sequences.",
		impact: "Lead conversions up ~35% on comparable spend.",
		services: ["Creative Direction", "Landing Pages", "Email"],
	},
	{
		slug: "marina-luxe",
		title: "Marina Luxe Realty (Demo)",
		tag: "Luxury Real Estate • AI Concierge",
		img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2000&auto=format&fit=crop",
		hero: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2400&auto=format&fit=crop",
		blurb: "High-end real estate concept with boutique aesthetics and an AI concierge.",
		challenge:
			"Demonstrate how AI can elevate lead qualification in luxury real estate.",
		solution:
			"Boutique, high-contrast UI with a 24/7 AI concierge for inquiries.",
		impact: "Shows VDS’s AI-native approach for premium services.",
		services: ["Brand", "Website", "AI Concierge"],
	},
];

export default function Portfolio() {
	return (
		<section id="work" className="relative bg-black py-20">
			<Container>
				<div className="mb-10 text-center">
					<div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">
						selected work
					</div>
					<h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
						Where Creativity Meets Intelligence
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-neutral-300">
						A showcase of how design, technology, and AI come
						together to create impact.
					</p>
				</div>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{PROJECTS.map((p) => (
						<article
							key={p.slug}
							className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
						>
							<div className="relative h-48 w-full overflow-hidden">
								<img
									src={p.img}
									alt={p.title}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
									{p.tag}
								</div>
							</div>
							<div className="p-5">
								<h3 className="text-base font-medium text-white">
									{p.title}
								</h3>
								<p className="mt-2 text-sm text-neutral-300">
									{p.blurb}
								</p>
								<div className="mt-4 flex gap-3">
									<a
										href={`#/work/${p.slug}`}
										className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20"
									>
										View Case
									</a>
									<a
										href="#/contact"
										onClick={(e) => {
											e.preventDefault();
											document
												.getElementById("contact")
												?.scrollIntoView({
													behavior: "smooth",
												});
										}}
										className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:border-white/40"
									>
										Start Project
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
