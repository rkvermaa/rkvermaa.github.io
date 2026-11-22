export interface ProjectMedia {
	type: "video" | "image";
	/** Path under `public/`. */
	src: string;
	/** Still frame shown before a video plays. */
	poster?: string;
	alt?: string;
}

export interface Project {
	/** Used for the overlay id (`#project-<slug>`) and home-tile links. */
	slug: string;
	name: string;
	/** Public URL. Omit for work that has no shareable link — the row then
	 *  renders as plain text rather than a dead anchor. */
	href?: string;
	/** Full technology list. */
	tech: string[];
	/** Display override for the stack line; derived from `tech` when omitted. */
	stack?: string;
	/** Short status/category hint, e.g. "GenAI". */
	badge?: string;
	desc: string;
	year?: string;
	/** Surfaces on the home page. */
	featured?: boolean;
	/** e.g. "Launching soon", "In development", "Client work". */
	status?: string;
	/** Extra paragraphs shown in the project overlay. */
	details?: string[];
	/** Bullet points shown in the overlay. */
	highlights?: string[];
	/** Video or image on the right side of the overlay. Omit for a placeholder. */
	media?: ProjectMedia;
	/** Placeholder colour when there is no media (matches the home tile). */
	color?: string;
}

/** The muted one-line stack string shown next to a project name. */
export const stackLine = (project: Project): string =>
	project.stack ?? project.tech.slice(0, 4).join(" · ");

export const projects: Project[] = [
	{
		slug: "pcsadda",
		name: "PCSadda",
		badge: "Product",
		status: "Launching soon",
		featured: true,
		color: "#e4572e",
		tech: ["Django", "Django REST Framework", "PostgreSQL", "Next.js", "TypeScript", "LLM agents"],
		desc: "One place for State PCS preparation: verified previous-year questions in English and हिन्दी, adaptive practice, a live syllabus map and AI copilots for doubts and mains answers.",
		details: [
			"Aspirants for UPPSC, BPSC, MPPSC and the other State PCS exams juggle dozens of PDFs, apps and Telegram channels. PCSadda brings it into one bilingual workspace per exam, built first for Hindi-medium students.",
		],
		highlights: [
			"Every past paper, bilingual and verified, with worked explanations",
			"Adaptive practice that brings weak topics back more often",
			"Smart syllabus: a live coverage map weighted by what PYQs actually ask",
			"PCS Copilot: ask a doubt in English or हिन्दी, get grounded answers plus related PYQs",
			"Mains Copilot: upload a handwritten answer, get marks, examiner comments and a model answer",
			"Telegram Digest: the channels you follow, condensed into one exam-focused daily read",
		],
		media: {
			type: "video",
			src: "/projects/pcsadda-intro.mp4",
			poster: "/projects/pcsadda-poster.jpg",
			alt: "PCSadda intro video",
		},
	},
	{
		slug: "piecewise",
		name: "Piecewise",
		badge: "Product",
		status: "In development",
		featured: true,
		color: "#1a1a1a",
		tech: ["Python", "Agent workflows", "Skills", "MCP connectors"],
		desc: "AI agents on rails. Agents run through workflows your team defines and approves, with your own skills, connectors and LLM keys, so cost per run is predictable.",
		details: [
			"Most agent demos break in production because nothing bounds what the agent does or what it costs. Piecewise puts the agent inside a workflow the team has approved, step by step, so every run is reviewable and the spend is known up front.",
		],
	},
	{
		slug: "finance-ai",
		status: "Client work",
		color: "#2e6be6",
		name: "Conversational AI for Finance",
		badge: "GenAI",
		featured: true,
		tech: [
			"Python",
			"LangChain",
			"LangGraph",
			"GPT-4",
			"LlamaParse",
			"SQLAgent",
			"Vector DBs",
			"FastAPI",
		],
		desc: "A multi-agent conversational system integrated with QuickBooks, WooCommerce, Shopify and Authorize.net. Fifty-plus LangChain tools automate 90% of financial queries, expanding tool coverage fourfold at 94% accuracy.",
	},
	{
		slug: "upcl-analytics",
		status: "Client work",
		color: "#0f7b5f",
		name: "UPCL Smart Meter Analytics Platform",
		badge: "Data Engineering",
		featured: true,
		tech: ["Python", "ClickHouse", "MinIO", "Dremio", "Prefect", "PySpark"],
		desc: "An enterprise data lakehouse for 600,000+ smart meters processing 8 GB a day. Replaced a failing PostgreSQL architecture with MinIO, Dremio and ClickHouse, plus ML models for energy forecasting and tampering detection.",
	},
	{
		slug: "merchant-onboarding",
		status: "Client work",
		color: "#7a4fd6",
		name: "AI-Driven Merchant Onboarding Platform",
		badge: "GenAI",
		featured: true,
		tech: ["Python", "LangChain", "FastAPI", "LlamaParse", "Pydantic"],
		desc: "A generative-AI onboarding system that streamlines merchant registration across multiple payment processors, cutting form-filling from several minutes to a few seconds through intelligent autofill and adaptive question flows.",
	},
	{
		slug: "nps-topics",
		status: "Client work",
		name: "NPS-Based Topic Classification for Telecom",
		badge: "ML & Analytics",
		tech: ["PySpark", "Python", "Argo Workflows", "LDA", "Tableau", "NLP"],
		desc: "A topic classification system built on customer NPS feedback. LDA surfaces the recurring themes and a sentiment pipeline scores them, with the findings delivered through a Tableau dashboard.",
	},
	{
		slug: "vecv-service",
		status: "Client work",
		name: "Predictive Service Reminder System for VECV",
		badge: "Predictive Analytics",
		tech: ["Python", "Z-score", "Docker", "Kubernetes"],
		desc: "A model that forecasts scheduled service intervals from historical telematics data, automating calling-list generation and service categorisation. Service call volume rose 500% and conversions doubled.",
	},
	{
		slug: "daimler-repair",
		status: "Client work",
		name: "Repair Package Recommendation for Daimler",
		badge: "ML & NLP",
		tech: ["Python", "NLP", "Machine Learning"],
		desc: "A recommendation engine that standardises vehicle repair quality and streamlines claims. Historical claim data drives optimal repair-package suggestions, reducing false submissions and speeding up clearance.",
	},
];
