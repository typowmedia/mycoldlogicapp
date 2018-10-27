const styles = theme => ({
  bestSiteForm: {
    paddingTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '1.6rem',

    [theme.breakpoints.down('md')]: {},
  },
  bestSiteFormInputContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  suggestionContainer: {
    padding: '1rem 4rem',
  },
  suggestionCheckboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 4rem',
  },
  suggestionCheckboxTitle: {
    ...theme.typography.display1,
    marginBottom: '2rem',
  },
  formControl: {
    padding: '1rem',

    '&:not(:last-child)': {
      marginBottom: '1rem',
    },
  },
  bestSiteInputLabel: {
    fontSize: '1.5rem',
  },
  bestSiteInput: {
    fontSize: '1.6rem',
  },
  bestSiteCheckboxInputLabel: {
    fontSize: '2.3rem',
    lineHeight: 1,
    margin: '-0.8rem',
    cursor: 'pointer',
  },
  bestSiteButtonContainer: {},
});

export default styles;
