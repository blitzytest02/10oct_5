# Node.js Express Tutorial Server

A simple Node.js tutorial project demonstrating the Express.js framework with two basic GET endpoints.

## Description

This project serves as an educational example of building a web server with Node.js and Express.js. It implements a minimal HTTP server with two endpoints that return plain text responses, perfect for learning the fundamentals of Express.js routing and request handling.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher (required for Express.js 5.x)
- **npm**: Node Package Manager (comes bundled with Node.js)

You can verify your installations by running:
```bash
node --version
npm --version
```

## Installation

Follow these steps to set up the project:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This will install Express.js 5.1.0 and its 67 transitive dependencies (68 total packages).

## Usage

To start the server, run one of the following commands:

```bash
npm start
```

Or directly with Node.js:

```bash
node server.js
```

The server will start and listen on port 3000 by default. You can configure a different port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

Or:

```bash
PORT=8080 node server.js
```

Upon successful startup, you'll see the following message in your console:
```
Server running on port 3000
```

## API Endpoints

The server exposes the following endpoints:

### 1. Root Endpoint
- **Method**: GET
- **Path**: `/`
- **Response**: `Hello world`
- **Status Code**: 200
- **Content-Type**: text/html

### 2. Evening Endpoint
- **Method**: GET
- **Path**: `/evening`
- **Response**: `Good evening`
- **Status Code**: 200
- **Content-Type**: text/html

## Examples

### Using a Web Browser

Open your browser and navigate to:
- http://localhost:3000/ → displays "Hello world"
- http://localhost:3000/evening → displays "Good evening"

### Using cURL

Test the endpoints from the command line:

```bash
# Test the root endpoint
curl http://localhost:3000/

# Expected output: Hello world
```

```bash
# Test the evening endpoint
curl http://localhost:3000/evening

# Expected output: Good evening
```

## Project Structure

```
.
├── .gitignore          # Git ignore patterns for Node.js projects
├── README.md           # This file
├── package.json        # Node.js dependencies manifest
├── package-lock.json   # Dependency lock file
├── server.js           # Main server entry point (Express.js application)
└── node_modules/       # Installed dependencies (not tracked in git)
```

## Technology Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js (v5.1.0)
- **Package Manager**: npm

## License

ISC