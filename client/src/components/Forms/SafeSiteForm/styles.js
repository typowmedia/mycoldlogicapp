const styles = theme => ({
  safeSiteForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '0 auto',
    padding: theme.spacing.unit * 4,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing.unit,
    },
  },
  safeSiteDatePlaceContainer: {
    width: '50%',
    marginBottom: theme.spacing.unit,
  },
  locationContainer: {
    padding: '10px 0',
    '& > *': {
      fontSize: 16,
    },
  },
  whereContainer: {
    padding: '10px 0',
  },
  safeSiteDateContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: 18,
    marginBottom: theme.spacing.unit * 2,

    [theme.breakpoints.down('xs')]: {
      display: 'block',
      marginBottom: 0,
      justifyContent: 'space-between',
    },
  },
  datePickerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.unit,
  },
  messageContainer: {
    marginTop: theme.spacing.unit,
  },
  safeSiteLabel: {
    fontSize: 16,
  },
  safeSiteInput: {
    fontSize: 16,
  },
  dateLabel: {
    fontSize: 16,
    paddingBottom: 3,
  },
  formButtonContainer: {
    padding: theme.spacing.unit * 3,
    width: '50%',
    margin: '0 auto',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  errorMessage: {
    color: 'red',
  },
  safeSiteAnonContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
  },
  safeSiteCheckbox: {
    marginLeft: -13,
  },
  safeSiteCheckboxInputLabel: {
    fontSize: 14,
  },
});

export default styles;
