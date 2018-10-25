const styles = theme => ({
  container: {
    display: 'flex',
    flex: '0 0 90%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: '.5rem',
    fontSize: '1.6rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
    },
  },

  row: {
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
