const styles = theme => ({
  feedbackButtons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 0',
  },
  feedbackButton: {
    border: 'none',
    background: 'none',
    ...theme.typography.headline,
    lineHeight: 1,
    color: theme.palette.grey.feedback,

    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.secondary.main,
      transition: 'all .3s',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      transform: 'translateY(2px)',
    },
  },
  circle: {
    height: '1rem',
    width: '1rem',
    background: theme.palette.grey.feedback,
    margin: '0 2rem',
    borderRadius: '50%',
  },
});

export default styles;
