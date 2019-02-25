const styles = theme => ({
  form: {
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
    fontSize: theme.spacing.unit + 8,

    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing.unit + 4,
    },

    '& > *': {
      fontSize: 'inherit',
      '& > *': {
        fontSize: 'inherit',
      },
    },
  },
  selectItem: {
    fontSize: theme.spacing.unit + 8,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing.unit + 4,
    },
  },
  askManagerSuccess: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  askManagerSuccessText: {
    padding: theme.spacing.unit * 3,
    fontSize: theme.spacing.unit + 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.success.main,

    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing.unit + 4,
    },
  },
  askManagerError: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  askManagerErrorText: {
    padding: theme.spacing.unit * 3,
    fontSize: theme.spacing.unit + 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.error.main,

    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing.unit + 4,
    },
  },
});

export default styles;
