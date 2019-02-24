const styles = theme => ({
  bonusContainer: {
    display: 'flex',
    flex: 1,
    margin: '0 auto',
    flexDirection: 'column',
    padding: ' 20px 60px',
    fontSize: theme.spacing.unit + 6,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing.unit + 4,
    },
  },
  bonusRow: {
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

      padding: '5px',
    },
  },
  bonusCellReason: {
    flex: 2,
  },
  bonusCellHeading: {
    ...theme.typography.display1,
    fontSize: theme.spacing.unit + 8,
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  bonusCell: {
    ...theme.typography.headline,
    fontWeight: '500',
    color: theme.palette.grey.dark,
  },

  // MOBILE STYLES
  mobileBonusContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit + 2,
  },
  bonusMobileCard: {
    flex: 1,
    boxShadow: '0 3px 10px #000',
    padding: '20px',
    '&:not(:last-child)': {
      marginBottom: '6px',
    },
  },
  bonusMobileCardRow: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    '&:not(:last-child)': {
      marginBottom: theme.spacing.unit,
    },
  },
  bonusMobileCardHeader: {
    ...theme.typography.body1,
    color: theme.palette.primary.main,
  },
  bonusMobileCardText: {
    flex: 1,
    textAlign: 'right',
    borderBottom: `1px dotted #000`,
    fontSize: theme.spacing.unit + 4,
  },
});

export default styles;
