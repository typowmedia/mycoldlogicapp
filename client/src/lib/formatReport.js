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

export const formatQuestion = report => {
  console.log(report);
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

  // {
  //   "id": 0,
  //   "employeeId": 0,
  //   "requestDate": "2018-10-17T22:53:40.007Z",
  //   "distCenterId": 0,
  //   "position": "string",
  //   "shiftId": 0,
  //   "departmentId": 0,
  //   "leaveAbsReasonId": 0,
  //   "reasonDetail": "string",
  //   "timeOffBeg": "2018-10-17T22:53:40.008Z",
  //   "timeOffEnd": "2018-10-17T22:53:40.008Z",
  //   "timeOffDays": 0,
  //   "returnDate": "2018-10-17T22:53:40.008Z",
  //   "empSignDate": "2018-10-17T22:53:40.008Z",
  //   "deptMgrSignDate": "2018-10-17T22:53:40.008Z",
  //   "genMgrSignDate": "2018-10-17T22:53:40.008Z",
  //   "hrSignDate": "2018-10-17T22:53:40.008Z",
  //   "torLoaStatusId": 0,
  //   "isActive": true,
  //   "notes": "string",
  //   "log": "string"
  // }
};
