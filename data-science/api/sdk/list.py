from sdk.utils import call

def _getPayload():
    return {
        "subject": "SNEAKERS",
        "page": 1 ,
        "limit": 32,
    }

def getShoesList():
    return call("https://xxblue.com/product_list", 
                method="GET", 
                query=_getPayload(), 
                keys={ "result": "result", "total": "total" }, 
                limit=5)
