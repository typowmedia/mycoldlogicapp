const styles = theme => ({
  navCard: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    boxShadow: '1px 3px 4rem rgba(0,0,0,.4)',
    borderRadius: '1rem',
    transition: 'all .2s',
    fontSize: '1.6rem',
    padding: '1rem',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      padding: '.5rem',
      borderRadius: 100,
      height: '83%',
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

  navCardImage: {
    width: '11rem',
    height: '11rem',
    padding: '2rem',
    alignSelf: 'center',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '1px 3px 1rem rgba(0,0,0,.8)',
    borderRadius: '50%',
    margin: '1rem 0',
    [theme.breakpoints.down('xs')]: {
      width: '6rem',
      height: '6rem',
      padding: '1rem',
    },
  },

  navCardTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
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
    fontSize: '1.7rem',
  },

  navCardDescriptionText: {
    fontWeight: '400',
    marginTop: '1rem',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

export default styles;
