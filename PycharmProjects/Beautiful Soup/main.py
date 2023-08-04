import requests
from bs4 import BeautifulSoup

search_content = input("Enter search content:")
params = {"q": search_content}
respond = requests.get("https://www.bing.com/search?", params=params)
print(respond.status_code)
#print(respond.text)
soup = BeautifulSoup(respond.text, features="html.parser")
result = soup.find("ol",{"id":"b_results"})
links = result.findAll("li",{"class":"b_algo"})
# for item in result:
#     print(item.find("a").attrs['href'])
# print(links)
for item in links:
    item_text = item.find("a").text
    href_text = item.find("a").attrs["href"]

    print(item_text)
    print(href_text)