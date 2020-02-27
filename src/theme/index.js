import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  name: 'Light Theme',
  palette: {
    primary: {
      light: accentGreen,
      main: primaryGreen,
      dark: darkGreen,
      contrastText: "#fff"
    },
    secondary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: "#fff"
    }
  },
  typography: {
    h1: {
      color: primaryGreen,
      fontSize: '1.8em',
      letterSpacing: '.5rem',
      margin: '.2em 0',
      fontWeight: 'bold'
    },
    subtitle2: {
      color: "grey"
    },

    body1: {
      fontFamily: 'Gotham-Book'
    }
  },

  overrides: { }
};

export default createMuiTheme(overridings);