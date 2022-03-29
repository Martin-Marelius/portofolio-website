import ArticleType  from "../types/ArticleType"

export const blogExample: ArticleType = 
	{
		mainTitle: "Introduction to Lua Scripting and Factorio Modding",
		subTitle: [[2, "Lua Intro"], [3, "Lua Installation"]],

		mainImage: "factorio.jpg",
		subImage: undefined,

		paragraph: [
			[1, " 1st paragraph"],
			[2, " 2nd paragraph"],
			[3, " 3rd paragraph"],
			[2, " 2nd paragraph"],
			[3, " 3rd paragraph"],
		],

		code: [
			[1, { filename: "ssd", code: "sdsdsd", language: "lua" }],
			[3, { filename: "ssd", code: "sdsdsd", language: "lua" }],
		],

		/**
		 * date published, on the format of dd/mm/yyyy.
		 */
		creationDate: "22.03.2022",

		/**
		 * array of keywords of important topics the article talks about. also used in a sneakpeek.
		 */
		keywords: ["Lua", "Scripting", "Factorio", "Modding"],
	}