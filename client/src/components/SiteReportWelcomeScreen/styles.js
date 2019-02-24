const styles = theme => ({
  SiteReportWelcomeScreen: {
    padding: theme.spacing.unit * 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 2,
    },
  },

  SiteReportWelcomeScreenTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: theme.spacing.unit * 3,
  },
  SiteReportWelcomeScreenText: {
    fontSize: 22,
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    lineHeight: 1.4,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,

    '&:not(:last-child)': {
      marginBottom: theme.spacing.unit - 2,
    },

    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  SiteReportWelcomeScreenButton: {
    fontSize: 16,
  },
});

export default styles;
