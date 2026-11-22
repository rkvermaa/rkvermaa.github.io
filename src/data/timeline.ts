/**
 * Life timeline for /life/ (like the timeline on anandchowdhary.com/life).
 * Newest first. Add personal milestones here too: moves, family, awards, talks.
 *
 * `date` is `YYYY-MM-DD`, `YYYY-MM` or `YYYY`; the page shows only as much as you give.
 * Sources for the entries below: résumé (May 2025), experience.ts, education.ts, journey.ts, Medium.
 */

export type TimelineKind = "milestone" | "work" | "education" | "publication" | "launch" | "writing";

export interface TimelineEvent {
	date: string;
	kind: TimelineKind;
	title: string;
	/** Optional extra line(s) under the title. */
	description?: string;
	href?: string;
}

export const timeline: TimelineEvent[] = [
	{
		date: "2026",
		kind: "launch",
		title: "Started building Piecewise",
		description: "A platform for running AI agents through structured, cost-controlled workflows.",
	},
	{
		date: "2026",
		kind: "launch",
		title: "Started Bug Hai Bhai",
		description: "A dev-comedy and AI-ML learning channel on Instagram and YouTube.",
	},
	{
		date: "2026",
		kind: "milestone",
		title: "Presented ODRMitra at the Ministry of MSME, New Delhi",
		description: "An AI negotiation assistant for MSME payment disputes.",
	},
	{
		date: "2026",
		kind: "milestone",
		title: "Became a co-inventor on Indian Patent 602309",
		description: "From my M.Tech research at IIT Roorkee.",
	},
	{
		date: "2026-04-15",
		kind: "writing",
		title: "My most-read story on Medium",
		description: "I Ran a GitHub Repo With 20K+ Stars on a Beauty Product. It Built My Entire Marketing Strategy.",
		href: "https://medium.com/stackademic/i-ran-a-github-repo-with-20k-stars-on-a-beauty-product-it-built-my-entire-marketing-strategy-7591d97c70a7",
	},
	{
		date: "2025-12",
		kind: "work",
		title: "Joined Bounteous as Associate Manager, Data Science",
	},
	{
		date: "2025-12-29",
		kind: "writing",
		title: "Published The Complete RAG Playbook in Towards AI",
		description: "A four-part series on retrieval-augmented generation.",
		href: "https://medium.com/towards-artificial-intelligence/the-complete-rag-playbook-part-1-building-your-first-rag-pipeline-a0c1a15440fa",
	},
	{
		date: "2025-08",
		kind: "work",
		title: "Joined Passageway as Lead Data Scientist",
		description: "Led the UPCL smart meter analytics platform: a lakehouse for 600,000+ meters.",
	},
	{
		date: "2025",
		kind: "education",
		title: "Started a part-time PhD at IIT Roorkee",
		description: "Mechanical & Industrial Engineering.",
	},
	{
		date: "2024-01",
		kind: "work",
		title: "Joined Xaigi Technology as Project Lead and GenAI Solution Architect",
		description: "Built multi-agent systems for finance and led a 15-member team.",
	},
	{
		date: "2021-12",
		kind: "work",
		title: "Joined Ericsson as a Data Scientist",
		description: "ML and NLP pipelines for telecom operations, in Noida.",
	},
	{
		date: "2018-07",
		kind: "work",
		title: "Joined ATCS (Nagarro) as a Data Scientist",
		description: "Predictive models for automotive service operations, in Jaipur.",
	},
	{
		date: "2018",
		kind: "education",
		title: "Completed M.Tech at IIT Roorkee",
		description: "Solid State Electronics Materials, Department of Physics.",
	},
	{
		date: "2018",
		kind: "publication",
		title: "Published a research paper with Elsevier",
		description:
			"Diameter and gap controlled fabrication of periodic SiMW/SiNW arrays: a broadband absorber for high-efficiency silicon solar cells. From my M.Tech research.",
	},
	{
		date: "2016",
		kind: "milestone",
		title: "Cleared GATE, left BSNL and joined IIT Roorkee",
		description: "Went back to study for an M.Tech after six years at BSNL.",
	},
	{
		date: "2010-05",
		kind: "work",
		title: "First job: Junior Telecom Officer at BSNL, posted in Jamnagar, Gujarat",
		description: "Ran 12 rural and 1 urban telephone exchanges, plus the district's 3G and BTS towers.",
	},
	{
		date: "2009",
		kind: "education",
		title: "Graduated with a B.Tech in Electronics & Communication",
		description: "UIET, CSJM University Kanpur.",
	},
	{
		date: "2005",
		kind: "education",
		title: "Joined UIET, CSJM University Kanpur for a B.Tech",
		description: "Electronics & Communication Engineering.",
	},
	{
		date: "2003",
		kind: "education",
		title: "Finished Class 12 at BNSD Inter College, Kanpur",
	},
	{
		date: "2001",
		kind: "education",
		title: "Finished Class 10 at St. Francis Xavier's High School, Kanpur",
	},
	{
		date: "1987",
		kind: "milestone",
		title: "Born in Kanpur, Uttar Pradesh",
	},
];
