const styles = theme => ({
  navContainer: {
    display: 'flex',
    flexWrap: 'row wrap',
  },
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
  card: {
    width: '100%',
    margin: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      height: 260,
    },
  },
});

export default styles;
