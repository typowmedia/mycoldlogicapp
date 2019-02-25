const styles = theme => ({
  dashboardContainer: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    minHeight: '100vh',
    paddingTop: theme.spacing.unit * 6,

    '& > *': {
      padding: theme.spacing.unit,
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
    height: theme.spacing.unit,
  },
  dashboardNavContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit / 2,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit,
    },
  },
  dashboardAskManager: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit / 2,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginTop: theme.spacing.unit / 4,
    },
  },
});

export default styles;
