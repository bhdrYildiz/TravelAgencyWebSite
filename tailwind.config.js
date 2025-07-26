/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      typography: (theme) => ({
        blog: {
          css: {
            "--tw-prose-body": theme("colors.gray.800"),
            "--tw-prose-headings": theme("colors.blue.800"),
            "--tw-prose-links": theme("colors.blue.600"),
            "--tw-prose-bold": theme("colors.orange.700"),
            "--tw-prose-bullets": theme("colors.orange.600"),
            "--tw-prose-quotes": theme("colors.gray.600"),
            "--tw-prose-code": theme("colors.pink.600"),
            "--tw-prose-pre-bg": theme("colors.gray.900"),
            h1: {
              fontSize: theme("fontSize.3xl"),
              marginTop: "2em",
              marginBottom: "1em",
            },
            h2: {
              fontSize: theme("fontSize.2xl"),
              marginTop: "1.5em",
              marginBottom: "1em",
            },
            h3: {
              fontSize: theme("fontSize.xl"),
              marginTop: "1.25em",
              marginBottom: "0.75em",
              color: theme("colors.blue.700"),
            },
            p: {
              fontSize: theme("fontSize.base"),
              marginTop: "1em",
              marginBottom: "1em",
              lineHeight: "1.75",
            },
          },
        },
      }),
    },
  },
};
