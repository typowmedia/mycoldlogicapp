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
    height: 80,
    width: 80,
  },
  title: {
    ...theme.typography.display3,
    textDecoration: 'underline',
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.display1,
      marginLeft: theme.spacing.unit,
    },
  },
});

export default styles;
