const styles = theme => ({
  suggestionContainer: {
    padding: '0 4rem',

    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem',
    },
  },
  suggestionCheckboxTitle: {
    ...theme.typography.display1,
    fontSize: '2.5rem',
    fontWeight: '500',
    color: theme.palette.primary.main,
    marginBottom: '2rem',

    [theme.breakpoints.down('sm')]: {
      margin: '1.2rem 0',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1.2rem 0',
      fontSize: '1.8rem',
    },
  },
  formControl: {
    padding: '1rem',

    '&:not(:last-child)': {
      marginBottom: '1rem',
    },
  },
  bestSiteInput: {
    fontSize: '1.6rem',
    lineHeight: 1.3,
  },
  bestSiteCheckboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  bestSiteCheckboxInputLabel: {
    fontSize: '1.6rem',
    cursor: 'pointer',
    height: '100%',
  },
  bestSiteFormButtonContainer: {
    margin: '1.5rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
  checkbox: {
    height: '3.5rem',
  },
});

export default styles;
