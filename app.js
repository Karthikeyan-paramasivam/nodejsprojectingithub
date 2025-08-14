const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = '';
  let contentType = 'text/html';

  if (req.method === 'GET' && req.url === '/') {
    filePath = path.join(__dirname, 'Index.html');
  } else if (req.url.endsWith('.css')) {
    filePath = path.join(__dirname, req.url);
    contentType = 'text/css';
  } else if (req.url.endsWith('.js')) {
    filePath = path.join(__dirname, req.url);
    contentType = 'application/javascript';
  } else if (req.method === 'POST' && req.url === '/submit') {
    req.on('data', () => {}); // We don't need the data content for now
    req.on('end', () => {
      console.log('✅ Submit button clicked');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Submit received');
    });
    return;
  } else if (req.method === 'POST' && req.url === '/upload') {
    req.on('data', () => {});
    req.on('end', () => {
      console.log('📁 Upload triggered');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Upload received');
    });
    return;
  } else {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://34.56.132.32:${PORT}`);
});
