const styles = theme => ({
  bestSiteContentContainer: {
    background: 'yellowgreen',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '3rem',
    minHeight: '40vh',
  },
  contentStepOneText: {
    fontSize: '2rem',
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    lineHeight: 1.4,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,

    '&:not(:last-child)': {
      marginBottom: '.8rem',
    },
  },
  bestSiteButton: {
    fontSize: '1.6rem',
  },
});

export default styles;
