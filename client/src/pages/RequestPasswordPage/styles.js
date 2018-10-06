const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    paddingTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 8
    }
  },
  message: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 8
    }
  }
})

export default styles
