const styles = theme => ({
  navLinkContainer: {
    textAlign: 'center',
  },
  navButton: {
    width: 90,
    height: 90,
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
    // Paper Cards below:
  root: {
    height: 180,
    width: 200,
[theme.breakpoints.up('sm')]: {
    height: 260,
}
  },
});

export default styles;
