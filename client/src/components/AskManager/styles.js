const styles = theme => ({
  formContainer: {
    flex: '0 0 80%',
    margin: '0 auto',
    padding: theme.spacing.unit * 3,
    maxWidth: theme.spacing.unit * 52,
    border: `2px solid ${theme.palette.secondary.main}`,
    transition: 'flex .2s',
    boxShadow: '1px 2px 40px rgba(0,0,0,0.4), -1px -2px 40px rgba(0,0,0,0.4)',
    [theme.breakpoints.down('md')]: {
      flex: 1,
      maxWidth: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      border: 'none',
      padding: '40px 20px',
      boxShadow: 'none',
    },
  },
  formTitle: {
    textAlign: 'center',
  },
});

export default styles;
