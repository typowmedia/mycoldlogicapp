const styles = theme => ({
  loaContainer: {
    minHeight: '100vh',
    width: '100vw',
    paddingTop: theme.spacing.unit * 6,

    '& > *': {
      padding: theme.spacing.unit * 2,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      '& > *': {
        padding: 0,
      },
    },
  },

  loaTitle: {
    padding: '40px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 10px',
    },
  },
  loaRequest: {},
  loaStats: {},
});

export default styles;
