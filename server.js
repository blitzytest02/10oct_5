const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint - returns "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Evening endpoint - returns "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
