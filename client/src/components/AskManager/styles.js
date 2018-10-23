const styles = theme => ({
  formContainer: {
    flex: '0 0 80%',
    margin: '0 auto',
    padding: '3rem',
    maxWidth: '52rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    transition: 'flex .2s',
    boxShadow: '1px 2px 4rem rgba(0,0,0,0.4), -1px -2px 4rem rgba(0,0,0,0.4)',
    [theme.breakpoints.down('md')]: {
      flex: 1,
      maxWidth: '100%',
      padding: '3rem 1rem',
    },
    [theme.breakpoints.down('xs')]: {
      border: 'none',
      padding: '4rem 2rem',
    },
  },
  formTitle: {
    textAlign: 'center',
  },
});

export default styles;
