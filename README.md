# Python Flask Tutorial Server

A simple Python tutorial project demonstrating the Flask framework with two basic GET endpoints.

## Description

This project serves as an educational example of building a web server with Python and Flask. It implements a minimal HTTP server with two endpoints that return plain text responses, perfect for learning the fundamentals of Flask routing and request handling.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Python**: Version 3.8 or higher (required for Flask 3.x)
- **pip**: Python Package Manager (comes bundled with Python)

You can verify your installations by running:
```bash
python --version
pip --version
```

## Installation

Follow these steps to set up the project:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   This will install Flask 3.1.0 and its dependencies.

## Usage

To start the server, run the following command:

```bash
python app.py
```

Or using Flask's development server:

```bash
flask run --port 3000
```

The server will start and listen on port 3000 by default. You can configure a different port by setting the `PORT` environment variable:

```bash
PORT=8080 python app.py
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
├── .gitignore          # Git ignore patterns for Python projects
├── README.md           # This file
├── requirements.txt    # Python dependencies manifest
├── app.py              # Main server entry point
└── venv/               # Virtual environment (not tracked in git)
```

## Technology Stack

- **Runtime**: Python (v3.8+)
- **Framework**: Flask (v3.1.0)
- **Package Manager**: pip

## License

ISC