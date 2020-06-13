import json

from flask import Response, request
from flask_restful import Resource
from sdk.list import getShoesList
from sdk.orderbooks import getOrderBooks
from sdk.markettx import getMarketTx


class ShoesesApi(Resource):
    def get(self):
        try:
            shoeses = getShoesList()
            return Response(json.dumps(shoeses), mimetype="application/json", status=200)
        except Exception:
            raise InterruptedError


class ShoesOrderBooksApi(Resource):
    def get(self, id):
        try:
            # 입찰가
            bid = getOrderBooks("bid", id)
            # 판매가
            ask = getOrderBooks("ask", id)
            # 거래가
            tx = getOrderBooks("tx", id)
            return Response(json.dumps({ "bid": bid, "ask": ask, "tx": tx }), mimetype="application/json", status=200)
        except Exception:
            raise InternalServerError

class ShoesMarketTxApi(Resource):
    def get(self, id):
        try:
            # 미국
            stx = getMarketTx("stx", id)
            # 중국
            pzn = getMarketTx("pzn", id)
            # 한국
            domestic = getMarketTx("domestic", id)
            return Response(json.dumps({ "stx": stx, "pzn": pzn, "domestic": domestic }), mimetype="application/json", status=200)
        except Exception:
            raise InternalServerError
