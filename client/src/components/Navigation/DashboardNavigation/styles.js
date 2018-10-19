const styles = theme => ({
  navFlexContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    transition: 'all .2s',
    transform: 'translateX(4rem)',
    '@media (max-width: 1080px)': {
      transform: 'translateX(0)',
    },
  },
  flexContainerItem: {
    width: '24rem',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 1080px)': {
      width: '22rem',
    },
  },
});

export default styles;
