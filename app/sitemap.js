import { PROJECTS } from "../components/portfolioData";
export default function sitemap() {
	const base = "https://your-domain.com";
	const routes = [
		{ url: `${base}/`, lastModified: new Date() },
		{ url: `${base}/work`, lastModified: new Date() },
		...PROJECTS.map((p) => ({
			url: `${base}/work/${p.slug}`,
			lastModified: new Date(),
		})),
	];
	return routes;
}
