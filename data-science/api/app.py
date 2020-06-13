from flask import Flask
from flask_restful import Api

from database.db import initialize_db
from resources.errors import errors
from resources.routes import initialize_routes

app = Flask(__name__)
# app.config.from_envvar('SA_SETTINGS')
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost:27017/shoes-analytics?authSource=admin',
    'username':'root',
    'password':'shoes_a',
}

api = Api(app, errors=errors)

initialize_db(app)
initialize_routes(api)
