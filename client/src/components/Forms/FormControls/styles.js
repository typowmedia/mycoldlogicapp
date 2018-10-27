const styles = theme => ({
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    minWidth: '25rem',
  },
  formButton: {
    width: '100%',
  },
  chipError: {
    background: theme.palette.error.main,
    color: theme.palette.white.main,
    transition: 'all .2s',
    '&:hover': {
      background: theme.palette.error.dark,
      transform: 'translateY(-3px)',
      boxShadow: '0 2px 10px #000',
    },
    '&:active': {
      background: theme.palette.error.dark,
      transform: 'translateY(0)',
      boxShadow: '0 1px 5px #000',
    },
  },
  chipSuccess: {
    background: theme.palette.success.main,
    color: theme.palette.white.main,
    '&:hover': {
      background: theme.palette.success.dark,
      transform: 'translateY(-3px)',
      boxShadow: '0 2px 10px #000',
    },
    '&:active': {
      background: theme.palette.success.dark,
      transform: 'translateY(0)',
      boxShadow: '0 1px 5px #000',
    },
  },
});

export default styles;
