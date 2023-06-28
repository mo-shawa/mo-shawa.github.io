/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				...require("tailwindcss/colors"),
				linkedin: "#0077B5",
				github: "#181717",
				twitter: "#1DA1F2",
			},
		},
	},
	plugins: [],
}
