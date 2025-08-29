// "use client";
import { useMemo } from "react";
// import Navbar from "../components/Navbar";
import { Container } from "../../ui/elements";
// import { PROJECTS } from "../../components";
import Link from "next/link";

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


function BeforeAfter({ before, after, label }) {
  const id = useMemo(() => Math.random().toString(36).slice(2), []);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 my-6">
      <div className="mb-3 text-sm text-neutral-300">{label || 'Before / After'}</div>
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <img src={before} alt="before" className="absolute inset-0 h-full w-full object-cover" />
        <img id={id} src={after} alt="after" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: "inset(0 0 0 50%)" }} />
        <input type="range" min="0" max="100" defaultValue="50"
          onChange={(e)=>{ document.getElementById(id).style.clipPath = `inset(0 0 0 ${e.target.value}%)`; }}
          className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 w-[60%]" />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }));
}

export default async function CasePage({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) notFound();
  const processItems = Array.isArray(project.process) ? project.process : [];
  const impactItems =
    Array.isArray(project.impact) ? project.impact : project.impact ? [project.impact] : [];
  const overview = project.overview ?? project.blurb ?? "";

  return (
    <div className="min-h-screen bg-black text-white">
      <Container>
        <div className="pt-10 max-w-5xl">
          <Link href="/work" className="text-sm text-cyan-400 hover:underline">← Back to Work</Link>
          <h1 className="mt-4 text-3xl font-semibold">{project.title}</h1>
          <p className="mt-2 text-sm text-neutral-400">{project.tag}</p>
          <img src={project.img} alt={project.title} className="mt-6 rounded-2xl" />

          {/* Narrative */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {overview && <p className="text-neutral-200">{overview}</p>}
              <section>
                <h2 className="text-xl font-semibold">Challenge</h2>
                <p className="mt-2 text-neutral-300">{project.challenge}</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold">Solution</h2>
                <p className="mt-2 text-neutral-300">{project.solution}</p>
              </section>
                {processItems.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold">Process</h2>
                  <ul className="mt-2 list-disc pl-6 text-neutral-300">
                    {processItems.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </section>
              )}
              {impactItems.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold">Impact</h2>
                  <ul className="mt-2 list-disc pl-6 text-neutral-300">
                    {impactItems.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="space-y-6">
              {project.beforeAfter && <BeforeAfter {...project.beforeAfter} />}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-neutral-400">Next Steps</div>
                <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
                   className="mt-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                  Start a Project
                </a>
              </div>
            </aside>
          </div>

          {Array.isArray(project.gallery) && project.gallery.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold">Gallery</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.gallery.map((src, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                    <img src={src} className="h-full w-full object-cover" alt="" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
