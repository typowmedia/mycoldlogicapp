const styles = theme => ({
  // MOBILE STYLES
  mobileLoaContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mobileCard: {
    flex: 1,
    boxShadow: '0 .3rem 1rem #000',
    padding: '2rem',
    '&:not(:last-child)': {
      marginBottom: '.6rem',
    },
  },
  mobileCardRow: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    '&:not(:last-child)': {
      marginBottom: '1rem',
    },
  },
  mobileCardHeader: {
    ...theme.typography.headline,
  },
  mobileCardText: {
    flex: 1,
    textAlign: 'right',
    borderBottom: `1px dotted #000`,
    fontSize: '1.4rem',
  },
});

export default styles;
