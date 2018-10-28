import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Spinner from '../../UI/Spinner';
import styles from './styles';
import PropTypes from 'prop-types';

const FormControls = ({
  classes,
  loading,
  error,
  success,
  successClicked,
  errorClicked,
  pristine,
  invalid,
}) => (
  <div className={classes.buttons}>
    {loading ? (
      <div>
        <Spinner size={30} color="secondary" />
      </div>
    ) : (
      <Fragment>
        {success && (
          <Chip
            label="Message sent! Your manager will get back to you shortly."
            onClick={() => successClicked()}
            onDelete={() => successClicked()}
            className={classes.chipSuccess}
          />
        )}
        {error && (
          <Chip
            label="Oops something went wrong! Please try again later."
            onClick={() => errorClicked()}
            onDelete={() => errorClicked()}
            className={classes.chipError}
          />
        )}
        {error || success ? null : (
          <Button
            type="submit"
            className={classes.formButton}
            variant="contained"
            size="large"
            color="secondary"
            disabled={pristine || invalid}
          >
            Submit
          </Button>
        )}
      </Fragment>
    )}
  </div>
);

FormControls.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool,
  successClicked: PropTypes.func,
  errorClicked: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default withStyles(styles)(FormControls);
