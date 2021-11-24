"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 定义相关的 endpoint
var endPoints = {
  test: '/api/',
  prod: 'https://blockchain.info/'
};
console.log(process.env.NODE_ENV, 'blocklet dev');
var isDev = process.env.NODE_ENV === 'development'; // 创建 axios 的实例

var instance = _axios["default"].create({
  baseURL: isDev ? endPoints.test : endPoints.prod,
  timeout: 30000,
  headers: {
    Authorization: 'Bear mytoken'
  }
});

instance.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  return Promise.reject(err);
});
var _default = instance;
exports["default"] = _default;