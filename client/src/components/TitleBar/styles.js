const styles = theme => ({
  titleBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-evenly'
    }
  },
  icon: {
    height: 60,
    width: 60
    // height: 120,
    // width: 120
  },
  title: {
    ...theme.typography.headline,
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.display2
    }
  }
})

export default styles
