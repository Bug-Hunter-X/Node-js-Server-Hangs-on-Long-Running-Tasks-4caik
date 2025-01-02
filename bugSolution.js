const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate a long-running operation asynchronously
    await new Promise(resolve => {
      let i = 0;
      setTimeout(() => {
        resolve();
      }, 5000); // Simulate a 5-second delay

    });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});