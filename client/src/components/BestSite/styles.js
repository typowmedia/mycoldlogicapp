const styles = theme => ({
  bestSiteWelcome: {
    padding: '6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  bestSiteWelcomeTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '3rem',
  },
  bestSiteWelcomeText: {
    fontSize: '2.2rem',
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
  bestSiteWelcomeButton: {
    fontSize: '1.6rem',
  },
});

export default styles;
