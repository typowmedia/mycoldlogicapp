const styles = theme => ({
  bonusRecognitionContainer: {
    minHeight: '100vh',
    paddingTop: theme.spacing.unit * 6,
  },
  bonusTitle: {
    padding: '40px 20px',
  },
  heading: {},
  details: {
    display: 'flex',
    justifyContent: 'space-around',
    '& div': {
      margin: theme.spacing.unit,
    },
  },

  loaStatusContainer: {
    display: 'flex',
    flex: '0 0 90%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: theme.spacing.unit / 2,
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  row: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    padding: '10px 0',

    '&:not(:last-child)': {
      borderBottom: '1px solid #ccc',
    },
    '& > *': {
      flex: 1,
      display: 'block',
      wordWrap: 'break-word',
      fontSize: 'inherit',

      padding: theme.spacing.unit / 2,
    },
  },
  cellReason: {
    flex: 2,
  },
  cellHeading: {
    ...theme.typography.display1,
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  cell: {
    ...theme.typography.headline,
    fontWeight: '500',
    color: theme.palette.grey.dark,
  },
});

export default styles;
