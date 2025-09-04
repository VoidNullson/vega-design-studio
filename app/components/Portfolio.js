import { Container } from "../ui/elements";
import { PROJECTS } from "@/information"

export default function Portfolio() {
	return (
		<section id="work" className="relative bg-black py-20">
			<Container>
				<div className="mb-10 text-center">
					<div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">
						View our work
					</div>
					<h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
						When Creativity Meets Intelligence
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
										href={`/work/${p.slug}`}
										className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20"
									>
										View Case
									</a>
									<a
										href="/contact"
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
