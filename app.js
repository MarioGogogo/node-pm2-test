const http = require("http");

const hostname = "localhost";
const port = "9090";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write(`<h1>Hello world123</h1>`);
  res.end();
});
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
