import { Container, Section, Card  } from "@/ui/elements";

export default function Contact() {
  return (
		<section id="contact" className="bg-black py-16">
			<Container>
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-semibold text-white">
						Let’s Design Your Future
					</h2>
					<p className="mx-auto mt-2 max-w-2xl text-neutral-400">
						Schedule a strategy call and discover how Vega Design
						Studio can align your brand, technology, and growth.
					</p>
				</div>
				<div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-right">
					<Card className="mt-6 max-w-xl">
						<form
							action="https://formspree.io/f/your-id"
							method="POST"
							className="space-y-4"
						>
							<input
								name="name"
								required
								placeholder="Your name"
								className="w-full rounded-lg bg-white/5 p-3 outline-none"
							/>
							<input
								name="email"
								type="email"
								required
								placeholder="Email"
								className="w-full rounded-lg bg-white/5 p-3 outline-none"
							/>
							<textarea
								name="message"
								required
								placeholder="Project details"
								rows={5}
								className="w-full rounded-lg bg-white/5 p-3 outline-none"
							/>
							<button className="rounded-tl-2xl rounded-br-2xl bg-white px-6 py-2 text-black">
								Send
							</button>
						</form>
					</Card>
				</div>
			</Container>
			
		</section>
  );
}
