from .shoes import ShoesesApi, ShoesOrderBooksApi, ShoesMarketTxApi
from .news import NewsApi

def initialize_routes(api):
    api.add_resource(ShoesesApi, '/api/shoeses')
    api.add_resource(ShoesOrderBooksApi, '/api/shoeses/<id>/orderbooks')
    api.add_resource(ShoesMarketTxApi, '/api/shoeses/<id>/market-tx')

    api.add_resource(NewsApi, '/api/news')
