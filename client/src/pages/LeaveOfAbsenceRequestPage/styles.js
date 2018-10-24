const styles = theme => ({
  loaContainer: {
    minHeight: '100vh',
    paddingTop: '6rem',
    alignContent: 'flex-start',

    '& > *': {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },
  loaTitle: {
    padding: '4rem 2rem',
  },
  loaRequest: {},
  loaStats: {},
});

export default styles;
