import json

from flask import Response, request
from flask_restful import Resource, reqparse

from sdk.news import getNews

from .errors import InternalServerError

class NewsApi(Resource):
    def get(self):
        try:
            news = getNews()
            return Response(json.dumps(news), mimetype="application/json", status=200)
        except Exception:
            raise InternalServerError
