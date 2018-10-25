import React, { Component } from 'react';
import { withStyles, Button, Popper, Paper, Fade } from '@material-ui/core';
import styles from './styles';

class DateButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      open: false,
    };
  }

  _handleMouseEnter = event => {
    const { currentTarget } = event;
    this.setState({
      anchorEl: currentTarget,
      open: true,
    });
  };
  _handleMouseLeave = event => {
    this.setState({
      anchorEl: null,
      open: false,
    });
  };

  render() {
    const {
      onClick,
      value,
      classes,
      placeHolder,
      error,
      pristine,
    } = this.props;
    return (
      <div
        className={classes.dateButtonContainer}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        {error && (
          <Popper
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            transition
            placement="top"
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className={classes.dateButtonErrorPopup}>{error}</Paper>
              </Fade>
            )}
          </Popper>
        )}
        <Button
          variant="outlined"
          color="primary"
          className={`${classes.dateButton} ${error && classes.dateError}`}
          onClick={onClick}
        >
          {pristine ? placeHolder : value}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(DateButton);
