export const validate = values => {
  let errors = {};
  if (!values.suggestion) errors.suggestion = 'Please enter a suggestion.';
  if (!values.details)
    errors.details = 'Please explain some details of your suggestion.';
  if (!values.reasons)
    errors.reasons = 'Please select a minimum of one reason.';
  if (values.reasons) {
    if (values.reasons.length < 1)
      errors.reasons = 'Please select a minimum of one reason.';
    if (values.reasons.find(reason => reason === 'Other')) {
      if (!values.other) errors.other = 'Please specify';
    }
  }
  return errors;
};
