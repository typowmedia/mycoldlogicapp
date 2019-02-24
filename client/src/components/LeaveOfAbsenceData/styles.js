const styles = theme => ({
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
    ...theme.typography.headline,
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  cell: {
    ...theme.typography.body1,
    fontWeight: '500',
    color: theme.palette.grey.dark,
  },

  // MOBILE STYLES
  mobileLoaContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mobileCard: {
    flex: 1,
    boxShadow: '0 3px 10px #000',
    padding: theme.spacing.unit * 2,
    '&:not(:last-child)': {
      marginBottom: theme.spacing.unit - 4,
    },
  },
  mobileCardRow: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    '&:not(:last-child)': {
      marginBottom: theme.spacing.unit,
    },
  },
  mobileCardHeader: {
    ...theme.typography.body1,
  },
  mobileCardText: {
    flex: 1,
    textAlign: 'right',
    borderBottom: `1px dotted #000`,
    fontSize: 14,
  },
});

export default styles;
