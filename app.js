//console.log("Hello, pippin this new script JavaScript!");
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, pippin test my company name test!\n");
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
