const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 8,
      padding: theme.spacing.unit * 4,
    },
  },
  heading: {},
  details: {
    display: 'flex',
    justifyContent: 'space-around',
    '& div': {
      margin: theme.spacing.unit,
    },
  },
});

export default styles;
