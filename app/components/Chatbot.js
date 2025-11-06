import { useState } from "react";

export default function Chatbot() {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			role: "assistant",
			content:
				"I am Vega — your design intelligence. Ask about branding, websites, or AI. Want a 60-second brief?",
		},
	]);
	const [input, setInput] = useState("");
	const push = (r, c) => setMessages((m) => [...m, { role: r, content: c }]);
	async function send() {
		const v = input.trim();
		if (!v) return;
		setInput("");
		push("user", v);
		setTimeout(
			() =>
				push(
					"assistant",
					"Thanks! Want to book a quick strategy call?"
				),
			300
		);
	}
	return (
		<>
			<a
				href="tel:+12132600620"
				className="bg-white text-black fixed bottom-3 left-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-lg"
			>
				(213) 260-0620
			</a>
			<button
				onClick={() => setOpen((v) => !v)}
				className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-lg"
				style={{
					background: open
						? "rgba(0,0,0,0.85)"
						: "linear-gradient(90deg,#00FFFF,#00BFFF)",
					color: open ? "white" : "black",
				}}
			>
				{open ? "Close Chat" : "Vega AI"}
			</button>
			{open && (
				<div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl">
					<div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
						<div className="text-sm font-medium text-white flex items-center gap-2">
							<img
								src="/logo-vega-agent.png"
								alt="Vega"
								className="h-6 w-4 rounded-full"
							/>
							{/* <span className="inline-block h-2 w-2 rounded-full" style={{ background: CYAN }} />  */}
							Vega — AI Design Guide
						</div>
						<div className="flex items-center gap-2">
							<a
								href="https://calendar.app.google/MCoM4jfg2dWgypC47"
								target="_blank"
								rel="noopener"
								className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black hover:opacity-90"
							>
								Book
							</a>
							<span className="text-xs text-neutral-400">
								Online
							</span>
						</div>
					</div>
					<div className="max-h-80 space-y-2 overflow-y-auto bg-gradient-to-b from-transparent to-black/40 p-3">
						{messages.map((m, i) => (
							<div
								key={i}
								className={`flex ${
									m.role === "assistant"
										? "justify-start"
										: "justify-end"
								}`}
							>
								<div
									className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${
										m.role === "assistant"
											? "bg-white/10 text-white"
											: "bg-white text-black"
									}`}
								>
									{m.content}
								</div>
							</div>
						))}
					</div>
					<div className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3">
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && send()}
							placeholder="Ask about services, pricing, timelines…"
							className="flex-1 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-white/30"
						/>
						<button
							onClick={send}
							className="rounded-xl px-3 py-2 text-sm font-semibold text-black"
							style={{
								background:
									"linear-gradient(90deg,#00FFFF,#00BFFF)",
							}}
						>
							Send
						</button>
					</div>
				</div>
			)}
		</>
	);
}
