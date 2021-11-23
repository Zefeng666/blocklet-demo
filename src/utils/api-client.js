import axios from 'axios';

// 定义相关的 endpoint
const endPoints = {
  test: '',
  prod: '',
};

// 创建 axios 的实例
const instance = axios.create({
  baseURL: endPoints.test,
  timeout: 30000,
  headers: { Authorization: 'Bear mytoken' },
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
