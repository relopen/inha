from sdk.utils import call

def _getPayload(productId, size):
    return {
        "page": 1 ,
        "limit": 40,
        "option": size,
        "productId": productId,
    }

urls = {
    "stx": "https://xxblue.com/stx-market-tx-ajax",
    "pzn": "https://xxblue.com/pzn-market-tx-ajax",
    "domestic": "https://xxblue.com/domestic-market-tx-ajax",
}

def getMarketTx(type, productId, size):
    return call(urls[type], 
                method="POST", 
                query=_getPayload(productId, size), 
                keys={ "result": "data", "total": "recordsTotal" })
