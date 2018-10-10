import axios from 'axios';

export const submitReport = (report, url, token) => {
  return axios
    .post(url, report, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res)
    .catch(err => err);
};
