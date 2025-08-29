"use client";
import React, { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio"
import { Hero } from "./components/Hero";
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// --- Shared ---
const CYAN = "#00FFFF";
function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}
const BOOKING = "https://calendar.app.google/MCoM4jfg2dWgypC47";
const BRAND = {
  name: "Vega Design Studio",
  city: "Los Angeles",
  gold: "#C6A664",
  dark: "#0B0B0B",
  mid: "#1A1A1A",
};


// --- Nav ---







export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <Services />
      <Pricing/>
      <Process/>
      <Portfolio/>
      <About/>
      <Contact />
      <Footer />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,255,255,0.08)]" />
    </div>
  );
}

// --- Work index with filters ---
// function WorkIndex() {
//   const [active, setActive] = useState("All");
//   const services = Array.from(new Set(PROJECTS.flatMap(p => p.services)));
//   const list = active === "All" ? PROJECTS : PROJECTS.filter(p => p.services.includes(active));
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <NavBar />
//       <div className="pt-24">
//         <Container>
//           <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
//             <div>
//               <div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">work</div>
//               <h1 className="mt-1 text-3xl font-semibold">Selected Projects</h1>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <button onClick={()=>setActive("All")} className={`rounded-full px-3 py-1.5 text-xs ${active==='All'?'bg-white text-black':'border border-white/20 text-white hover:border-white/40'}`}>All</button>
//               {services.map((s)=> (
//                 <button key={s} onClick={()=>setActive(s)} className={`rounded-full px-3 py-1.5 text-xs ${active===s?'bg-white text-black':'border border-white/20 text-white hover:border-white/40'}`}>{s}</button>
//               ))}
//             </div>
//           </div>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {list.map((p) => (
//               <article key={p.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
//                   <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{p.tag}</div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-base font-medium text-white">{p.title}</h3>
//                   <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
//                   <div className="mt-4 flex gap-3">
//                     <a href={`#/work/${p.slug}`} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:border-white/40">View Case</a>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }

// --- Case Study detail with Prev/Next + sticky CTA ---
// function CaseStudy({ slug, onBack }) {
//   const idx = PROJECTS.findIndex((x) => x.slug === slug);
//   const p = idx >= 0 ? PROJECTS[idx] : null;
//   const prev = idx > 0 ? PROJECTS[idx - 1] : PROJECTS[PROJECTS.length - 1];
//   const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : PROJECTS[0];

//   if (!p) {
//     return (
//       <div className="min-h-screen bg-black text-white">
//         <NavBar />
//         <Container>
//           <div className="pt-28">
//             <p className="text-neutral-400">Case study not found.</p>
//             <a href="#/work" onClick={onBack} className="mt-4 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40">← Back</a>
//           </div>
//         </Container>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="relative isolate h-[48vh] min-h-[360px] overflow-hidden">
//         <img src={p.hero} alt={p.title} className="absolute inset-0 h-full w-full object-cover opacity-40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//         <NavBar />
//         <Container>
//           <div className="relative z-10 pt-28">
//             <div className="text-xs uppercase tracking-widest text-neutral-300">case study</div>
//             <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{p.title}</h1>
//             <p className="mt-2 text-neutral-300">{p.tag}</p>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <a href="#/work" onClick={onBack} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40">← Back to Work</a>
//               <a href={`#/work/${prev.slug}`} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40">← Prev</a>
//               <a href={`#/work/${next.slug}`} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40">Next →</a>
//             </div>
//           </div>
//         </Container>
//       </div>

