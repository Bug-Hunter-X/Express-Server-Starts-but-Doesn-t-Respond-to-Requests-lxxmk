const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Uncommon error: Server starts but doesn't respond to requests
// This can happen if there is a mistake in middleware, 
// or if the event loop is blocked by a long-running synchronous operation.