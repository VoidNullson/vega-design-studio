"use client";
import React, { useEffect, useState } from "react";

// --- Shared ---
const CYAN = "#00FFFF";
function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

// --- Data ---
const PROJECTS = [
  {
    slug: "celestia",
    title: "Celestia — Luxury Brand System",
    tag: "Brand Identity • Packaging • Web",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop",
    hero: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2400&auto=format&fit=crop",
    blurb:
      "A lifestyle brand reimagined with a modern wordmark, cyan-accent palette, and scalable design system across packaging and web.",
    challenge:
      "Celestia needed to elevate their brand to compete with luxury labels while staying fresh and modern.",
    solution:
      "We created a sleek identity system, packaging, and a responsive site with a minimal, premium aesthetic.",
    impact:
      "Unified aesthetic improved perceived value and recognition across channels.",
    services: ["Brand Identity", "Design System", "Website"],
  },
  {
    slug: "aurora-ai",
    title: "Aurora AI — SaaS Web Platform",
    tag: "Product Design • Next.js • AI Assistant",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2000&auto=format&fit=crop",
    hero: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2400&auto=format&fit=crop",
    blurb:
      "A data visualization platform with a clean design language, fast UX, and an in-product AI assistant.",
    challenge:
      "Stand out in a crowded SaaS market and reduce onboarding friction.",
    solution:
      "We built a responsive Next.js app with clear IA and embedded an AI assistant for onboarding/support.",
    impact:
      "Higher activation and smoother adoption measured in week-1 retention.",
    services: ["Product Design", "Next.js", "AI Assistant"],
  },
  {
    slug: "stellar",
    title: "Stellar — Campaign & Landing System",
    tag: "Creative Direction • Web • Email",
    img: "https://images.unsplash.com/photo-1529336953121-ad5a5f57f2d7?q=80&w=2000&auto=format&fit=crop",
    hero: "https://images.unsplash.com/photo-1529336953121-ad5a5f57f2d7?q=80&w=2400&auto=format&fit=crop",
    blurb:
      "Multi-channel campaign with modular landing pages, ad creative, and AI-assisted email flows.",
    challenge:
      "Improve campaign performance and streamline asset production.",
    solution:
      "Crafted a modular landing system, ad kits, and AI-personalized email sequences.",
    impact:
      "Lead conversions up ~35% on comparable spend.",
    services: ["Creative Direction", "Landing Pages", "Email"],
  },
  {
    slug: "marina-luxe",
    title: "Marina Luxe Realty (Demo)",
    tag: "Luxury Real Estate • AI Concierge",
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2000&auto=format&fit=crop",
    hero: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2400&auto=format&fit=crop",
    blurb:
      "High-end real estate concept with boutique aesthetics and an AI concierge.",
    challenge:
      "Demonstrate how AI can elevate lead qualification in luxury real estate.",
    solution:
      "Boutique, high-contrast UI with a 24/7 AI concierge for inquiries.",
    impact:
      "Shows VDS’s AI-native approach for premium services.",
    services: ["Brand", "Website", "AI Concierge"],
  },
];

// --- Nav ---
function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
      <Container>
        <div className="h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-vega-agent.png" alt="Vega Design Studio" className="h-10 w-auto hidden sm:block" /><img src="/logo-vega-wordmark.png" alt="Vega Design Studio" className="h-10 w-auto hidden sm:block" />
            {/* <span className="text-sm tracking-wide text-white">Vega Design Studio</span> */}
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-sm tracking-wide text-white">Vega Design Studio</span>
          </div> */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#/" className="hover:text-white">Home</a>
            <a href="#/work" className="hover:text-white">Work</a>
            <a href="#/contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});}} className="hover:text-white">Contact</a>
          </nav>
          <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
             className="rounded-full bg-white text-black px-4 py-1.5 text-sm font-medium hover:opacity-90">
            Book a Consultation
          </a>
        </div>
      </Container>
    </header>
  );
}

