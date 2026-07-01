const { createProxyMiddleware } = require("http-proxy-middleware");

const AI_SERVICE_TARGET =
  process.env.REACT_APP_AI_SERVICE_TARGET ||
  "https://ai.dev.rehab-software.com";

module.exports = function setupProxy(app) {
  app.use(
    "/new-stt",
    createProxyMiddleware({
      target: AI_SERVICE_TARGET,
      changeOrigin: true,
      secure: true,
    }),
  );
};
