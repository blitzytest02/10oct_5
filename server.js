/**
 * Node.js Express Tutorial Server
 * 
 * A simple Express.js server demonstrating two basic GET endpoints.
 * This tutorial project shows how to set up Express.js and create routes.
 * 
 * @requires express
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * 
 * Responds to GET requests at the root path ('/') with a "Hello world" message.
 * This is the main landing endpoint for the tutorial server.
 * 
 * @route GET /
 * @param {Object} req - Express request object containing request information
 * @param {Object} res - Express response object for sending the response
 * @returns {void} Sends "Hello world" as text/html response with status 200
 * 
 * @example
 * // Browser: http://localhost:3000/
 * // curl: curl http://localhost:3000/
 * // Response: Hello world
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Evening greeting endpoint handler
 * 
 * Responds to GET requests at the '/evening' path with a "Good evening" message.
 * This endpoint demonstrates adding additional routes to the Express application.
 * 
 * @route GET /evening
 * @param {Object} req - Express request object containing request information
 * @param {Object} res - Express response object for sending the response
 * @returns {void} Sends "Good evening" as text/html response with status 200
 * 
 * @example
 * // Browser: http://localhost:3000/evening
 * // curl: curl http://localhost:3000/evening
 * // Response: Good evening
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Start the Express server
 * 
 * Initializes the HTTP server and binds it to the configured PORT.
 * The server listens for incoming HTTP requests on the specified port.
 * A confirmation message is logged to the console when the server starts successfully.
 * 
 * @param {number} PORT - The port number to listen on (from environment variable or default 3000)
 * @param {Function} callback - Callback function executed when server starts listening
 * @returns {Object} HTTP server instance
 * 
 * @example
 * // Start server with default port:
 * // node server.js
 * // Output: Server running on port 3000
 * 
 * @example
 * // Start server with custom port:
 * // PORT=8080 node server.js
 * // Output: Server running on port 8080
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
