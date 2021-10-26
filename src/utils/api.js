import axios from 'axios';

const api = ({
  url,
  method = 'get',
  data = null,
  params = null,
  responseType = 'json',
}) => {
  return axios({
    method,
    url,
    data,
    params,
    responseType,
  });
};

export default api;
