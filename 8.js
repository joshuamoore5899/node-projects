const http = require('http');

const server = http.createServer((req, res)=> {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  else if (req.url === '/about') {
    res.end('Our about page');
  }
  else {
    res.end('<h1>Not found</h1> <p>Return to <a href="/">home page</a></p>');
  }


})

server.listen(5000);
