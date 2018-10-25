const styles = theme => ({
  loaContainer: {
    minHeight: '100vh',
    paddingTop: '6rem',

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
