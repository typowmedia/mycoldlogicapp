const styles = theme => ({
  suggestionContainer: {
    padding: '0 40px',

    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  },
  suggestionCheckboxTitle: {
    ...theme.typography.display1,
    fontSize: 25,
    fontWeight: '500',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing.unit * 2,

    [theme.breakpoints.down('sm')]: {
      margin: '12px 0',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '12px 0',
      fontSize: 18,
    },
  },
  formControl: {
    padding: theme.spacing.unit,

    '&:not(:last-child)': {
      marginBottom: theme.spacing.unit,
    },
  },
  bestSiteInput: {
    fontSize: 16,
    lineHeight: 1.3,
  },
  bestSiteCheckboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  bestSiteCheckboxInputLabel: {
    fontSize: 16,
    cursor: 'pointer',
    height: '100%',
  },
  bestSiteFormButtonContainer: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  checkbox: {
    height: 35,
  },
});

export default styles;
