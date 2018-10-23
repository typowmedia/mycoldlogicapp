const styles = theme => ({
  formContainer: {
    border: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: '1px 2px 4rem rgba(0,0,0,0.4), -1px -2px 4rem rgba(0,0,0,0.4)',
  },
  formTitle: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
  },
  managerFormContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
