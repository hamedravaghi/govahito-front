/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      colors: {
        primary: { main: "#F4AB76", text: "#fcfcfc", hover: "#DB996A" },
        border: { main: "#ECEEF4", second: "#95A5AA" },
        secondary: { main: "#B5E1E3",second:"#E3F3F3", background: "#FCFCFC" },
        text: { main: "#333333", second: "#95A5AA", third: "#516163" },
      },
      boxShadow: {
        'lg': "0px 4px 40px rgba(0, 0, 0, 0.15)",
        'xl': "0px 8px 40px rgba(0, 0, 0, 0.5)",
        'base': "0px 4px 15px 0px rgba(0, 0, 0, 0.15)",
        'hover': "0px 12px 30px 0px rgba(0,0,0,0.15)"
      },
      dropShadow: {
        'base': "0px 4px 15px 0px rgba(0, 0, 0, 0.15)"
      },
      borderRadius: {
        '2xl': "14px"
      },
      fontSize: {
        '2xl': '22px'
      }
    },
  },
  plugins: [],

}



