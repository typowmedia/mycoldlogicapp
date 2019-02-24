const styles = theme => ({
  loaForm: {
    display: 'flex',
    flex: '0 0 90%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: theme.spacing.unit - 2,
    fontSize: 16,

    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  formControl: {
    marginBottom: theme.spacing.unit * 4,
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
    fontSize: 18,
    marginBottom: theme.spacing.unit * 2,

    [theme.breakpoints.down('xs')]: {
      display: 'block',
      justifyContent: 'space-between',
    },
  },
  loaSelectItem: {
    fontSize: 16,
  },
  popper: {
    fontSize: 18,
  },
  datePickerTitle: {
    ...theme.typography.body1,
    fontWeight: '400',
    color: theme.palette.primary.main,
    paddingBottom: 4,
  },
  errorMessage: {
    color: 'red',
  },
});

export default styles;
