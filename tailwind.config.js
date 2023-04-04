/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
      fontFamily: {
        'sans': ['Proxima Nova', 'sans-serif'],
      }
    },
	},
	plugins: [],
}
