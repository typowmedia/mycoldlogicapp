const styles = theme => ({
  dashboardContainer: {
    minHeight: '100vh',
    paddingTop: '6rem',

    '& > *': {
      padding: '1rem',
      display: 'flex',
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
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
    },
  },
  dashboardAskManager: {
    [theme.breakpoints.down('sm')]: {
      padding: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginTop: '2rem',
    },
  },
});

export default styles;
