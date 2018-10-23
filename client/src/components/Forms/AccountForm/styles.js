const styles = theme => ({
  formContainer: {},
  form: {
    margin: '0 auto',
    marginTop: '3rem',
    maxWidth: '70rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  formControl: {
    marginBottom: '1.6rem',
    width: '100%',
    fontSize: '1.8rem',

    '& > *': {
      fontSize: 'inherit',
      '& > *': {
        fontSize: 'inherit',
      },
    },
  },
  error: {
    color: 'firebrick',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
  inlineButton: {
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    transition: 'color .3s',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.secondary.main,
    },
  },
  formButton: {
    marginTop: theme.spacing.unit * 2,
    fontSize: '1.4rem',
  },
  errorContainer: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing.unit,
    fontSize: 14,
  },
});

export default styles;
