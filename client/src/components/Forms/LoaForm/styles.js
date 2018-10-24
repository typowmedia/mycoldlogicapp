const styles = theme => ({
  accountForm: {
    display: 'flex',
    flex: '0 0 80%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: '.8rem',
    fontSize: '1.6rem',

    '& > *': {
      fontSize: 'inherit',
      '& > *': {
        fontSize: 'inherit',
      },
    },
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

export default styles;