//       <Container>
//         <div className="grid gap-8 py-12 lg:grid-cols-3">
//           <div className="lg:col-span-2 space-y-6">
//             <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <h2 className="text-xl font-medium text-white">Challenge</h2>
//               <p className="mt-2 text-neutral-300">{p.challenge}</p>
//             </section>
//             <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <h2 className="text-xl font-medium text-white">Solution</h2>
//               <p className="mt-2 text-neutral-300">{p.solution}</p>
//             </section>
//             <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <h2 className="text-xl font-medium text-white">Impact</h2>
//               <p className="mt-2 text-neutral-300">{p.impact}</p>
//             </section>
//           </div>
//           <aside className="space-y-6">
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <div className="text-sm text-neutral-400">Services</div>
//               <ul className="mt-2 text-sm text-white/90 list-disc list-inside">
//                 {p.services.map((s, i) => (<li key={i}>{s}</li>))}
//               </ul>
//             </div>
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
//               <div className="text-sm text-neutral-400">Next Steps</div>
//               <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
//                  className="mt-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
//                 Start a Project
//               </a>
//             </div>
//           </aside>
//         </div>
//       </Container>

//       {/* Sticky CTA */}
//       <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
//          className="fixed bottom-6 right-6 z-40 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-xl hover:opacity-90">
//         Book a Call
//       </a>

//       <Footer />
//     </div>
//   );
// }

// --- Tiny chat stub (you can swap with your API version anytime) ---
// function ChatbotWidget() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "assistant", content: "I am Vega — your design intelligence. Ask about branding, websites, or AI. Want a 60-second brief?" }
//   ]);
//   const [input, setInput] = useState("");
//   const push = (r,c)=>setMessages(m=>[...m,{role:r,content:c}]);
//   async function send(){
//     const v=input.trim(); if(!v) return; setInput("");
//     push("user",v);
//     setTimeout(()=>push("assistant","Thanks! Want to book a quick strategy call?"),300);
//   }
//   return (
//     <>
//       <button
//         onClick={()=>setOpen(v=>!v)}
//         className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-lg"
//         style={{ background: open ? "rgba(0,0,0,0.85)" : "linear-gradient(90deg,#00FFFF,#00BFFF)", color: open?"white":"black" }}>
//         {open?"Close Chat":"Vega AI"}
//       </button>
//       {open && (
//         <div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl">
//           <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
//             <div className="text-sm font-medium text-white flex items-center gap-2">
//               <img src="/logo-vega-agent.png" alt="Vega" className="h-6 w-4 rounded-full" />
//               {/* <span className="inline-block h-2 w-2 rounded-full" style={{ background: CYAN }} />  */}
//               Vega — AI Design Guide
//             </div>
//             <div className="flex items-center gap-2">
//               <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
//                  className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black hover:opacity-90">Book</a>
//               <span className="text-xs text-neutral-400">Online</span>
//             </div>
//           </div>
//           <div className="max-h-80 space-y-2 overflow-y-auto bg-gradient-to-b from-transparent to-black/40 p-3">
//             {messages.map((m,i)=>(
//               <div key={i} className={`flex ${m.role==='assistant'?'justify-start':'justify-end'}`}>
//                 <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${m.role==='assistant'?'bg-white/10 text-white':'bg-white text-black'}`}>{m.content}</div>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3">
//             <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask about services, pricing, timelines…" className="flex-1 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/30"/>
//             <button onClick={send} className="rounded-xl px-3 py-2 text-sm font-semibold text-black" style={{ background: "linear-gradient(90deg,#00FFFF,#00BFFF)" }}>Send</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// --- Top-level Router ---
// export default function Router() {
//   const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.hash || '#/' : '#/');
//   useEffect(() => {
//     const onHash = () => setPath(window.location.hash || '#/');
//     window.addEventListener('hashchange', onHash);
//     return () => window.removeEventListener('hashchange', onHash);
//   }, []);

//   const match = path.match(/^#\/work\/([a-z0-9\-]+)/i);
//   if (match) return <CaseStudy slug={match[1]} onBack={() => (window.location.hash = '#/work')} />;
//   if (path === '#/work') return <WorkIndex />;
//   return (
//     <>
//       <Home />
//       <ChatbotWidget />
//     </>
//   );
// }
