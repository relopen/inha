import requests
import json
import math

def _caller(method, url, query):
    if method == "GET":
        r = requests.get(url, params=query, headers={'Content-Type': 'application/json'})
    else:
        r = requests.post(url, data=json.dumps(query), headers={'Content-Type': 'application/json'})
    return r
    
def call(url, **options):
    query = options['query']
    result = _caller(options['method'], url, query).json()
    all_result = result[options['keys']['result']];
    all_page = math.ceil(result[options['keys']['total']] / 10)

    try:
        if options['limit']:
            all_page = options['limit'] if all_page > options['limit'] else all_page
    except:
        pass
    for index in range(2, all_page + 1):
        query['page'] = index
        result = _caller(options['method'], url, query).json()
        all_result.extend(result[options['keys']['result']])
    return all_result
