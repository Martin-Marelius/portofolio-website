

/**
 * type of skill
 */
export type skill = {
	name: string;
	experience: number;
	adaptability: number;
	technical: number;
};

const dataKeywords: string[] = ['Next.js', 'Node.js', 'TailwindCSS', 'GraphQL', 'PostGreSQL', 'MongoDB', 'App development', 'Fullstack Applications']

const dataSet: skill[] = [
	{
		name: "React + Native",
		experience: 9,
		adaptability: 7,
		technical: 8,
	},
	{
		name: "Javascript",
		experience: 8,
		adaptability: 8,
		technical: 7,
	},
    {
		name: "Java",
		experience: 8,
		adaptability: 9,
		technical: 9,
	},
    {
		name: "CSS / HTML",
		experience: 6,
		adaptability: 8,
		technical: 8,
	},
];

export { dataSet, dataKeywords }

