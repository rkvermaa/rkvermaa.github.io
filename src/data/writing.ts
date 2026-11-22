export interface WritingLink {
	title: string;
	/** Absolute URL to the article. */
	href: string;
	/** `YYYY-MM-DD` or `YYYY-MM`. Omit to hide the date. */
	date?: string;
	/** Where it was published, e.g. "Medium". */
	source?: string;
	/** One-line summary shown under the title. */
	description?: string;
}

/**
 * Articles published elsewhere, best first (ranked by reads on Medium, Nov 2026).
 * The home page shows the first three. While this array is empty the "Writing"
 * page hides itself — same behaviour as an empty `projects` list.
 */
export const writing: WritingLink[] = [
	{
		title: "I Ran a GitHub Repo With 20K+ Stars on a Beauty Product. It Built My Entire Marketing Strategy.",
		href: "https://medium.com/stackademic/i-ran-a-github-repo-with-20k-stars-on-a-beauty-product-it-built-my-entire-marketing-strategy-7591d97c70a7",
		date: "2026-04-15",
		source: "Stackademic",
		description: "Pointing an open-source AI agent at a real product and letting it plan the marketing.",
	},
	{
		title: "From 50 Files to One Graph: How Graphify Turns Code Into Knowledge",
		href: "https://medium.com/ai-in-plain-english/from-50-files-to-one-graph-how-graphify-turns-code-into-knowledge-de96cfbf3fbc",
		date: "2026-04-13",
		source: "AI in Plain English",
		description: "Turning a codebase into a knowledge graph an AI can actually reason over.",
	},
	{
		title: "The Complete RAG Playbook",
		href: "https://medium.com/towards-artificial-intelligence/the-complete-rag-playbook-part-1-building-your-first-rag-pipeline-a0c1a15440fa",
		date: "2025-12-29",
		source: "Towards AI",
		description: "A four-part series on retrieval-augmented generation, from a first pipeline to evaluation.",
	},
	{
		title: "60,000 Developers Are Using a Markdown File to Fix How AI Writes Code",
		href: "https://medium.com/towards-artificial-intelligence/60-000-developers-are-using-a-markdown-file-to-fix-how-ai-writes-code-c62f6fd7a6c4",
		date: "2026-04-20",
		source: "Towards AI",
		description: "How one plain markdown file changes the code AI assistants write.",
	},
	{
		title: "Your AI Agent Is Only as Good as Its Harness",
		href: "https://medium.com/towards-artificial-intelligence/your-ai-agent-is-only-as-good-as-its-harness-heres-what-that-means-43986bc0ff79",
		date: "2026-04-20",
		source: "Towards AI",
		description: "What an agent harness is, and why it matters more than the model.",
	},
	{
		title: "Tokenization — Without It, AI Would Choke on New Words",
		href: "https://medium.com/gitconnected/tokenization-without-it-ai-would-choke-on-new-words-a8bbc11c46ce",
		date: "2026-01-30",
		source: "Level Up Coding",
		description: "How language models break text into tokens, and why it matters.",
	},
	{
		title: "The AI Agent That Actually Learns From You: Inside Hermes by Nous Research",
		href: "https://medium.com/towards-artificial-intelligence/the-ai-agent-that-actually-learns-from-you-inside-hermes-by-nous-research-fd074717a8e7",
		date: "2026-04-21",
		source: "Towards AI",
		description: "A look inside an agent that improves from your feedback.",
	},
	{
		title: "Crafting LangChain Tools: A Complete Guide to Custom Tool Development",
		href: "https://medium.com/towards-artificial-intelligence/crafting-langchain-tools-a-complete-guide-to-custom-tool-development-f21fd2f16622",
		date: "2025-01-03",
		source: "Towards AI",
		description: "Building custom tools so agents can call your own APIs and data.",
	},
];
