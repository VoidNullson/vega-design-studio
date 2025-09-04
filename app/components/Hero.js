import { Container } from "@/ui/elements";
import { BRAND } from "@/information";

export function Hero() {
	return (
		<section
			id="about"
			className="relative isolate overflow-hidden bg-black"
		>
			{/* <img
				src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
				alt="Minimal workspace"
				className="absolute inset-0 h-full w-full object-cover opacity-10"
			/> */}
			<Container>
				<div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-3xl">
					<p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
						{BRAND.city} • Design • Marketing • Web • AI
					</p>
					<h1 className="text-4xl sm:text-6xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
						<span
							style={{
								background:
									"linear-gradient(90deg,#00FFFF,#00BFFF)",
								WebkitBackgroundClip: "text",
								backgroundClip: "text",
								color: "transparent",
							}}
						>
							Vega
						</span>{" "}
						— the future's North Star for Design & Innovation
					</h1>
					<p className="mt-4 text-neutral-300">
						From Branding and Websites to AI-powered tools and
						agents. We help businesses find what they're looking
						for.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<a
							href="#/work"
							className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:border-white/40"
						>
							See Our Work
						</a>
						<a
							href="https://calendar.app.google/MCoM4jfg2dWgypC47"
							target="_blank"
							rel="noopener"
							className="rounded-full px-5 py-2 text-sm font-semibold text-black"
							style={{ background: "#C6A664" }}
						>
							Book a Strategy Call
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
}
