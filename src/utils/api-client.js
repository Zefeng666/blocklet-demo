import axios from 'axios';

// 定义相关的 endpoint
const endPoints = {
  test: '/api/',
  prod: 'https://blockchain.info/',
};
console.log(process.env.NODE_ENV, 'blocklet dev');
const isDev = process.env.NODE_ENV === 'development';
// 创建 axios 的实例
const instance = axios.create({
  baseURL: isDev ? endPoints.test : endPoints.prod,
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
