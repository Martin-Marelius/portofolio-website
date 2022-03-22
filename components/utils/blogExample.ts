import ArticleType  from "../types/ArticleType"

export const blogExample: ArticleType = 
	{
		mainTitle: "Introduction to Lua Scripting and Factorio Modding",
		//subTitle: undefined,

		mainImage: "factorio.jpg",
		//subImage: undefined,

		paragraph: [
			[1, "1st paragraph"],
			[2, "2nd paragraph"],
		],

		code: [[1, { filename: "", code: "", language: "lua" }]],

		/**
		 * date published, on the format of dd/mm/yyyy.
		 */
		creationDate: "22.03.2022",

		/**
		 * array of keywords of important topics the article talks about. also used in a sneakpeek.
		 */
		keywords: ["Lua", "Scripting", "Factorio", "Modding"],
	}