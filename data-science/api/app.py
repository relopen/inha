from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from resources.errors import errors
from resources.routes import initialize_routes

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

api = Api(app, errors=errors)

initialize_routes(api)
