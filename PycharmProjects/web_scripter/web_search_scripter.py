import requests
from bs4 import BeautifulSoup
from PIL import Image
from io import BytesIO
import os
import regex
search_keyword = input("Enter search keyword:")
path = search_keyword.replace(" ","_").lower()

par = {"q":search_keyword}
respond = requests.get("https://www.bing.com/images/search",params=par)
print(respond.url)
result = BeautifulSoup(respond.text, 'html.parser')
links = result.find_all("a",{"class":"thumb"})
if not os.path.exists(path):
    os.mkdir(path);
i = 1
for item in links:
    print(item.parent.find("div", {"class":"des"}).text)
    try:
        image_request = requests.get(item.get('href'))
        try:
            image = Image.open(BytesIO(image_request.content))
            image.save(path+"/image"+str(i)+"."+image.format,image.format)
        except:
            print("Failed to save image")
    except:
        print("Failed to open url")
    i+=1