const styles = theme => ({
  sectionDashboard: {
    width: '100vw',
    height: '90vh',
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    alignItems: 'center',
  },
  formTitle: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
  },
  managerFormContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    padding: '3rem',
    width: '80%',
    margin: '0 auto',
    border: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: '1px 2px 4rem rgba(0,0,0,0.4), -1px -2px 4rem rgba(0,0,0,0.4)',
  },
});

export default styles;
