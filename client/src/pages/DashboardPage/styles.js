const styles = theme => ({
  dashboardContainer: {
    minHeight: '100vh',

    '& > *': {
      padding: '1rem',
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '9rem',
    },
  },
  coldlogic: {
    flex: 1,

    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  logoContainer: {
    flex: 1,
    height: '10rem',
  },
  dashboardNavContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '3rem',
    },
  },
  dashboardAskManager: {
    [theme.breakpoints.down('sm')]: {
      padding: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
});

export default styles;
