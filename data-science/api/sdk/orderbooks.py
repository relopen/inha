from sdk.utils import call

def _getPayload(productId, size):
    return {
        "page": 1 ,
        "limit": 40,
        "option": size,
        "productId": productId,
    }

urls = {
    "bid": "https://xxblue.com/bid-orderbooks-ajax",
    "ask": "https://xxblue.com/ask-orderbooks-ajax",
    "tx": "https://xxblue.com/tx-orderbooks-ajax",
}

def getOrderBooks(type, productId, size):
    return call(urls[type], 
                method="POST", 
                query=_getPayload(productId, size), 
                keys={ "result": "data", "total": "recordsTotal" })
