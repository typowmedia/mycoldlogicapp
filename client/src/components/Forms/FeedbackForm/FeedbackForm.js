import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { maxCharLength } from '../../../lib/maxCharLength';
import { FormControl } from '@material-ui/core';
import { features, ratings } from './config';
import { validate } from './helpers';

const FeedbackForm = ({ classes }) => (
  <Form
    onSubmit={() => {}}
    validate={values => validate(values)}
    render={({ handleSubmit, pristine, invalid }) => (
      <Grid
        container
        justifyContent="center"
        alignContent="flex-start"
        className={classes.feedbackFormContainer}
      >
        <Grid item xs={12} className={classes.formTitle}>
          <h1 className={classes.formTitleText}>
            How's your experience using the My Coldlogic Portal?
          </h1>
        </Grid>
        <Grid item xs={12} className={classes.feedbackForm}>
          <form onSubmit={handleSubmit}>
            <div className={classes.feedbackRatingContainer}>
              {ratings.map(r => (
                <Field
                  type="radio"
                  name="rating"
                  key={r.rating}
                  value={r.rating}
                >
                  {({ input, meta }) => {
                    let color = 'grey';
                    if (input.checked) color = r.color;
                    return (
                      <div className={classes.ratingBox}>
                        <label htmlFor={`rating${r.rating}`}>
                          {r.icon(color)}
                        </label>
                        <input
                          className={classes.radioButton}
                          id={`rating${r.rating}`}
                          name="rating"
                          type="radio"
                          value={r.rating}
                          checked={input.checked}
                          onChange={() => input.onChange(r.rating)}
                        />
                      </div>
                    );
                  }}
                </Field>
              ))}
            </div>
            <div className={classes.selectBoxContainer}>
              <FormControl className={classes.selectBox}>
                <Field name="liked">
                  {({ input, meta }) => (
                    <Fragment>
                      <InputLabel htmlFor="liked">
                        What feature do you like the most
                      </InputLabel>
                      <Select
                        id="liked"
                        value={input.value}
                        {...input}
                        name="liked"
                      >
                        <MenuItem
                          value=""
                          className={classes.feedbackSelectItem}
                        >
                          <em>None</em>
                        </MenuItem>
                        {features.map(feature => (
                          <MenuItem
                            className={classes.feedbackSelectItem}
                            key={feature.id}
                            value={feature.name}
                          >
                            {feature.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Fragment>
                  )}
                </Field>
              </FormControl>
              <FormControl className={classes.selectBox}>
                <Field name="disliked">
                  {({ input, meta }) => (
                    <Fragment>
                      <InputLabel htmlFor="disliked">
                        What feature do you like the least
                      </InputLabel>
                      <Select
                        id="disliked"
                        value={input.value}
                        {...input}
                        name="disliked"
                      >
                        <MenuItem
                          value=""
                          className={classes.feedbackSelectItem}
                        >
                          <em>None</em>
                        </MenuItem>
                        {features.map(feature => (
                          <MenuItem
                            className={classes.feedbackSelectItem}
                            key={feature.id}
                            value={feature.name}
                          >
                            {feature.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Fragment>
                  )}
                </Field>
              </FormControl>
            </div>
            <FormControl className={classes.messageContainer}>
              <Field name="message">
                {({ input, meta }) => (
                  <TextField
                    id="question"
                    {...input}
                    onChange={e => {
                      const value = maxCharLength(300, e.target.value);
                      input.onChange(value);
                    }}
                    label="Additional Comments"
                    required
                    autoComplete="off"
                    multiline
                    rows="6"
                    InputLabelProps={{
                      className: classes.feedbackMessage,
                    }}
                    inputProps={{
                      className: classes.feedbackMessage,
                    }}
                  />
                )}
              </Field>
            </FormControl>
            <FormControl className={classes.messageContainer}>
              <Button
                type="submit"
                className={classes.feedbackFormButton}
                variant="contained"
                size="large"
                color="secondary"
                disabled={pristine || invalid}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    )}
  />
);

FeedbackForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackForm);
