import { createMuiTheme } from "@material-ui/core/styles";

const projectColors = {
  primaryColor: '#43425D',
  secondaryColor: '#6553A6',
  textColor: '#2B2B2B',
  menu: {
    drawer: {
      background: '#43425D',
      text: '#FFF',
      icon: '#FFF'
    },
    appBar: {
      background: '#FFF',
      text: '#2B2B2B'
    }
  }
}

export const overridings = {
  palette: {
    primary: {
      main: projectColors.primaryColor,
      contrastText: "#fff",
    },
    secondary: {
      main: projectColors.secondaryColor,
    },
    menu: {
      drawer: {
        text: projectColors.menu.drawer.text,
        icon: projectColors.menu.drawer.icon,
        selected: projectColors.primaryColor
      },
    },
    action: {
      selected: projectColors.secondaryColor
    }
  },
  toolbar: {
    root: {
      backgroundColor: 'black'
    }
  },
  typography: {
    h1: {
      color: projectColors.primaryColor,
      fontSize: '1.8em',
      letterSpacing: '.5rem',
      margin: '.2em 0',
      fontWeight: 'bold'
    },
    subtitle2: {
      color: projectColors.textColor
    }
  },

  overrides: { 
    MuiAppBar: {
      root: {
        backgroundColor: projectColors.menu.appBar.background,
        color: projectColors.menu.appBar.text
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: projectColors.menu.drawer.background,
        color: projectColors.menu.drawer.text,
        "& .MuiButtonBase-root": {
          color: projectColors.menu.drawer.text,
        },
        "& .MuiListItemIcon-root": {
          color: projectColors.menu.drawer.icon
        },
      }
    },
    
  }
};

export default createMuiTheme(overridings);