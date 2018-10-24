const styles = theme => ({
  loaForm: {
    display: 'flex',
    flex: '0 0 90%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: '.8rem',
    fontSize: '1.6rem',
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
    '& > *': {
      fontSize: 'inherit',
      '& > *': {
        fontSize: 'inherit',
      },
    },
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.8rem',
    marginBottom: '.8rem',

    '& > *': {
      marginRight: 5,
    },
  },
  datePicker: {
    padding: '.5rem 1.5rem',
    flex: 1,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  loaSelectItem: {
    fontSize: '1.6rem',
  },
});

export default styles;