// --- Sections (Home) ---
function Hero() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
        alt="Minimal workspace"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <Container>
        <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-3xl">
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Guided by <span style={{background:"linear-gradient(90deg,#00FFFF,#00BFFF)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>Vega</span> — the North Star for Design & Innovation
          </h1>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-300/70 to-sky-400/70" />
          

          <p className="mt-4 text-neutral-300">
            We help ambitious brands shine brighter — from identity and websites to AI-powered tools built for growth.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#/work" className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:border-white/40">See Our Work</a>
            <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
               className="rounded-full px-5 py-2 text-sm font-semibold text-black" style={{ background: "#C6A664" }}>
              Book a Strategy Call
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  const items = [
    { t: "Brand & Identity", d: "Logos, visual systems, and storytelling that position you with elegance and authority." },
    { t: "Web & Digital Experiences", d: "High-performance websites and apps designed for speed, scalability, and seamless UX." },
    { t: "AI Integration", d: "Practical AI assistants, automations, and content systems where they drive the most value." },
    { t: "Growth & Launch", d: "Landing pages, analytics, and ongoing optimization for measurable results." },
  ];
  return (
    <section id="services" className="bg-black py-16">
      <Container>
        <div className="mb-8 text-center">
          <div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">our expertise</div>
          <h2 className="mt-2 text-3xl font-semibold text-white">Full-service studio, powered by AI</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white">{s.t}</div>
              <p className="mt-2 text-sm text-neutral-300">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PortfolioGrid() {
  return (
    <section id="work" className="relative bg-black py-20">
      <Container>
        <div className="mb-10 text-center">
          <div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">selected work</div>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Where Creativity Meets Intelligence</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-300">A showcase of how design, technology, and AI come together to create impact.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{p.tag}</div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
                <div className="mt-4 flex gap-3">
                  <a href={`#/work/${p.slug}`} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20">View Case</a>
                  <a href="#/contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});}} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:border-white/40">Start Project</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-black py-16">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Let’s Design Your Future</h2>
          <p className="mx-auto mt-2 max-w-2xl text-neutral-400">
            Schedule a strategy call and discover how Vega Design Studio can align your brand, technology, and growth.
          </p>
        </div>
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
             className="inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-90">Book a Strategy Call</a>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-center text-xs text-neutral-400">
      <Container>
        <div>© {new Date().getFullYear()} Vega Design Studio • Los Angeles</div>
      </Container>
    </footer>
  );
}



function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <Services />
      <PortfolioGrid />
      <Contact />
      <Footer />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,255,255,0.08)]" />
    </div>
  );
}

