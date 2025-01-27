import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {






			fontSize: {
				'xs': '.75rem',
				'sm': '.875rem',
				'base': '1rem',
				'lg': '1.125rem',
				'xl': '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
				'xs-custom': '0.8125rem',
				'15px': '0.9375rem',
			},

			colors: {
				'black': '#171A1F',
				'gray': '#777777',
				'green': '#1FCE6D',
				'light-gray': '#F7F7F7',
				'white ': '#FFFFFF',
				'cool-gray': '#E6E6E6',
				'medium-gray': '#A5A5A5',
				'light-silver': '#E8E8E8',
				'dark-silver ': '#F4F4F4',
				'dark-gray': '#242424',
				'light-silver-2': '#C6C6C6',

			},

			fontFamily: {
				arimo: ['Arimo', 'sans-serif'],
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},

			//Özel boyutlar
			spacing: {
				"552": "552px",
				"148": "148px",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
