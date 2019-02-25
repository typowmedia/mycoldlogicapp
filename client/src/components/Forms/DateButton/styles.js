const styles = theme => ({
  dateButtonContainer: {
    position: 'relative',
  },
  dateErrorMessage: {
    position: 'absolute',
    height: '100%',
    width: '120%',
    top: '-40px',
    backgroundColor: theme.palette.secondary.main,
    left: 0,
    zIndex: 100,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  dateButton: {
    minWidth: 200,
    fontSize: theme.spacing.unit + 6,

    '&:not(:last-child)': {
      marginRight: theme.spacing.unit,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing.unit + 4,
      minWidth: theme.spacing.unit * 16,
    },
  },
  dateError: {
    color: theme.palette.error.main,
  },
  dateButtonErrorPopup: {
    backgroundColor: theme.palette.secondary.main,
    padding: '8px 12px',
    color: theme.palette.white.main,
    fontSize: theme.spacing.unit + 3,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});

export default styles;
