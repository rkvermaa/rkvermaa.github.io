/** Content for the home page: the /now list, project tiles and life facts. */

export interface NowItem {
	/** Text before the highlighted name. */
	before: string;
	/** Highlighted name, shown bold with a small coloured mark. */
	name: string;
	/** Text after the name. */
	after: string;
	href?: string;
	/** Mark colour (CSS colour). */
	color: string;
	/** Optional call-to-action link shown at the end. */
	cta?: { label: string; href: string };
}

export const now: NowItem[] = [
	{
		before: "Building",
		name: "Piecewise",
		after: ", a side project for running AI agents through structured, cost-controlled workflows.",
		href: "#piecewise",
		color: "#1a1a1a",
	},
	{
		before: "Helping teams ship",
		name: "AI agents that hold up in production",
		after:
			": agentic workflows, multi-agent systems, agent harnesses, skills, MCP integrations and RAG.",
		color: "#b83f1a",
		cta: { label: "Book a call", href: "/book/" },
	},
	{
		before: "Creating a full AI-ML course on",
		name: "Bug Hai Bhai",
		after: ", from classical machine learning to modern AI solutions. Coming soon on YouTube.",
		href: "https://www.youtube.com/@bug_hai_bhai",
		color: "#e62117",
	},
];

export interface Tile {
	name: string;
	/** Slug in projects.ts: the tile opens that project's overlay instead of a link. */
	project?: string;
	href?: string;
	/** Tile background. */
	bg: string;
	/** Icon stroke/fill colour. */
	fg: string;
	/** Inner SVG markup on a 24×24 viewBox (stroke icons). */
	icon?: string;
	/** Short text shown instead of an icon. */
	text?: string;
	/** Draw a hairline border (for light tiles). */
	outline?: boolean;
}

export const tiles: Tile[] = [
	{
		name: "Piecewise",
		project: "piecewise",
		bg: "#1a1a1a",
		fg: "#f2f2ef",
		icon: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/>',
	},
	{ name: "PCSadda", project: "pcsadda", bg: "#e4572e", fg: "#ffffff", text: "PCS" },
	{
		name: "UPCL Analytics",
		project: "upcl-analytics",
		bg: "#0f7b5f",
		fg: "#ffffff",
		icon: '<path d="M4 18V8M10 18V4M16 18v-6M22 18H2"/>',
	},
	{
		name: "Finance AI Agents",
		project: "finance-ai",
		bg: "#2e6be6",
		fg: "#ffffff",
		icon: '<path d="M4 5h16v10H8l-4 4z"/>',
	},
	{
		name: "ODRMitra",
		href: "https://github.com/rkvermaa/ODRMitra",
		bg: "#f2b705",
		fg: "#1a1a1a",
		icon: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/>',
	},
	{
		name: "Merchant Onboarding",
		project: "merchant-onboarding",
		bg: "#7a4fd6",
		fg: "#ffffff",
		icon: '<path d="M5 12h14M12 5l7 7-7 7"/>',
	},
	{
		name: "Bug Hai Bhai",
		href: "https://www.youtube.com/@bug_hai_bhai",
		bg: "#ffffff",
		fg: "#e4572e",
		outline: true,
		icon: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M10 10l5 2.5-5 2.5z"/>',
	},
];

export interface LifeFact {
	title: string;
	detail: string;
	color: string;
	/** Inner SVG markup on a 24×24 viewBox. */
	icon: string;
	/** Replace `detail` in the browser with live data (the static text stays as the fallback). */
	live?: "india-time";
	/** Optional link for the title. */
	href?: string;
}

export const life: LifeFact[] = [
	{
		title: "Based in Uttar Pradesh",
		detail: "India, working with teams worldwide",
		live: "india-time",
		color: "#e4572e",
		icon: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
	},
	{
		title: "14+ years in tech",
		detail: "From telecom exchanges to AI agents",
		color: "#2e6be6",
		icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
	},
	{
		title: "Co-inventor on a patent",
		detail: "Indian Patent 602309, IIT Roorkee",
		color: "#0f7b5f",
		icon: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/>',
	},
	{
		title: "Part-time PhD scholar",
		detail: "Materials science with ML, IIT Roorkee",
		color: "#8c1d18",
		icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
	},
	{
		title: "Writing on Medium",
		detail: "About AI and technology",
		href: "https://medium.com/@rkverma139",
		color: "#2e6be6",
		icon: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
	},
	{
		title: "Making dev comedy",
		detail: "Reels on Bug Hai Bhai",
		href: "https://www.instagram.com/bug_hai_bhai/",
		color: "#7a4fd6",
		icon: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M10 10l5 2.5-5 2.5z"/>',
	},
	{
		title: "Published research paper",
		detail: "Silicon nanowire solar absorbers, Elsevier",
		color: "#f2a300",
		icon: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
	},
	{
		title: "M.Tech, IIT Roorkee",
		detail: "Solid State Electronics Materials, 2016–18",
		color: "#c2185b",
		icon: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
	},
];
