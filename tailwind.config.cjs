module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bondify: {
          green: "#1DB954",
          soft: "#E6F9EF",
          mint: "#DFF7E9",
          base: "#0AA05B"
        },
        ui: {
          light: "#F6FBF8",
          pale: "#EAF7EE"
        }
      },
      boxShadow: {
        soft: "0 6px 20px rgba(16, 185, 129, 0.08)",
        insetSoft: "inset 0 2px 6px rgba(0,0,0,0.03)"
      },
      borderRadius: {
        "xl-2": "18px"
      }
    }
  },
  plugins: []
};
