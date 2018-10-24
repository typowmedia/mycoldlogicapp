const styles = theme => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '.5rem',
    fontSize: '1.6rem',
  },

  heading: {},
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
    '& h3': {
      fontSize: '1.8rem',
    },
  },
  cellReason: {
    flex: 3,
  },
  cell: {},
});

export default styles;
