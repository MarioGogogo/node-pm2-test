const http = require("http");

const hostname = "localhost";
const port = "9090";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write(`<h1>现在开始模拟啦</h1>`);
  res.end();
});
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
