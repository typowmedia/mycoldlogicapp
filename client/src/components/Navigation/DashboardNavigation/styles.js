const styles = theme => ({
  dashboardNavigationFlexItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',

    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
});

export default styles;
