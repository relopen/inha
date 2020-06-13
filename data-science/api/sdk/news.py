from bs4 import BeautifulSoup
import requests

def getNews():
    res = requests.get("https://hypebeast.kr/footwear/popular?request-type=ajax")
    parser = BeautifulSoup(res.text, "html.parser")
    elements = parser.select(".posts > .post-box")

    news = []
    for el in elements:
        path = el.select_one("a").get("href")
        img = el.select_one("img").get("data-src")
        title = el.select_one(".post-box-content-title span").getText().strip()
        desc = el.select_one(".post-box-content-excerpt").getText().strip()
        time = el.select_one("time").getText()
        news.append({ "path": path, "img": img, "title": title, "desc": desc, "time": time })

    return news
