import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#0D3C55',
    },
    secondary: {
      main: '#F16C20',
    },
    error: {
      main: '#e84343',
      dark: '#d83e3e',
    },
    success: {
      main: '#3fcc85',
      dark: '#34af70',
    },
    white: {
      main: '#FFFFFF',
      dark: '#f4f4f4',
    },
    black: '#000000',
    grey: {
      main: '#EEEEEE',
      light: '#a0a0a0',
      dark: '#777777',
      darker: '#1e1e1e',
      feedback: '#95989A',
    },
  },
  spacing: {
    unit: 10,
  },
  typography: {
    useNextVariants: true,
  },
});
