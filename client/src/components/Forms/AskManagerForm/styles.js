const styles = theme => ({
  form: {
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
    fontSize: '1.8rem',

    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
    },

    '& > *': {
      fontSize: 'inherit',
      '& > *': {
        fontSize: 'inherit',
      },
    },
  },
  selectItem: {
    fontSize: '1.8rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
    },
  },
});

export default styles;
