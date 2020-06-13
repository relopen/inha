from sdk.utils import call

def _getPayload(productId):
    return {
        "page": 1 ,
        "limit": 40,
        "productId": productId,
    }

urls = {
    "bid": "https://xxblue.com/bid-orderbooks-ajax",
    "ask": "https://xxblue.com/ask-orderbooks-ajax",
    "tx": "https://xxblue.com/tx-orderbooks-ajax",
}

def getOrderBooks(type, productId):
    return call(urls[type], 
                method="POST", 
                query=_getPayload(productId), 
                keys={ "result": "data", "total": "recordsTotal" })
