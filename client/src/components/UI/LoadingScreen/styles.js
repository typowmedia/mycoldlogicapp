const styles = theme => ({
  loadingContainer: {
    height: '100vh',
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit / 2,
    },
  },
  loadingItem: {
    padding: theme.spacing.unit * 3,
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  loadingLogoContainer: {},
  loadingBars: {},
});

export default styles;
