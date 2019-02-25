const styles = theme => ({
  container: {
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
  content: {
    border: `3px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing.unit * 3,
    boxShadow: '0 10px 30px rgba(0,0,0, 0.6)',
  },
  logoContainer: {
    width: '50%',
    margin: '40px auto 20px',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      margin: '20px auto 10px',
    },
  },
  text: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.body1,
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '60px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '30px 0',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'stretch',
      '&:not(:last-child)': {
        marginBottom: theme.spacing.unit,
      },
    },
  },
});

export default styles;
