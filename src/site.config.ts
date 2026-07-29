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
		"Full-Stack AI Engineer working on GenAI, multi-agent systems and large-scale data platforms. Currently Lead Data Scientist at Passageway.",
	intro: `I'm Ravi — a Full-Stack AI Engineer working where large language models meet large-scale data.

For the past seven years I've built GenAI systems, multi-agent workflows and the data platforms underneath them. Right now I lead smart meter analytics at Passageway, across a fleet of more than 600,000 meters.`,
	lang: "en-US",
	ogLocale: "en_US",
	sortPostsByUpdatedDate: false,
	title: "Ravi Kumar Verma",
	hideThemeCredit: false,
	profile: {
		name: "Ravi Kumar Verma",
		tagline: "Full-Stack AI Engineer",
		email: "rkverma87@gmail.com",
		phone: "+91 74092 10692",
		location: "India",
		github: "https://github.com/rkvermaa",
		linkedin: "https://www.linkedin.com/in/ravi-kumar-verma-16837734/",
		medium: "https://medium.com/@rkverma87",
		jobTitle: "Lead Data Scientist",
		employer: "Passageway",
		alumni: "IIT Roorkee",
		avatar: "/avatar.png",
		resume: "/cv.pdf",
	},
	contact: {
		// Publishable client-side key — see ContactConfig in src/types.ts.
		web3formsKey: "6966093a-93c7-4b63-b7a9-e7b303b92b6d",
	},
	// Uncomment & fill in to enable Giscus comments on every post.
	// comments: {
	// 	repo: "your-handle/your-repo",
	// 	repoId: "...",
	// 	category: "General",
	// 	categoryId: "...",
	// },
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
