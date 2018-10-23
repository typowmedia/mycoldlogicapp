const styles = theme => ({
  sectionDashboard: {
    paddingTop: '2rem',
    height: '94vh',
    display: 'flex',
  },
  dashboardGridItem: {
    paddingBottom: '5rem',
  },
  navContainer: {
    width: '100%',
    height: '100%',
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
  formContainer: {
    padding: '2rem',
    width: '100%',
    margin: '0 auto',
    border: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: '1px 2px 4rem rgba(0,0,0,0.4), -1px -2px 4rem rgba(0,0,0,0.4)',
    [theme.breakpoints.up('sm')]: {
      padding: '3rem',
      maxWidth: '80%',
    },
  },
});

export default styles;
