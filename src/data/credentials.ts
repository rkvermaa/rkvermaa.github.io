export interface Certification {
	title: string;
	issuer: string;
	/** Free-form, e.g. "2024" or "Mar 2024". Omit to hide. */
	date?: string;
	/** Verification link. Omit to render as plain text. */
	href?: string;
	credentialId?: string;
}

export interface Publication {
	title: string;
	venue: string;
	year?: string;
	authors?: string[];
	href?: string;
	doi?: string;
}

export const certifications: Certification[] = [
	{
		title: "Core Designer Certificate",
		issuer: "Dataiku",
	},
	{
		title: "ML Practitioner Certificate",
		issuer: "Dataiku",
	},
	{
		title: "BCSS Machine Learning — Experienced Level Assessment",
		issuer: "Ericsson",
	},
	{
		title: "ChatGPT Masterclass — Build Solutions and Apps with ChatGPT",
		issuer: "Udemy",
	},
];

export const publications: Publication[] = [
	{
		title:
			"Diameter and gap controlled fabrication of periodic SiMW/SiNW arrays: A broadband absorber for high efficiency silicon solar cell",
		venue: "Elsevier",
	},
];
