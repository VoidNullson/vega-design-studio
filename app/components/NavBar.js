'use client'
import Link from "next/link";
import { Container } from "@/ui/elements";
import { BRAND, BOOKING } from "@/information";

export default function NavBar() {
	return (
		<header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="h-18 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<img
							src="/logo-vega-agent.png"
							alt="Vega Design Studio"
							className="h-10 w-auto hidden sm:block"
						/>
						{/* <img
							src="/logo-vega-wordmark.png"
							alt="Vega Design Studio"
							className="h-10 w-auto hidden sm:block"
						/> */}
						<Link
							href="/"
							className="text-lg tracking-wide"
							style={{
								background:
									"linear-gradient(90deg,#00FFFF,#00BFFF)",
								WebkitBackgroundClip: "text",
								backgroundClip: "text",
								color: "transparent",
							}}
						>
							{BRAND.name} | AI
						</Link>
					</div>
					<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
						<Link href="/" className="hover:text-white">
							Home
						</Link>
						<Link href="/work" className="hover:text-white">
							Work
						</Link>
						<Link href="/services" className="hover:text-white">
							Services
						</Link>
						<Link href="/about" className="hover:text-white">
							About
						</Link>
						<Link href="/contact" className="hover:text-white">
							Contact
						</Link>
					</nav>
					<a
						href={BOOKING}
						target="_blank"
						rel="noopener"
						className="rounded-full bg-white text-black px-4 py-1.5 text-sm font-medium hover:opacity-90"
					>
						Book a Consultation
					</a>
				</div>
			</div>
		</header>
	);
}
