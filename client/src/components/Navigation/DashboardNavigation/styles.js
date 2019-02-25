const styles = theme => ({
  dashboardNavigationFlexItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,

    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
});

export default styles;
