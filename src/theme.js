import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        white: {
          100: "#FFFFFF",
          200: "#F9F9F8",
          300: "#F2F3F2",
          400: "#ECECEB",
          500: "#E5E6E4",
          600: "#EDE2DF",
        },
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d5d9dd",
          200: "#abb3bc",
          300: "#828c9a",
          400: "#586679",
          500: "#2e4057",
          600: "#253346",
          700: "#1c2634",
          800: "#121a23",
          900: "#090d11",
        },

        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        allergenColors: {
          100: "#ee7440",
          200: "#804330",
          300: "#009a4c",
          400: "#403b8a",
          500: "#03b2c7",
          600: "#c57b4f",
          700: "#cf4d51",
        },
        blacks: {
          100: "#222021",
          200: "#363636",
          300: "#3E454B",
          400: "#48494B",
          500: "#787276",
        },
      }
    : {
        white: {
          100: "#FFFFFF",
          200: "#F9F9F8",
          300: "#F2F3F2",
          400: "#ECECEB",
          500: "#E5E6E4",
          600: "#EDE2DF",
        },
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#cfedef",
          200: "#9fdae0",
          300: "#6fc8d0",
          400: "#3fb5c1",
          500: "#0fa3b1",
          600: "#0c828e",
          700: "#09626a",
          800: "#064147",
          900: "#032123",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        blueGradient: {
          100: "#e5f9f3",
          200: "#f2fcf9",
          300: "#84eefc",
          400: "#ddf7ef",
          500: "#a1dee7",
          600: "#419eab",
          700: "#225358",
        },
        blacks: {
          100: "#222021",
          200: "#363636",
          300: "#3E454B",
          400: "#48494B",
          500: "#787276",
        },
        allergenColors: {
          100: "#ee7440",
          200: "#804330",
          300: "#009a4c",
          400: "#403b8a",
          500: "#03b2c7",
          600: "#c57b4f",
          700: "#cf4d51",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[700], //colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.white[600],
            },
          }),
    },
    typography: {
      fontFamily: ["Cambria", "serif"].join(","), //CHANGING FROM: ["Source Sans Pro", "sans-serif"].join(",")
      fontSize: 12,
      h1: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

//context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark"); //Stores the state of dark or light mode

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
