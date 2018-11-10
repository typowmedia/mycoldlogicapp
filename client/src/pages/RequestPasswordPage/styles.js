const styles = theme => ({
  requestContainer: {
    flexGrow: 1,
    height: '100%',
    paddingTop: '4rem',
    padding: '.8rem',
    [theme.breakpoints.up('sm')]: {
      padding: '4.8rem',
    },
  },
  message: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 8,
    },
  },
  requestButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  requestButton: {
    fontSize: '1.6rem',
  },
});

export default styles;
