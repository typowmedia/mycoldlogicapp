const styles = theme => ({
  feedbackButtons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
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
    height: '10px',
    width: '10px',
    background: theme.palette.grey.feedback,
    margin: '0 20px',
    borderRadius: '50%',
  },
});

export default styles;
