const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve UI
app.use(express.static(path.join(__dirname, "public")));

// Proxy route
app.use("/proxy", createProxyMiddleware({
  target: "https://example.com", // change later
  changeOrigin: true,
  pathRewrite: { "^/proxy": "" }
}));

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
