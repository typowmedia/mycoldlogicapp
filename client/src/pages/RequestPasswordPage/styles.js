const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    paddingTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 8,
    },
  },
  message: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 8,
    },
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
  },
  formButton: {
    marginTop: theme.spacing.unit * 5,
    width: '100%',
  },
  formToggle: {
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  accountForm: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '500px',
    },
  },
  errorMessage: {
    color: 'firebrick',
  },
  form: {
    marginTop: theme.spacing.unit * 5,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default styles;
