const styles = theme => ({
  navCard: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    boxShadow: '1px 3px 40px rgba(0,0,0,.4)',
    borderRadius: theme.spacing.unit,
    transition: 'all .2s',
    fontSize: theme.spacing.unit + 6,
    padding: theme.spacing.unit,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      padding: theme.spacing.unit / 2,
      borderRadius: 100,
      height: '83%',
      backgroundColor: 'white',
      boxShadow: '1px 3px 1px rgba(0,0,0,.4)',
      border: '1px solid #cccccc',
    },

    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-3px)',
      boxShadow: '1px 3px 40px rgba(0,0,0,.6)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '1px 3px 20px rgba(0,0,0,.6)',
    },
  },

  navCardImage: {
    width: theme.spacing.unit * 11,
    height: theme.spacing.unit * 11,
    padding: theme.spacing.unit * 2,
    alignSelf: 'center',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '1px 3px 10px rgba(0,0,0,.8)',
    borderRadius: '50%',
    margin: '10px 5px',
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing.unit * 6,
      height: theme.spacing.unit * 6,
      padding: theme.spacing.unit,
      boxShadow: 'none',
    },
  },

  navCardTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
    flex: 1,
    color: theme.palette.grey.darker,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },

  navCardTitleText: {
    textTransform: 'capitalize',
    fontWeight: '500',
    fontSize: theme.spacing.unit + 7,
  },

  navCardDescriptionText: {
    fontWeight: '400',
    marginTop: theme.spacing.unit,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

export default styles;
