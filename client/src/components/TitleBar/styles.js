const styles = theme => ({
  titleBar: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 80,
    width: 80,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    ...theme.typography.display2,
    textDecoration: 'underline',
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.display2,
    },
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.display1,
      textAlign: 'right',
    },
  },
});

export default styles;
