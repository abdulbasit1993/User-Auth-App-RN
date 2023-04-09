import axios from 'axios';

export const postCall = (url, data, token) => {
  return axios({
    method: 'POST',
    url: url,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCall = (url, token) => {
  return axios({
    method: 'GET',
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
