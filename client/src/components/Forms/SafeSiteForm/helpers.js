export const validate = values => {
  let errors = {};
  if (!values.date)
    errors.date = 'Please select the date the incident occurred.';
  if (!values.time)
    errors.time = 'Please select the time the incident occurred.';
  if (!values.location)
    errors.location = 'Please select the center the incident occurred.';
  if (!values.where)
    errors.where = 'Please specify where the incident occurred.';
  if (!values.message)
    errors.message = 'Please explain some of the details of the incident.';

  return errors;
};
