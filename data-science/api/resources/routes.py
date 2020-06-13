from .shoes import ShoesesApi, ShoesApi

def initialize_routes(api):
    api.add_resource(ShoesesApi, '/api/shoeses')
    api.add_resource(ShoesApi, '/api/shoeses/<id>')
