const styles = theme => ({
  feedbackFormContainer: {
    border: `3px solid ${theme.palette.secondary.main}`,
    padding: '3rem',
    boxShadow: '0 1rem 3rem rgba(0,0,0, 0.6)',
  },
  formTitle: {
    padding: '3rem',
  },
  formTitleText: {
    marginLeft: 'none',
    textAlign: 'center',
    fontSize: '2.8rem',
    color: theme.palette.primary.main,
  },
  feedbackForm: {},
  feedbackRatingContainer: {
    padding: '3rem',
    display: 'flex',
    justifyContent: 'space-evenly',

    [theme.breakpoints.down('sm')]: {
      padding: '3rem 0',
    },
  },

  selectBoxContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  selectBox: {
    marginBottom: theme.spacing.unit * 2,
    flex: '0 0 33.3333%',
    fontSize: '1.8rem',

    '& > *': {
      fontSize: 'inherit',
    },
  },
  feedbackSelectItem: {
    fontSize: '1.6rem',
  },
  ratingBox: {
    width: '8%',

    '&:hover': {
      cursor: 'pointer',
    },

    [theme.breakpoints.down('xs')]: {
      width: '14%',
    },
  },
  radioButton: {
    display: 'none',
  },
  messageContainer: {
    width: '83%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '2rem 0',
    },
  },
  feedbackFormButton: {},
  feedbackMessage: {
    fontSize: '1.6rem',
    lineHeight: 1.3,
  },
});

export default styles;
