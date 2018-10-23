const styles = theme => ({
  navCard: {
    height: '100%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'right',
    margin: '0 auto',
    marginBottom: '1rem',
    padding: theme.spacing.unit,
    boxShadow: '1px 3px 4rem rgba(0,0,0,.4)',
    borderRadius: theme.spacing.unit * 5,
    transition: 'all .2s',
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      marginBottom: '10%',
      width: '97%',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-3px)',
      boxShadow: '1px 3px 4rem rgba(0,0,0,.6)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '1px 3px 2rem rgba(0,0,0,.6)',
    },
  },
  navCardFlexItemOne: {
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  navCardFlexItemTwo: {
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  navCardImage: {
    width: '43%',
    height: 'auto',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '1px 3px 1rem rgba(0,0,0,.8)',
    borderRadius: '100%',
    padding: '1.3rem',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      padding: '2rem',
    },
  },
  navCardTitle: {
    textTransform: 'capitalize',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      margin: '2rem 0',
    },
  },
  navCardTitleText: {
    fontSize: '1.6rem',
    fontWeight: '700',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9rem',
    },
  },

  navCardDescription: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginBottom: '1rem',
      width: '75%',
      textAlign: 'center',
      margin: '0 auto',
    },
  },

  navCardDescriptionText: {
    fontSize: '1.6rem',
    fontWeight: '400',
  },
});

export default styles;
