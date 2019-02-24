const styles = theme => ({
  reportMessage: {
    ...theme.typography.display2,
    fontSize: 20,
    width: '60%',
    marginLeft: 'none',
    margin: '0 auto',
    textAlign: 'center',
    padding: theme.spacing.unit * 6,

    [theme.breakpoints.down('sm')]: {
      width: '80%',
      padding: theme.spacing.unit * 2.5,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  reportButtons: {
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  reportButton: {
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-child)': {
        marginBottom: theme.spacing.unit * 2,
      },
    },
  },
});

export default styles;
