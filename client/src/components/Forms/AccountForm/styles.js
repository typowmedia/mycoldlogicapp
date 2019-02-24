const styles = theme => ({
  formContainer: {},
  form: {
    margin: '0 auto',
    marginTop: theme.spacing.unit * 3,
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.unit + 5,
  },
  formControl: {
    marginBottom: theme.spacing.unit + 6,
    width: '100%',
    fontSize: theme.spacing.unit + 8,

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
    fontSize: theme.spacing.unit + 4,
  },
  errorContainer: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing.unit,
    fontSize: 14,
  },
});

export default styles;
