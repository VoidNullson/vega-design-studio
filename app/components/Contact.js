
import { Container } from "../ui/elements";

export default function Contact() {
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
