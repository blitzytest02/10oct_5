/**
 * Express.js Tutorial Server
 * A simple Node.js server demonstrating Express.js framework with two basic endpoints
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * Returns a simple "Hello world" greeting message
 * 
 * @route GET /
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {void} Sends "Hello world" as plain text response
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Evening greeting endpoint handler
 * Returns a "Good evening" greeting message
 * 
 * @route GET /evening
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {void} Sends "Good evening" as plain text response
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Server startup callback
 * Logs a confirmation message when the server successfully starts
 * 
 * @callback serverStartCallback
 * @returns {void} Logs server startup message to console
 */

/**
 * Start the Express server
 * Binds and listens for connections on the specified PORT
 * Uses PORT environment variable if available, otherwise defaults to 3000
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
