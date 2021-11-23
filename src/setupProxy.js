const { createProxyMiddleware } = require('http-proxy-middleware');
//1.0.0版本前都是用proxy,1.0.0后使用porxy会报错,应使用createProxyMiddleware;
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://blockchain.info/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true, // target是域名的话，需要这个参数，
    })
  );
};
