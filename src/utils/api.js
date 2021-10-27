import axios from 'axios';

export default ({
  url,
  method = 'get',
  data = null,
  params = null,
  responseType = 'json',
}) => {
  // @ts-ignore
  return axios({
    method,
    url,
    data,
    params,
    responseType,
  });
};
