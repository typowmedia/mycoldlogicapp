const styles = theme => ({
  navFlexContainer: {
    flex: '0 0 100%',
    alignSelf: 'center',
    background: 'orangered',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: '1rem',
    },
  },
  flexContainerItem: {
    background: 'skyblue',
    flex: '0 0 50%',
    padding: '1rem',

    [theme.breakpoints.down('xs')]: {
      width: '40%',
      height: '48%',
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  // flexContainerItem: {
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     width: '40%',
  //     height: '48%',
  //     margin: '1rem',
  //     display: 'flex',
  //     justifyContent: 'center',
  //   },
  // },
});

export default styles;
