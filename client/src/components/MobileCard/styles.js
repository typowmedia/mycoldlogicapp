const styles = theme => ({
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
    margin: '8px 15px',
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
    color: theme.palette.primary.main,
  },
  mobileCardText: {
    flex: 1,
    textAlign: 'right',
    borderBottom: `1px dotted #000`,
    fontSize: theme.spacing.unit + 4,
  },
});

export default styles;
