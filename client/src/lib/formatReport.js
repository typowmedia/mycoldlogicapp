import moment from 'moment';

export const formatSafetyReport = (report, user) => {
  const formattedReport = {
    report: `
  Employee Name: ${
    report.anon ? 'anonymous' : `${user.FirstName} ${user.LastName}`
  } \n\r
  Date of Incident: ${moment(report.date).format('MMMMMM DD YYYY')} \n\r
  Time of Incident: ${moment(report.time).format('LT')} \n\r
  Location of Incident: ${report.location} \n\r
  Place of Incident: ${report.where} \n\r
  Details: ${report.message}
  `,
  };
  return formattedReport;
};

export const formatBestSiteReport = (report, user) => {
  const reasons = report.reasons
    .map(reason => {
      if (reason === 'Other') {
        return `${reason}: ${report.other}`;
      }
      return `${reason} \n\r`;
    })
    .join('');
  const formattedReport = {
    report: `
    Employee: ${user.FirstName} ${user.LastName} \n\r
  Suggestion: ${report.suggestion} \n\r
  This improves ColdLogic by: ${report.details} \n\r
  Potential to improve the following: \n\r ${reasons}
  `,
  };
  return formattedReport;
};

export const formatQuestion = (report, user) => {
  const manager = JSON.parse(report.manager);
  return {
    employeeId:
      user[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ],
    departmentId: manager.departmentId,
    email: manager.email,
    subject: report.subject,
    question: report.question,
  };
};

export const formatLeaveOfAbsence = (report, user) => {
  let timeOffBeg = new Date(report.from).setHours(0, 0, 0, 0);
  timeOffBeg = moment
    .parseZone(timeOffBeg)
    .local()
    .format();
  let timeOffEnd = new Date(report.to).setHours(0, 0, 0, 0);
  timeOffEnd = moment
    .parseZone(timeOffEnd)
    .local()
    .format();
  const timeOffDays = moment(timeOffEnd).diff(moment(timeOffBeg), 'days') + 1;
  const returnDate = moment
    .parseZone(timeOffEnd)
    .local()
    .add(1, 'days')
    .format();
  return {
    employeeId:
      user[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ],
    distCenterId: 1, //hardcoded
    position: '', //hardcoded
    shiftId: 1, //hardcoded
    departmentId: 1, //hardcoded
    leaveAbsReasonId: report.reason,
    reasonDetail: report.message,
    timeOffBeg,
    timeOffEnd,
    timeOffDays,
    returnDate,
  };
};
