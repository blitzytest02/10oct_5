import os
from flask import Flask

app = Flask(__name__)
PORT = int(os.environ.get('PORT', 3000))


# Root endpoint - returns "Hello world"
@app.route('/')
def hello_world():
    return 'Hello world'


# Evening endpoint - returns "Good evening"
@app.route('/evening')
def good_evening():
    return 'Good evening'


# Start the server
if __name__ == '__main__':
    print(f'Server running on port {PORT}')
    app.run(host='0.0.0.0', port=PORT)
