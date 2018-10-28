const styles = theme => ({
  reportMessage: {
    ...theme.typography.display2,
    fontSize: '2rem',
    width: '60%',
    marginLeft: 'none',
    margin: '0 auto',
    textAlign: 'center',
    padding: '6rem',

    [theme.breakpoints.down('sm')]: {
      width: '80%',
      padding: '2.5rem',
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
    fontSize: '1.6rem',
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-child)': {
        marginBottom: '2rem',
      },
    },
  },
});

export default styles;
