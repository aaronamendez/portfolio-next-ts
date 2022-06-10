module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		screens: {
			smallScreen: '391px',
		},
		flex: {
			'1/3': '1 1 29%',
			'2/3': '1 1 67%',
			'1/4': '1 1 25%',
		},
		extend: {},
	},
	plugins: [],
};
