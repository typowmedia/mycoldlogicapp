const styles = theme => ({
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
  dateContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  buttons: {
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  chipError: {
    background: theme.palette.error.main,
    color: theme.palette.white.main,
    transition: 'all .2s',
    '&:hover': {
      background: theme.palette.error.dark,
      transform: 'translateY(-3px)',
      boxShadow: '0 2px 10px #000',
    },
    '&:active': {
      background: theme.palette.error.dark,
      transform: 'translateY(0)',
      boxShadow: '0 1px 5px #000',
    },
  },
  chipSuccess: {
    background: theme.palette.success.main,
    color: theme.palette.white.main,
    '&:hover': {
      background: theme.palette.success.dark,
      transform: 'translateY(-3px)',
      boxShadow: '0 2px 10px #000',
    },
    '&:active': {
      background: theme.palette.success.dark,
      transform: 'translateY(0)',
      boxShadow: '0 1px 5px #000',
    },
  },
});

export default styles;
