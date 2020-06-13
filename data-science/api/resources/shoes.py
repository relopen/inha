import json

from flask import Response, request
from flask_restful import Resource, reqparse
from sdk.list import getShoeses
from sdk.orderbooks import getOrderBooks
from sdk.markettx import getMarketTx

def getQuery():
    parser = reqparse.RequestParser()
    parser.add_argument('size', store_missing=False)
    args = parser.parse_args()
    return {
        "size": args.get("size", 270)
    }


class ShoesesApi(Resource):
    def get(self):
        try:
            shoeses = getShoeses()
            return Response(json.dumps(shoeses), mimetype="application/json", status=200)
        except Exception:
            raise InterruptedError


class ShoesOrderBooksApi(Resource):
    def get(self, id):
        query = getQuery()
        size = query.get("size")

        try:
            # 입찰가
            bid = getOrderBooks("bid", id, size)
            # 판매가
            ask = getOrderBooks("ask", id, size)
            # 거래가
            tx = getOrderBooks("tx", id, size)
            return Response(json.dumps({ "bid": bid, "ask": ask, "tx": tx }), mimetype="application/json", status=200)
        except Exception:
            raise InternalServerError

class ShoesMarketTxApi(Resource):
    def get(self, id):
        query = getQuery()
        size = query.get("size")

        try:
            # 미국
            stx = getMarketTx("stx", id, size)
            # 중국
            pzn = getMarketTx("pzn", id, size)
            # 한국
            domestic = getMarketTx("domestic", id, size)
            return Response(json.dumps({ "stx": stx, "pzn": pzn, "domestic": domestic }), mimetype="application/json", status=200)
        except Exception:
            raise InternalServerError
