import json

from flask import Response, request
from flask_restful import Resource
from sdk.list import getShoesList
from sdk.orderbooks import getOrderBooks


class ShoesesApi(Resource):
    def get(self):
        shoeses = getShoesList()
        return Response(json.dumps(shoeses), mimetype="application/json", status=200)


class ShoesApi(Resource):
    def get(self, id):
        try:
            bid = getOrderBooks("bid", id)
            ask = getOrderBooks("ask", id)
            tx = getOrderBooks("tx", id)
            return Response(json.dumps({ "bid": bid, "ask": ask, "tx": tx }), mimetype="application/json", status=200)
        except Exception:
            raise InternalServerError
