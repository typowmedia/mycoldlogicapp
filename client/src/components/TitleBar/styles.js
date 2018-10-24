const styles = theme => ({
  titleBar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-evenly',
    },
  },
  icon: {
    height: '8rem',
    width: '8rem',
  },
  title: {
    ...theme.typography.headline,
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.display2,
    },
  },
});

export default styles;