// --- Work index with filters ---
function WorkIndex() {
  const [active, setActive] = useState("All");
  const services = Array.from(new Set(PROJECTS.flatMap(p => p.services)));
  const list = active === "All" ? PROJECTS : PROJECTS.filter(p => p.services.includes(active));
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <div className="pt-24">
        <Container>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="uppercase tracking-[0.25em] text-[11px] text-neutral-400">work</div>
              <h1 className="mt-1 text-3xl font-semibold">Selected Projects</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={()=>setActive("All")} className={`rounded-full px-3 py-1.5 text-xs ${active==='All'?'bg-white text-black':'border border-white/20 text-white hover:border-white/40'}`}>All</button>
              {services.map((s)=> (
                <button key={s} onClick={()=>setActive(s)} className={`rounded-full px-3 py-1.5 text-xs ${active===s?'bg-white text-black':'border border-white/20 text-white hover:border-white/40'}`}>{s}</button>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{p.tag}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-medium text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={`#/work/${p.slug}`} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:border-white/40">View Case</a>
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

// --- Case Study detail with Prev/Next + sticky CTA ---
function CaseStudy({ slug, onBack }) {
  const idx = PROJECTS.findIndex((x) => x.slug === slug);
  const p = idx >= 0 ? PROJECTS[idx] : null;
  const prev = idx > 0 ? PROJECTS[idx - 1] : PROJECTS[PROJECTS.length - 1];
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : PROJECTS[0];

  if (!p) {
    return (
      <div className="min-h-screen bg-black text-white">
        <NavBar />
        <Container>
          <div className="pt-28">
            <p className="text-neutral-400">Case study not found.</p>
            <a href="#/work" onClick={onBack} className="mt-4 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40">← Back</a>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate h-[48vh] min-h-[360px] overflow-hidden">
        <img src={p.hero} alt={p.title} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <NavBar />
        <Container>
          <div className="relative z-10 pt-28">
            <div className="text-xs uppercase tracking-widest text-neutral-300">case study</div>
            <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{p.title}</h1>
            <p className="mt-2 text-neutral-300">{p.tag}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#/work" onClick={onBack} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40">← Back to Work</a>
              <a href={`#/work/${prev.slug}`} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40">← Prev</a>
              <a href={`#/work/${next.slug}`} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40">Next →</a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid gap-8 py-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-medium text-white">Challenge</h2>
              <p className="mt-2 text-neutral-300">{p.challenge}</p>
            </section>
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-medium text-white">Solution</h2>
              <p className="mt-2 text-neutral-300">{p.solution}</p>
            </section>
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-medium text-white">Impact</h2>
              <p className="mt-2 text-neutral-300">{p.impact}</p>
            </section>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-neutral-400">Services</div>
              <ul className="mt-2 text-sm text-white/90 list-disc list-inside">
                {p.services.map((s, i) => (<li key={i}>{s}</li>))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-neutral-400">Next Steps</div>
              <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
                 className="mt-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                Start a Project
              </a>
            </div>
          </aside>
        </div>
      </Container>

      {/* Sticky CTA */}
      <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
         className="fixed bottom-6 right-6 z-40 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-xl hover:opacity-90">
        Book a Call
      </a>

      <Footer />
    </div>
  );
}

// --- Tiny chat stub (you can swap with your API version anytime) ---
function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "I am Vega — your design intelligence. Ask about branding, websites, or AI. Want a 60-second brief?" }
  ]);
  const [input, setInput] = useState("");
  const push = (r,c)=>setMessages(m=>[...m,{role:r,content:c}]);
  async function send(){
    const v=input.trim(); if(!v) return; setInput("");
    push("user",v);
    setTimeout(()=>push("assistant","Thanks! Want to book a quick strategy call?"),300);
  }
  return (
    <>
      <button
        onClick={()=>setOpen(v=>!v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-lg"
        style={{ background: open ? "rgba(0,0,0,0.85)" : "linear-gradient(90deg,#00FFFF,#00BFFF)", color: open?"white":"black" }}>
        {open?"Close Chat":"Vega AI"}
      </button>
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
            <div className="text-sm font-medium text-white flex items-center gap-2">
              <img src="/logo-vega-agent.png" alt="Vega" className="h-6 w-4 rounded-full" />
              {/* <span className="inline-block h-2 w-2 rounded-full" style={{ background: CYAN }} />  */}
              Vega — AI Design Guide
            </div>
            <div className="flex items-center gap-2">
              <a href="https://calendar.app.google/MCoM4jfg2dWgypC47" target="_blank" rel="noopener"
                 className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black hover:opacity-90">Book</a>
              <span className="text-xs text-neutral-400">Online</span>
            </div>
          </div>
          <div className="max-h-80 space-y-2 overflow-y-auto bg-gradient-to-b from-transparent to-black/40 p-3">
            {messages.map((m,i)=>(
              <div key={i} className={`flex ${m.role==='assistant'?'justify-start':'justify-end'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${m.role==='assistant'?'bg-white/10 text-white':'bg-white text-black'}`}>{m.content}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask about services, pricing, timelines…" className="flex-1 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/30"/>
            <button onClick={send} className="rounded-xl px-3 py-2 text-sm font-semibold text-black" style={{ background: "linear-gradient(90deg,#00FFFF,#00BFFF)" }}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

// --- Top-level Router ---
export default function Router() {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.hash || '#/' : '#/');
  useEffect(() => {
    const onHash = () => setPath(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const match = path.match(/^#\/work\/([a-z0-9\-]+)/i);
  if (match) return <CaseStudy slug={match[1]} onBack={() => (window.location.hash = '#/work')} />;
  if (path === '#/work') return <WorkIndex />;
  return (
    <>
      <Home />
      <ChatbotWidget />
    </>
  );
}
