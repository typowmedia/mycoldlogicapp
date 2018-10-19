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
    marginLeft: '-1.2rem',
    marginRight: '2rem',
  },
  logo: {
    padding: 5,
    alignSelf: 'flex-end',
    width: '20rem',
  },
});

export default styles;
