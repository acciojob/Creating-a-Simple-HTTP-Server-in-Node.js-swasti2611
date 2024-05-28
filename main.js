const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  // TODO: Send the ""Hello, world!"" response
  res.end("Hello, world!")
});

server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log(`Server started and listening on port ${port}`);
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
