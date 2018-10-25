export const checkDates = (from, to) => {
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
