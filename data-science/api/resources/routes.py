from .shoes import ShoesesApi, ShoesOrderBooksApi, ShoesMarketTxApi

def initialize_routes(api):
    api.add_resource(ShoesesApi, '/api/shoeses')
    api.add_resource(ShoesOrderBooksApi, '/api/shoeses/<id>/orderbooks')
    api.add_resource(ShoesMarketTxApi, '/api/shoeses/<id>/market-tx')
