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
    ...theme.typography.display3,
    textDecoration: 'underline',
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.display1,
    },
  },
});

export default styles;
