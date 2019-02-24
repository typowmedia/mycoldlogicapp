const styles = theme => ({
  menuItem: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  menu: {
    flex: 1,
    backgroundColor: theme.palette.primary.main,
  },
  primary: {
    color: theme.palette.white.dark,
    fontSize: 16,
  },
  icons: {
    width: 25,
    height: 25,
  },
  currentUserLogo: {
    color: theme.palette.secondary.main,
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
});

export default styles;
