import moment from 'moment';

export const formatSafetyReport = report => {
  const formattedReport = {
    report: `
  Date of Incident: ${moment(report.date).format('MMMMMM DD YYYY')} \r
  Place of Incident: ${report.where} \r
  Details: ${report.message}
  `,
  };
  return formattedReport;
};

export const formatBestSiteReport = report => {
  const reasons = report.reasons
    .map(reason => {
      if (reason === 'Other') {
        return `${reason}: ${report.other}`;
      }
      return `${reason} \n`;
    })
    .join('');
  const formattedReport = {
    report: `
  Suggestion: ${report.suggestion} \r
  This improves ColdLogic by: ${report.details} \r
  Potential to improve the following: \r ${reasons}
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
  return {
    employeeId:
      user[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ],
    leaveAbsReasonId: report.reason,
    reasonDetail: report.message,
    timeOffBeg: new Date(report.from),
    timeOffEnd: new Date(report.to),
  };
};
