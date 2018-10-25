const styles = theme => ({
  loaForm: {
    display: 'flex',
    flex: '0 0 90%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: '.8rem',
    fontSize: '1.6rem',

    [theme.breakpoints.down('xs')]: {
      flex: 1,
    },
  },
  formControl: {
    marginBottom: '4rem',
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
    justifyContent: 'space-evenly',
    fontSize: '1.8rem',
    marginBottom: '2rem',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between',
    },
  },
  datePicker: {},
  loaSelectItem: {
    fontSize: '1.6rem',
  },
  popper: {
    fontSize: '1.8rem',
  },
  datePickerTitle: {
    ...theme.typography.display1,
    fontWeight: '400',
    color: theme.palette.primary.main,
    paddingBottom: 4,
  },
});

export default styles;
