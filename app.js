const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "ndex.html");
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Error HTML file.");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page. Learn more about us!\n");
  } else if (req.url === "/user/login") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("User clicked login button!\n");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact us at: contact@example.com\n");
  } else if (req.url === "/api/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, this is your API data!", status: "success" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is iuhiu running at http://localhost:${PORT}`);
});







//oldcode

//const http = require("http");

//const server = http.createServer((req, res) => {
  //res.writeHead(200, { "Content-Type": "text/plain" });

  //if (req.url === "/") {
    //res.end("Tamil!\n");
  //} else if (req.url === "/about") {
    //res.end("This is the about page. Learn more about us!\n");
  //} else if(req.url === "/user/login") {
   // res.end("User clicked login button!\n");
  //} else if (req.url === "/contact") {
    //res.end("Contact us at: contact@example.com\n");
  //} else if (req.url === "/api/data") {
    //res.writeHead(200, { "Content-Type": "application/json" });
   // res.end(JSON.stringify({ message: "Hello, this is your API data!", status: "success" }));
 // } else {
  //  res.writeHead(404, { "Content-Type": "text/plain" });
  //  res.end("404 Not Found\n");
 // }
//});

//const PORT = 3000;
//server.listen(PORT, () => {
  //console.log(`Server is running at http://localhost:${PORT}`);
//});
