const styles = theme => ({
  form: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
    fontSize: '1.8rem',

    '& > *': {
      fontSize: 'inherit',
      '& > *': {
        fontSize: 'inherit',
      },
    },
  },
  selectItem: {
    fontSize: '1.8rem',
  },
});

export default styles;
