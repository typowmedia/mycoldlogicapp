const styles = theme => ({
  feedbackFormContainer: {
    border: `3px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing.unit * 3,
    boxShadow: '0 10px 30px rgba(0,0,0, 0.6)',
  },
  formTitle: {
    padding: theme.spacing.unit * 3,
  },
  formTitleText: {
    marginLeft: 'none',
    textAlign: 'center',
    fontSize: 28,
    color: theme.palette.primary.main,
  },
  feedbackForm: {},
  feedbackRatingContainer: {
    padding: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'space-evenly',

    [theme.breakpoints.down('sm')]: {
      padding: '30px 0',
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
    fontSize: 18,

    '& > *': {
      fontSize: 'inherit',
    },
  },
  feedbackSelectItem: {
    fontSize: 16,
  },
  ratingBox: {
    textAlign: 'center',
    width: '8%',
    color: 'red',

    [theme.breakpoints.down('xs')]: {
      width: '14%',
    },
  },
  feedbackIcon: {
    '&:hover': {
      cursor: 'pointer',
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
    padding: theme.spacing.unit * 3,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '20px 0',
    },
  },
  feedbackFormButton: {},
  feedbackMessage: {
    fontSize: 16,
    lineHeight: 1.3,
  },
});

export default styles;
