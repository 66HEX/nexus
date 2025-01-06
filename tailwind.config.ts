
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-lausanne)']
			},
			animation: {
				'border': 'border 7s linear infinite',
			},
			keyframes: {
				'border': {
					to: { '--border-angle': '360deg' },
				}
			}
		},
	},
}