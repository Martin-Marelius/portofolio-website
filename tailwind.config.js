const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"blue-gray": colors.blueGray,
				"cool-gray": colors.coolGray,
				"true-gray": colors.trueGray,
				"warm-gray": colors.warmGray,
				orange: colors.orange,
				amber: colors.amber,
				lime: colors.lime,
				emerald: colors.emerald,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				violet: colors.violet,
				purple: colors.purple,
				fuchsia: colors.fuchsia,
				rose: colors.rose,
				primary: "#f1f5f9",
				primary2: "#1e293b",
				secondary: "#334155",
				link: "#0284c7",
				darkText: "#475569",
				lightText: "#64748b",
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
