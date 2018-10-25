const styles = theme => ({
  dateButtonContainer: {
    position: 'relative',
  },
  dateErrorMessage: {
    position: 'absolute',
    height: '100%',
    width: '120%',
    top: '-4rem',
    backgroundColor: theme.palette.secondary.main,
    left: 0,
    zIndex: 100,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  dateButton: {
    minWidth: '20rem',
    fontSize: '1.6rem',

    '&:not(:last-child)': {
      marginRight: '1rem',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '1.4rem',
      minWidth: '16rem',
    },
  },
  dateError: {
    color: theme.palette.error.main,
  },
  dateButtonErrorPopup: {
    backgroundColor: theme.palette.secondary.main,
    padding: '.8rem 1.2rem',
    color: theme.palette.white.main,
    fontSize: '1.3rem',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});

export default styles;
