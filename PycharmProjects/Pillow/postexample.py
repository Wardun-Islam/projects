import requests
import simplejson as json
# my_data = {"name": "Nick", "email":"nick@gmail.com"}
# r = requests.post("https://tryphp.w3schools.com/showphp.php?filename=demo_form_post",data=my_data)
# print(r.status_code)
# f = open("myfile.html","w+")
# f.write(r.text)
# Getting error
error_url = "http://api.open-notify.org/this-api-doesnt-exist"
r = requests.get(error_url)
print("Error Statue Code:",r.status_code)
# Getting data through api by get method
url = "http://api.open-notify.org/astros.json"
r = requests.get(url)
print("Success Statue Code:",r.status_code)
print(json.dumps(r.json(),indent=4))
# sending parameters
parameters = {
    "lat": 40.71,
    "lon": -74
}
parameter_url = "http://api.open-notify.org/iss-pass.json"
r = requests.get(parameter_url,parameters)
print("Parameter Success Statue Code:",r.status_code)
print(json.dumps(r.json(),indent=4))