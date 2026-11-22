export interface ExperienceItem {
	company: string;
	/** Company website; omit to render the name as plain text. */
	companyUrl?: string;
	role: string;
	location: string;
	/** Work-from-home role: shown with a small home icon. */
	remote?: boolean;
	/** `YYYY-MM` — sortable; formatted at render by `formatDateRange`. */
	start: string;
	/** `YYYY-MM`, or the literal `"present"`. */
	end: string | "present";
	summary: string;
	/** Concrete outcomes, rendered as a bullet list. */
	highlights?: string[];
	tech?: string[];
}

/** Newest first — pages render in array order. */
export const experience: ExperienceItem[] = [
	{
		company: "Bounteous",
		companyUrl: "https://www.bounteous.com",
		role: "Associate Manager, Data Science",
		location: "Work from home",
		remote: true,
		start: "2025-12",
		end: "present",
		summary: "Multi-agentic automation.",
		tech: ["Python", "Claude Agent SDK", "LangGraph", "Temporal"],
	},
	{
		company: "Passageway",
		role: "Lead Data Scientist",
		location: "Jaipur, India",
		start: "2025-08",
		end: "2025-12",
		summary:
			"Architected and deployed enterprise-scale data infrastructure and intelligent ML systems, building UPCL smart meter analytics that processes terabytes of data from more than 600,000 meters.",
		highlights: [
			"Redesigned the data architecture from a failing PostgreSQL setup into a scalable lakehouse on MinIO, Dremio and ClickHouse.",
			"Built ML models for energy forecasting and tampering detection across the meter fleet.",
		],
		tech: ["Python", "ClickHouse", "MinIO", "Dremio", "Prefect", "PySpark"],
	},
	{
		company: "Xaigi Technology",
		role: "Project Lead · GenAI Solution Architect",
		location: "Noida, India",
		start: "2024-01",
		end: "2025-08",
		summary:
			"Led development of AI-driven solutions and designed agent-based systems, building scalable architectures on LLMs and multi-agent frameworks to automate financial workflows.",
		highlights: [
			"Built a multi-agent conversational AI system integrated with QuickBooks, WooCommerce and Shopify, reaching 90% automation of financial queries.",
			"Raised answer accuracy from 55% to 94% while cutting response latency by 60%.",
			"Led a 15-member team and secured two enterprise projects off the back of a LangChain GenAI demo.",
		],
		tech: ["Python", "LangChain", "LangGraph", "GPT-4", "FastAPI", "Vector DBs"],
	},
	{
		company: "Ericsson",
		role: "Data Scientist",
		location: "Noida, India",
		start: "2021-12",
		end: "2023-12",
		summary:
			"Developed scalable machine learning and NLP solutions to improve telecom operations and customer experience — processing large-scale data, deploying models in production and driving insights through automated analytics pipelines.",
		highlights: [
			"Built a PySpark batch ETL pipeline on GCP processing roughly 1M rows every 15 minutes, orchestrated with Argo Workflows.",
			"Cut equipment maintenance costs by 30% using K-Means chronic-site detection.",
		],
		tech: ["PySpark", "GCP", "Argo Workflows", "NLP", "Tableau"],
	},
	{
		company: "ATCS (Nagarro)",
		role: "Data Scientist",
		location: "Jaipur, India",
		start: "2018-07",
		end: "2021-11",
		summary:
			"Built predictive models and intelligent systems to improve service operations, optimise maintenance workflows and support data-driven decisions. Mentored junior team members and worked with stakeholders to align analytics with business strategy.",
		highlights: [
			"Developed a predictive maintenance solution from telematics data that drove a 500% increase in service call volume and doubled conversions.",
		],
		tech: ["Python", "Machine Learning", "Docker", "Kubernetes"],
	},
	{
		company: "Bharat Sanchar Nigam Limited",
		role: "Junior Telecom Officer (JTO)",
		location: "Gujarat, India",
		start: "2010-05",
		end: "2016-06",
		summary:
			"Managed telecom operations, maintained infrastructure and kept network services running across rural and urban regions, alongside ERP-driven inventory operations and customer service initiatives.",
		highlights: [
			"Managed 12 rural and 1 urban telephone exchanges, keeping district-wide telecommunication services online.",
			"Maintained 3G and BTS towers, and led the district BSNL store to the highest sales in the Jamnagar region.",
		],
	},
];
