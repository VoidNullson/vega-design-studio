// "use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/app/components/NavBar";
import CaseSummary from "@/app/components/CaseSummary";
import BeforeAfter from "@/app/ui/BeforeAfter";
import { Container, CallToAction } from "@/app/ui/elements";
import { PROJECTS } from "@/app/information";

// const BeforeAfter = dynamic(() => import("@/ui/BeforeAfter"), { ssr: false });

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PROJECTS.find(x => x.slug === slug);
  if (!p) return { title: "Work – Vega Design Studio" };
  return {
    title: `${p.title} – Vega Design Studio`,
    description: p.blurb,
    openGraph: { title: p.title, description: p.blurb, images: [p.img] }
  };
}

export default async function CasePage({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white">
        <NavBar />
        <Container>
          <div className="pt-28">
            Not found. <Link href="/work" className="underline">Back to work</Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Container>
        <div className="pt-10 max-w-5xl">
          <Link href="/work" className="text-sm text-cyan-400 hover:underline">← Back to Work</Link>
          <h1 className="mt-4 text-3xl font-semibold">{project.title}</h1>
          <p className="mt-2 text-sm text-neutral-400">{project.tag}</p>

          {/* Hero image */}
          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src={project.img}
              alt={project.title}
              width={1600}
              height={900}
              priority
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
            />
          </div>

          {/* Narrative */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <CaseSummary
                tag={project.tag}
                blurb={project.blurb ?? project.overview}
                impact={Array.isArray(project.impact) ? project.impact : []}
                services={Array.isArray(project.process) ? project.services : project.services}
              />
              <p className="text-neutral-200">{project.overview}</p>
              <div><h2 className="text-xl font-semibold">Challenge</h2><p className="mt-2 text-neutral-300">{project.challenge}</p></div>
              <div><h2 className="text-xl font-semibold">Solution</h2><p className="mt-2 text-neutral-300">{project.solution}</p></div>
              <div>
                <h2 className="text-xl font-semibold">Process</h2>
                <ul className="mt-2 list-disc pl-6 text-neutral-300">
                  {project.process.map((s,i)=><li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Impact</h2>
                <ul className="mt-2 list-disc pl-6 text-neutral-300">
                  {project.impact.map((s,i)=><li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>

            {/* Optional sidebar */}
            <aside className="space-y-6">
              {project.beforeAfter && <BeforeAfter {...project.beforeAfter} />}
              <CallToAction title="Ready to ship something great?" blurb="We’ll map the scope, timeline, and budget in a quick intro call."/>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-neutral-400">Next Steps</div>
                <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
                   className="mt-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                  Start a Project
                </a>
              </div>
            </aside>
          </div>
          {/* Optional: a second CTA at the very bottom for mobile users */}
          <div className="mt-10 lg:hidden">
            <CallToAction />
          </div>

          {/* Gallery */}
          {project.gallery?.length ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold">Gallery</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.gallery.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
