export function Container({ children }) {
	return (
		<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
	);
}
export function Section({ children, className = "" }) {
	return (
		<section className={`py-16 sm:py-24 ${className}`}>{children}</section>
	);
}
export function Card({ children, className = "" }) {
	return (
		<div
			className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${className}`}
		>
			{children}
		</div>
	);
}