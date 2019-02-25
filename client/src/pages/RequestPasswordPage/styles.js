const styles = theme => ({
  requestContainer: {
    flexGrow: 1,
    height: '100%',
    paddingTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit - 2,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 4.8,
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
    fontSize: 16,
  },
});

export default styles;
