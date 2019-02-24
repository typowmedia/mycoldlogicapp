const styles = theme => ({
  pagination: {
    width: '100%',
  },
  paginationControls: {
    display: 'flex',
    justifyContent: 'center',
  },
  paginationButton: {
    display: 'block',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white.main,
    borderRadius: 3,
    border: 'none',
    fontSize: 16,
    padding: theme.spacing.unit,
    margin: 3,

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  paginationButtonActive: {
    color: theme.palette.secondary.main,
    fontSize: 18,
  },
});

export default styles;
