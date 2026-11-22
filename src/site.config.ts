import type { MenuLink, SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Ravi Kumar Verma",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"Ravi Kumar Verma is an AI engineer from Kanpur, India, with 14+ years in tech. He builds AI agents, RAG systems and LLM features that hold up in production.",
	intro: `Building Piecewise, a platform for running AI agents through structured, cost-controlled workflows. Helping teams ship AI agents that hold up in production.

14+ years in tech, 8+ of them building AI and data systems for finance, telecom and energy.`,
	lang: "en-US",
	ogLocale: "en_US",
	title: "Ravi Kumar Verma",
	hideThemeCredit: true,
	profile: {
		name: "Ravi Kumar Verma",
		tagline: "Full-Stack AI Engineer",
		email: "contact@ravikverma.com",
		phone: "+91 74092 10692",
		location: "India",
		github: "https://github.com/rkvermaa",
		linkedin: "https://www.linkedin.com/in/ravi-kumar-verma-16837734/",
		medium: "https://medium.com/@rkverma139",
		jobTitle: "AI Engineer",
		alumni: "IIT Roorkee",
		avatar: "/avatar.jpg",
		resume: "/cv.pdf",
	},
	contact: {
		// Publishable client-side key — see ContactConfig in src/types.ts.
		web3formsKey: "6966093a-93c7-4b63-b7a9-e7b303b92b6d",
	},
	// Uncomment to enable analytics. Both providers load via Partytown.
	// analytics: {
	// 	googleAnalyticsId: "G-XXXXXXX",
	// 	goatcounterUrl: "https://your-handle.goatcounter.com/count",
	// },
};

export const menuLinks: MenuLink[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		title: "Work",
		icon: "briefcase",
		children: [
			{ path: "/experience/", title: "Experience" },
			{ path: "/projects/", title: "Projects" },
			{ path: "/skills/", title: "Skills & Certifications" },
		],
	},
	{
		path: "/writing/",
		title: "Writing",
	},
	{
		path: "/about/",
		title: "About",
	},
	{
		path: "/contact/",
		title: "Contact",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			editorTabBarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
			frameBoxShadowCssValue: "none",
			terminalBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			terminalTitlebarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["min-dark", "min-light"],
	useThemedScrollbars: false,
};
