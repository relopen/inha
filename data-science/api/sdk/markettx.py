from sdk.utils import call

def _getPayload(productId):
    return {
        "page": 1 ,
        "limit": 40,
        "productId": productId,
    }

urls = {
    "stx": "https://xxblue.com/stx-market-tx-ajax",
    "pzn": "https://xxblue.com/pzn-market-tx-ajax",
    "domestic": "https://xxblue.com/domestic-market-tx-ajax",
}

def getMarketTx(type, productId):
    return call(urls[type], 
                method="POST", 
                query=_getPayload(productId), 
                keys={ "result": "data", "total": "recordsTotal" })
