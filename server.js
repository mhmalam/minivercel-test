const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Testing auto-builds\n");
  }).listen(port, () => console.log(`listening on ${port}`));
