'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/elements";
import { PROJECTS } from "../information";

const metadata = { title: "Work — Vega Design Studio" };

export default function WorkIndex() {
  const [active, setActive] = useState("All");
  const services = Array.from(new Set(PROJECTS.flatMap(p => p.services)));
    const list = active === "All" ? PROJECTS : PROJECTS.filter(p => p.services.includes(active));
  

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-10">
        <Container>
          <div className="mb-6">
            <div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">work</div>
            <h1 className="mt-1 text-3xl font-semibold">Selected Projects</h1>
          </div>

          <div className="flex flex-wrap gap-2">
              <button onClick={()=>setActive("All")} className={`rounded-full px-3 py-1.5 text-xs ${active==='All'?'bg-white text-black':'border border-white/20 text-white hover:border-white/40'}`}>All</button>
              {services.map((s)=> (
                <button key={s} onClick={()=>setActive(s)} className={`rounded-full px-3 py-1.5 text-xs ${active===s?'bg-white text-black':'border border-white/20 text-white hover:border-white/40'}`}>{s}</button>
              ))}
            </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={p.img} alt={p.title} width={800} height={600} className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
                  <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{p.tag}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-medium text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
                  <div className="mt-4">
                    <Link href={`/work/${p.slug}`} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20">View Case</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
