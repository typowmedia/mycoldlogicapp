const styles = theme => ({
  feedbackContainer: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    minHeight: '100vh',
    paddingTop: theme.spacing.unit * 5,

    '& > *': {
      padding: theme.spacing.unit * 8,
    },

    [theme.breakpoints.down('sm')]: {
      '& > *': {
        padding: '60px 10px 10px 10px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& > *': {
        padding: '40px 10px 10px 10px',
      },
    },
  },
});

export default styles;
