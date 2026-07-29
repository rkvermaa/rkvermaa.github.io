export interface EducationItem {
	institution: string;
	degree: string;
	field?: string;
	/** `YYYY` — formatted at render by `formatYearRange`. */
	start: string;
	/** `YYYY`, or the literal `"present"`. */
	end: string | "present";
	location?: string;
	note?: string;
}

/** Newest first. */
export const education: EducationItem[] = [
	{
		institution: "IIT Roorkee",
		degree: "PhD (part-time)",
		field: "Mechanical & Industrial Engineering",
		start: "2025",
		end: "present",
		location: "Uttarakhand, India",
	},
	{
		institution: "IIT Roorkee",
		degree: "M.Tech",
		field: "Solid State Electronics Materials, Department of Physics",
		start: "2016",
		end: "2018",
		location: "Uttarakhand, India",
	},
	{
		institution: "UIET, CSJM University Kanpur",
		degree: "B.Tech",
		field: "Electronics & Communication Engineering",
		start: "2005",
		end: "2009",
		location: "Uttar Pradesh, India",
	},
];
