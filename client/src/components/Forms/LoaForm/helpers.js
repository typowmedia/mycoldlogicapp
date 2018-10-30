const checkDates = (from, to) => {
  if (from > to) {
    return {
      error: 'from',
      message: 'The date is after your end date.',
    };
  }
  if (to < from) {
    return {
      error: 'to',
      message: 'The date is before your start date.',
    };
  }
  return true;
};

export const validate = values => {
  const from = new Date(values.from).setHours(0, 0, 0, 0);
  const to = new Date(values.to).setHours(0, 0, 0, 0);

  let errors = {};

  if (!values.from) errors.from = 'Please choose when to start your leave.';
  if (!values.to) errors.to = 'Please choose when to end your leave.';
  const dateCheck = checkDates(from, to);
  if (dateCheck !== true) {
    errors[dateCheck.error] = dateCheck.message;
  }
  if (!values.message) errors.message = 'Please enter some details.';
  if (!values.reason) errors.reason = 'Please select a reason.';

  return errors;
};
