import { createTheme } from "@mui/material/styles";
export const Colors = {
  // ### Primary
  DarkBlue: "hsl(233, 26%, 24%)",
  LimeGreen: "hsl(136, 65%, 51%)",
  BrightCyan: "hsl(192, 70%, 51%)",
  // ### Neutral
  GrayishBlue: "hsl(233, 8%, 62%)",
  LightGrayishBlue: "hsl(220, 16%, 96%)",
  VeryLightGray: "hsl(0, 0%, 98%)",
  White: "hsl(0, 0%, 100%)",
  // ## gradient
  gradientGB:
    "linear-gradient(120deg, hsla(136, 65%, 51%, 1) 0%, hsla(192, 70%, 51%, 1) 100%);",
  gradientGBAlpha:
    "linear-gradient(120deg, hsla(136, 65%, 51%, 0.7) 0%, hsla(192, 70%, 51%, 0.7) 100%);",
  gradientWB:
    "linear-gradient(180deg, hsla(0, 0%, 97%, 1) 0%, hsla(0, 0%, 100%, 1) 100%)",
  gradientDbW:
    "linear-gradient(180deg, hsla(233, 26%, 24%, 0.7) 0%, hsla(0, 0%, 100%, 0) 100%)",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.GrayishBlue,
      dark: Colors.DarkBlue,
      contrastText: Colors.LimeGreen,
    },
    secondary: {
      main: Colors.LimeGreen,
      dark: Colors.DarkBlue,
      contrastText: Colors.LimeGreen,
    },
  },
  typography: {
    fontFamily: ["Public Sans", "Roboto", "sans-serif"].join(","),
    fontSize: 18,
    h3: {
      fontSize: "2.5rem",
      color: Colors.DarkBlue,
    },
    h5: {
      color: Colors.DarkBlue,
      fontSize: "1.5rem",
    },
    h6: {
      color: Colors.DarkBlue,
      lineHeight: "20px",
      fontSize: 16,
      "&:hover": {
        color: Colors.LimeGreen,
        cursor: "pointer",
      },
    },
    subtitle2: {
      color: Colors.GrayishBlue,
      fontSize: 16,
    },
    subtitle1: {
      color: Colors.GrayishBlue,
      fontSize: 12,
      lineHeight: 1.5,
    },
    body2: {
      color: Colors.GrayishBlue,
    },
    caption: {
      color: Colors.GrayishBlue,
      fontSize: 10,
      textTransform: "capitalize",
    },
  },

  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: Colors.gradientDbW,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "gradient" },
          style: {
            background: Colors.gradientGB,
            color: Colors.White,
            padding: "10px 30px",
            borderRadius: "25px",
            fontWeight: 700,
            fontSize: 14,
            textTransform: "capitalize",
            height: "fit-content",
            width: "fit-content",
            "&:active": { background: Colors.gradientGBAlpha },
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        "aria-label":"button",
      },
      styleOverrides: {
        text: {
          "&:hover": {
            color: Colors.DarkBlue,
            backgroundColor: Colors.White,
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: Colors.White,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          width: "80rem",
        },
      },
    },
  },
});

export default theme;
