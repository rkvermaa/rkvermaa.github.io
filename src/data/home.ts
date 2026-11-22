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
		after: ", a platform for running AI agents through structured, cost-controlled workflows, as founder.",
		href: "#piecewise",
		color: "#1a1a1a",
	},
	{
		before: "Helping teams design and ship",
		name: "AI agents, RAG systems and LLM features",
		after: " as an independent consultant.",
		color: "#b83f1a",
		cta: { label: "Book a call", href: "mailto:rkverma87@gmail.com" },
	},
	{
		before: "Researching materials science with machine learning as a part-time PhD scholar at",
		name: "IIT Roorkee",
		after: ".",
		color: "#8c1d18",
	},
	{
		before: "Teaching aerospace engineering on the side, and writing about AI on",
		name: "Medium",
		after: ".",
		href: "https://medium.com/@rkverma87",
		color: "#2e6be6",
	},
	{
		before: "Making dev comedy on",
		name: "Bug Hai Bhai",
		after: ", short reels where a developer and his AI sidekick argue about code.",
		color: "#7a4fd6",
	},
];

export interface Tile {
	name: string;
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
		href: "#piecewise",
		bg: "#1a1a1a",
		fg: "#f2f2ef",
		icon: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><path d="M11 7h4a2 2 0 0 1 2 2v4"/>',
	},
	{ name: "PCSadda", href: "https://pcsadda.com", bg: "#e4572e", fg: "#ffffff", text: "PCS" },
	{
		name: "UPCL Analytics",
		bg: "#0f7b5f",
		fg: "#ffffff",
		icon: '<path d="M4 18V8M10 18V4M16 18v-6M22 18H2"/>',
	},
	{
		name: "Finance AI Agents",
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
		bg: "#7a4fd6",
		fg: "#ffffff",
		icon: '<path d="M5 12h14M12 5l7 7-7 7"/>',
	},
	{
		name: "Bug Hai Bhai",
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
}

export const life: LifeFact[] = [
	{
		title: "Based in Uttar Pradesh",
		detail: "India, working with teams worldwide",
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
		title: "Making dev comedy",
		detail: "Reels on Bug Hai Bhai",
		color: "#7a4fd6",
		icon: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M10 10l5 2.5-5 2.5z"/>',
	},
];
