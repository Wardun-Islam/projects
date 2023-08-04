'''new_file = open("./test.txt","w")
new_file.write("This is my first file writting in python.")
new_file.write("\nThis is second line")
new_file.close()
old_file = open("./test.txt","r")
print(old_file.read())
old_file.close()'''

import simplejson as json
import os

if os.path.isfile("./ages.json") and os.stat("./ages.json").st_size>0:
    old_file = open("./ages.json","r+")
    data = json.loads(old_file.read())
    print("Current age is",data["Age"])
    data["Age"] = data["Age"]+1
else:
    old_file = open("./ages.json","w+")
    data = {"Name":"Fatehin","Age":27}

old_file.seek(0)
old_file.write(json.dumps(data))