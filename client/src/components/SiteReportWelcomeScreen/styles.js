const styles = theme => ({
  SiteReportWelcomeScreen: {
    padding: '6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      padding: '2rem',
    },
  },

  SiteReportWelcomeScreenTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '3rem',
  },
  SiteReportWelcomeScreenText: {
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

    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.6rem',
    },
  },
  SiteReportWelcomeScreenButton: {
    fontSize: '1.6rem',
  },
});

export default styles;
