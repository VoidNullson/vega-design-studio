import { Container } from "@/ui/elements";

export default function Footer() {
	return (
		<footer className="border-t border-white/10 bg-black py-10 text-center text-xs text-neutral-400">
			<Container>
				<div>
					© {new Date().getFullYear()} Vega Design Studio • Los
					Angeles
				</div>
			</Container>
		</footer>
	);
}
