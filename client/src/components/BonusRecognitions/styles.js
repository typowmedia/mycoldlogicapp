const styles = theme => ({
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
