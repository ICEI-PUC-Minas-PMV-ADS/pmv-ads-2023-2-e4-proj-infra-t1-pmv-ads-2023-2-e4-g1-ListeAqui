const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Este caminho será redirecionado para o URL do proxy
    createProxyMiddleware({
      target: 'http://listeaqui-001-site1.btempurl.com',
      changeOrigin: true,
    })
  );
};
