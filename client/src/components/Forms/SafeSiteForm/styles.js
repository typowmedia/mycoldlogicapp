const styles = theme => ({
  safeSiteForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '0 auto',
    padding: '4rem',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '1rem',
    },
  },
  safeSiteDatePlaceContainer: {
    width: '50%',
    marginBottom: '1rem',
  },
  locationContainer: {
    padding: '1rem 0',
    '& > *': {
      fontSize: '1.6rem',
    },
  },
  whereContainer: {
    padding: '1rem 0',
  },
  safeSiteDateContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '1.8rem',
    marginBottom: '2rem',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between',
    },
  },
  datePickerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  messageContainer: {
    marginTop: '1rem',
  },
  safeSiteLabel: {
    fontSize: '1.6rem',
  },
  safeSiteInput: {
    fontSize: '1.6rem',
  },
  dateLabel: {
    fontSize: '1.6rem',
    paddingBottom: 3,
  },
  formButtonContainer: {
    padding: '3rem',
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
    padding: '1rem 0',
  },
  safeSiteCheckbox: {
    marginLeft: -13,
  },
  safeSiteCheckboxInputLabel: {
    fontSize: '1.4rem',
  },
});

export default styles;
