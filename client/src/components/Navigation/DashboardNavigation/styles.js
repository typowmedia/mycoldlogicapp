const styles = theme => ({
  navLinkContainer: {
    textAlign: 'center',
  },
  navButton: {
    width: 100,
    height: 100,
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      width: 150,
      height: 150,
    },
  },
  navLink: {
    width: '50%',
    height: '50%',
  },
  card: {
    backgroundColor: 'red',
  },
});

export default styles;
