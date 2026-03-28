export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light Mode
          primary: {
            main: "#1976d2",
            dark: "#115293",
          },
          secondary: {
            main: "#9c27b0",
            dark: "#6d1b7b",
          },
          success: {
            main: "#4caf50",
            dark: "#357a38",
          },
          error: {
            main: "#f44336",
          },
          background: {
            default: "#f5f5f5",
            paper: "#fff",
          },
          text: {
            primary: "#111",
            secondary: "#555",
          },
        }
      : {
          // Dark Mode
          primary: {
            main: "#90caf9",
            dark: "#42a5f5",
          },
          secondary: {
            main: "#ce93d8",
            dark: "#ab47bc",
          },
          success: {
            main: "#81c784",
            dark: "#388e3c",
          },
          error: {
            main: "#ef5350",
          },
          background: {
            default: "#121212",
            paper: "#1d1d1d",
          },
          text: {
            primary: "#fff",
            secondary: "#bbb",
          },
        }),
  },
});
