const styles = theme => ({
  feedbackContainer: {
    minHeight: '100vh',
    paddingTop: '4rem',

    '& > *': {
      padding: '6rem',
    },

    [theme.breakpoints.down('sm')]: {
      '& > *': {
        padding: '6rem 1rem 1rem 1rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& > *': {
        padding: '4rem 1rem 1rem 1rem',
      },
    },
  },
});

export default styles;
