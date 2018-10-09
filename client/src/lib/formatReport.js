import moment from 'moment';

export const formatReport = report => {
  const formattedReport = {
    report: `
  Date of Incident: ${moment(report.date).format('MMMMMM DD YYYY')} \r
  Place of Incident: ${report.where} \r
  Details: ${report.message}
  `,
  };
  return formattedReport;
};
