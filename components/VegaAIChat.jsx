"use client";
import React, { useState, useRef, useEffect } from "react";

const GOLD = "#C6A664";
const BOOKING = "https://calendar.app.google/MCoM4jfg2dWgypC47";

const QUALIFY_STEPS = [
  { key: "projectType", ask: "What are you looking for? (Brand, Website, AI, or a Combo)", quick: ["Brand", "Website", "AI", "Combo"] },
  { key: "budget", ask: "What budget range fits best? ($2.5k Sprint, $4.5k Growth, Custom)", quick: ["$2.5k Sprint", "$4.5k Growth", "Custom"] },
  { key: "timeline", ask: "When do you want to start? (ASAP, 2–4 weeks, 1–2 months)", quick: ["ASAP", "2–4 weeks", "1–2 months"] },
  { key: "email", ask: "Where can we send a brief + pricing? (email)", quick: [] }
];

function ChatBubble({ role, text }) {
  const isBot = role === "assistant";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${isBot ? "bg-white/10 text-white" : "bg-white text-black"}`}>
        {text}
      </div>
    </div>
  );
}

function Quick({ label, onClick }) {
  return (
    <button onClick={onClick} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white hover:border-white/40">
      {label}
    </button>
  );
}

export default function VegaAIChat() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "I am Vega — your design intelligence. Ask about branding, websites, or AI. Want to share a quick 60‑second brief?" }
  ]);
  const [input, setInput] = useState("");
  const [qualifying, setQualifying] = useState(false);
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState({ projectType: "", budget: "", timeline: "", email: "" });
  const boxRef = useRef(null);

  useEffect(() => { if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight; }, [messages, qualifying, step]);

  const push = (role, content) => setMessages((m) => [...m, { role, content }]);

  const startQualify = () => { setQualifying(true); setStep(0); push("assistant", QUALIFY_STEPS[0].ask); };
  const handleQuick = (v) => handleAnswer(v);

  const handleAnswer = async (value) => {
    const current = QUALIFY_STEPS[step];
    const key = current.key;
    const val = value.trim();
    setLead((l) => ({ ...l, [key]: val }));
    push("user", val);
    const next = step + 1;
    if (next < QUALIFY_STEPS.length) { setStep(next); push("assistant", QUALIFY_STEPS[next].ask); }
    else {
      setQualifying(false);
      push("assistant", "Perfect — summarizing your brief…");
      try {
        await fetch("/api/lead", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...lead, email: val, source: "chat-qualifier", timestamp: new Date().toISOString() }) });
        push("assistant", "Got it. Would you like to book a call now or just receive the brief by email?");
        push("assistant", "Tap Book to pick a time, or ask me anything else.");
      } catch { push("assistant", "Saved locally. You can still book a call now."); }
    }
  };

  async function send() {
    const value = input.trim();
    if (!value) return;
    setInput("");
    if (qualifying) { await handleAnswer(value); return; }
    const next = [...messages, { role: "user", content: value }];
    setMessages(next);
    try {
      const res = await fetch("/api/vega-chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const data = await res.json();
      if (data.error === "MISSING_OPENAI_KEY") { setMessages((m) => [...m, { role: "assistant", content: "Setup needed: add OPENAI_API_KEY to .env.local and restart the dev server." }]); return; }
      setMessages((m) => [...m, { role: "assistant", content: data.reply || "…" }]);
    } catch { setMessages((m) => [...m, { role: "assistant", content: "Sorry—temporary issue. Please try again." }]); }
  }

  const currentQuick = qualifying ? QUALIFY_STEPS[step].quick : ["Start 60‑second Brief", "Pricing", "Timeline", "Book Now"];
  const onQuickClick = (label) => {
    if (label === "Start 60‑second Brief") return startQualify();
    if (label === "Book Now") { if (typeof window !== "undefined") window.open(BOOKING, "_blank", "noopener"); return; }
    setInput(label); setTimeout(() => send(), 0);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-lg"
        style={{ background: open ? "rgba(0,0,0,0.85)" : "linear-gradient(90deg, var(--cyan-1), var(--cyan-2))", color: open ? "white" : "black" }}
      >
        {open ? "Close Chat" : "Vega AI"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
            <div className="text-sm font-medium text-white flex items-center gap-2">
              <img src="/mark-vega-being.png" alt="Vega" className="h-4 w-4 rounded-full" />
              Vega — AI Design Guide
            </div>
            <div className="flex items-center gap-2">
              <a href={BOOKING} target="_blank" rel="noopener" className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black hover:opacity-90">Book</a>
              <button onClick={startQualify} className="rounded-full border border-white/20 px-2.5 py-1 text-[11px] text-white hover:border-white/40">Brief</button>
              <span className="text-xs text-neutral-400">Online</span>
            </div>
          </div>
          <div ref={boxRef} className="max-h-80 space-y-2 overflow-y-auto bg-gradient-to-b from-transparent to-black/40 p-3">
            {messages.map((m, i) => (<ChatBubble key={i} role={m.role} text={m.content} />))}
            <div className="pt-2 flex flex-wrap gap-2">
              {currentQuick.map((q, i) => (<Quick key={i} label={q} onClick={() => (qualifying ? handleQuick(q) : onQuickClick(q))} />))}
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder={qualifying ? (["email"].includes(QUALIFY_STEPS[step].key) ? "you@company.com" : "Type your answer…") : "Ask about services, pricing, timelines…"} className="flex-1 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/30" />
            <button onClick={send} className="rounded-xl px-3 py-2 text-sm font-semibold text-black" style={{ background: "linear-gradient(90deg, var(--cyan-1), var(--cyan-2))" }}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
