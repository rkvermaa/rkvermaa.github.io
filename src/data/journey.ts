export interface JourneyYear {
	year: number;
	/** Short headline for the year. */
	title: string;
	/** What happened, one line each. */
	events: string[];
}

/**
 * Year-by-year story, newest first. Each year gets an anchor (`#y2024`) on
 * /journey/, and the footer's year row links to whichever years appear here.
 */
export const journey: JourneyYear[] = [
	{
		year: 2026,
		title: "Building my own thing",
		events: [
			"Started building Piecewise, a platform for structured, cost-controlled AI agent workflows.",
			"Presented ODRMitra, an AI negotiation assistant for MSME disputes, at the Ministry of MSME in New Delhi.",
			"Became a co-inventor on Indian Patent 602309, from my M.Tech research at IIT Roorkee.",
			"Started Bug Hai Bhai, a dev-comedy channel on Instagram and YouTube.",
		],
	},
	{
		year: 2025,
		title: "Data at utility scale",
		events: [
			"Led the UPCL smart meter analytics platform at Passageway: a lakehouse for 600,000+ meters, plus forecasting and tampering-detection models.",
		],
	},
	{
		year: 2024,
		title: "Into agents",
		events: [
			"Joined Xaigi Technology as Project Lead and GenAI Solution Architect.",
			"Built a multi-agent system for finance that automated 90% of queries at 94% accuracy, and led a 15-member team.",
		],
	},
	{
		year: 2021,
		title: "Telecom, at scale",
		events: ["Joined Ericsson as a Data Scientist, building ML and NLP pipelines for telecom operations."],
	},
	{
		year: 2018,
		title: "Became a data scientist",
		events: [
			"Joined ATCS (Nagarro) in Jaipur, building predictive models for automotive service operations.",
		],
	},
	{
		year: 2016,
		title: "Back to studying",
		events: ["Left BSNL to do an M.Tech at IIT Roorkee."],
	},
	{
		year: 2010,
		title: "First job",
		events: [
			"Joined BSNL as a Junior Telecom Officer in Gujarat, running 12 rural telephone exchanges and a district's 3G and BTS towers.",
		],
	},
];
