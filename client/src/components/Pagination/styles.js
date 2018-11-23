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
    fontSize: '1.6rem',
    padding: '1rem',
    margin: 3,

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  paginationButtonActive: {
    color: theme.palette.secondary.main,
    fontSize: '1.8rem',
  },
});

export default styles;
