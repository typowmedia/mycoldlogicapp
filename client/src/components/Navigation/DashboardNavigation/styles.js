const styles = theme => ({
  navFlexContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: '1rem',
    },
  },
  flexContainerItem: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
      height: '48%',
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

export default styles;
