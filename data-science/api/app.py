from flask import Flask
from flask_restful import Api

from resources.errors import errors
from resources.routes import initialize_routes

app = Flask(__name__)
api = Api(app, errors=errors)

initialize_routes(api)
