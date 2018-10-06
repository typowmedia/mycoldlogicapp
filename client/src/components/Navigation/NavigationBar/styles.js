const styles = theme => ({
  flex: {
    flexGrow: 3,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    padding: 5,
    alignSelf: 'flex-end',
    width: 200
  }
})

export default styles
