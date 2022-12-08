/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'reverse-spin': 'reverse-spin 2s linear infinite',
				spin: 'spin 2s linear infinite',
			},
			keyframes: {
				'reverse-spin': {
					from: {
						transform: 'rotate(360deg)',
					},
				},
				spin: {
					from: {
						transform: 'rotate(0deg)',
					},
					to: {
						transform: 'rotate(360deg)',
					},
				},
			},
		},
	},
	plugins: [],
};
