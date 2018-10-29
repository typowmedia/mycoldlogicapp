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
  whereContainer: {
    padding: '1rem 0',
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
});

export default styles;
