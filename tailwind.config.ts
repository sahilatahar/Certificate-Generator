export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#212429",
				darkHover: "#3D404A",
				light: "#f5f5f5",
				primary: "#39E079",
				danger: "#ef4444",

				bgLight: "#faf6f5",
				brand: {
					50: "#FFFFFF",
					100: "#FFFFFF",
					200: "#FFFFFF",
					300: "#FFFFFF",
					400: "#DEFFEE",
					500: "#B5FFD9",
					600: "#7DFFBC",
					700: "#45FF9F",
					800: "#0DFF83",
					900: "#00D467",
				},
				sand: {
					50: "#D7D5D4",
					100: "#CDCACA",
					200: "#B9B6B5",
					300: "#A5A1A0",
					400: "#918D8B",
					500: "#7D7876",
					600: "#605C5B",
					700: "#434140",
					800: "#262524",
					900: "#0A0909",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
}
