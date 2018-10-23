const styles = theme => ({
  navCard: {
    flex: 1,
    height: '100%',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '1rem',
    boxShadow: '1px 3px 4rem rgba(0,0,0,.4)',
    borderRadius: '1rem',
    transition: 'all .2s',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      padding: '.5rem',
      borderRadius: 100,
      marginBottom: '1rem',
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

  navCardImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    flex: 1,
    [theme.breakpoints.down('xs')]: {
      flex: '0',
    },
  },

  navCardImage: {
    width: '11rem',
    height: '11rem',
    padding: '2rem',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '1px 3px 1rem rgba(0,0,0,.8)',
    borderRadius: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '6rem',
      height: '6rem',
      padding: '1rem',
    },
  },

  navCardTextContainer: {
    display: 'flex',
    fontSize: '1.6rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '2rem',

    flex: 1,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: '1rem',
    },
  },

  navCardTitleText: {
    textTransform: 'capitalize',
    fontSize: '1.9rem',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'right',
      fontSize: '1.4rem',
    },
  },

  navCardDescriptionText: {
    fontSize: '1.7rem',
    fontWeight: '400',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

export default styles;
