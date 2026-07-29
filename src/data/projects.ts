export interface Project {
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
}

/** The muted one-line stack string shown next to a project name. */
export const stackLine = (project: Project): string =>
	project.stack ?? project.tech.slice(0, 4).join(" · ");

export const projects: Project[] = [
	{
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
		name: "UPCL Smart Meter Analytics Platform",
		badge: "Data Engineering",
		featured: true,
		tech: ["Python", "ClickHouse", "MinIO", "Dremio", "Prefect", "PySpark"],
		desc: "An enterprise data lakehouse for 600,000+ smart meters processing 8 GB a day. Replaced a failing PostgreSQL architecture with MinIO, Dremio and ClickHouse, plus ML models for energy forecasting and tampering detection.",
	},
	{
		name: "AI-Driven Merchant Onboarding Platform",
		badge: "GenAI",
		featured: true,
		tech: ["Python", "LangChain", "FastAPI", "LlamaParse", "Pydantic"],
		desc: "A generative-AI onboarding system that streamlines merchant registration across multiple payment processors, cutting form-filling from several minutes to a few seconds through intelligent autofill and adaptive question flows.",
	},
	{
		name: "NPS-Based Topic Classification for Telecom",
		badge: "ML & Analytics",
		tech: ["PySpark", "Python", "Argo Workflows", "LDA", "Tableau", "NLP"],
		desc: "A topic classification system built on customer NPS feedback. LDA surfaces the recurring themes and a sentiment pipeline scores them, with the findings delivered through a Tableau dashboard.",
	},
	{
		name: "Predictive Service Reminder System for VECV",
		badge: "Predictive Analytics",
		tech: ["Python", "Z-score", "Docker", "Kubernetes"],
		desc: "A model that forecasts scheduled service intervals from historical telematics data, automating calling-list generation and service categorisation. Service call volume rose 500% and conversions doubled.",
	},
	{
		name: "Repair Package Recommendation for Daimler",
		badge: "ML & NLP",
		tech: ["Python", "NLP", "Machine Learning"],
		desc: "A recommendation engine that standardises vehicle repair quality and streamlines claims. Historical claim data drives optimal repair-package suggestions, reducing false submissions and speeding up clearance.",
	},
];
