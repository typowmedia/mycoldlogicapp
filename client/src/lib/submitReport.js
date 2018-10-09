import { formatSafetyReport } from './formatReport';
import axios from 'axios';

export const submitReport = (report, url, token) => {
  const data = formatSafetyReport(report);
  return axios
    .post(url, data, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res)
    .catch(err => err);
};
