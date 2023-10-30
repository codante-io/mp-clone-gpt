import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/utils/*.{ts}',
  ],
  theme: {
    extend: {
			colors: {
				'b-light': '#343541',
				'b-dark': '#202123',
				'b-chat': '#444654',
				't-light': '#FFF',
				't-dark': '#7B7B87',
				't-border': '#565869'
			}
		},
  },
  plugins: [],
}
export default config
