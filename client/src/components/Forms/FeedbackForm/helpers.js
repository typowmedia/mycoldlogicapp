export const validate = values => {
  let errors = {};

  if (!values.rating)
    errors.rating = 'Please choose a rating before submitting';
  if (!values.liked)
    errors.liked = 'Please choose your favourite feature before submitting';
  if (!values.disliked)
    errors.disliked =
      'Please choose your least favourite feature before submitting';
  if (!values.message)
    errors.message =
      'Please leave some details on how we can improve the application';

  return errors;
};
