import requests
params = {"q": "pizza"}
r = requests.get("https://www.bing.com/search",params=params)
f = open("./google.html","w+",encoding="utf-8")
print(r.status_code)
print(r.url)
f.write(r.text)

