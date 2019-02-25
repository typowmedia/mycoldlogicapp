const styles = theme => ({
  userWelcome: {
    flexGrow: 3,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: theme.spacing.unit * 2,
  },
  logo: {
    padding: 5,
    alignSelf: 'flex-end',
    width: 200,
  },
});

export default styles;
