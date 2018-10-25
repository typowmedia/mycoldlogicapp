const styles = theme => ({
  bonusContainer: {
    display: 'flex',
    flex: 1,
    margin: '0 auto',
    flexDirection: 'column',
    padding: ' 2rem 6rem',
    fontSize: '1.6rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
    },
  },
  bonusRow: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    padding: '1rem 0',

    '&:not(:last-child)': {
      borderBottom: '1px solid #ccc',
    },
    '& > *': {
      flex: 1,
      display: 'block',
      wordWrap: 'break-word',
      fontSize: 'inherit',

      padding: '.5rem',
    },
  },
  bonusCellReason: {
    flex: 2,
  },
  bonusCellHeading: {
    ...theme.typography.display1,
    fontSize: '1.8rem',
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
    padding: '1.2rem',
  },
  bonusMobileCard: {
    flex: 1,
    boxShadow: '0 .3rem 1rem #000',
    padding: '2rem',
    '&:not(:last-child)': {
      marginBottom: '.6rem',
    },
  },
  bonusMobileCardRow: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    '&:not(:last-child)': {
      marginBottom: '1rem',
    },
  },
  bonusMobileCardHeader: {
    ...theme.typography.headline,
  },
  bonusMobileCardText: {
    flex: 1,
    textAlign: 'right',
    borderBottom: `1px dotted #000`,
    fontSize: '1.4rem',
  },
});

export default styles;
