const styles = theme => ({
  navCard: {
    height: '100%',
    width: '97%',
    margin: '0 auto',
    marginBottom: '1rem',
    padding: theme.spacing.unit,
    boxShadow: '1px 3px 4rem rgba(0,0,0,.4)',
    borderRadius: theme.spacing.unit * 5,
    transition: 'all .2s',
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      marginBottom: '10%',
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
    position: 'relative',
    width: '13rem',
    height: '13rem',
    borderRadius: '50%',
    margin: '0 auto',
    marginTop: '2rem',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '1px 3px 1rem rgba(0,0,0,.8)',
  },
  navCardImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 'auto',
  },
  navCardTitle: {
    margin: '2rem 0',
  },
  navCardDescription: {
    marginBottom: '1rem',
    width: '75%',
    textAlign: 'center',
    margin: '0 auto',
  },
});

export default styles;
