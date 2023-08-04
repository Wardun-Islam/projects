import re
equation = input("Enter equation:")
sub = re.sub('[a-zA-z,:" "]',"",equation)
out = eval(sub)
inp = input(out)
while inp != '=':
    sub = re.sub('[a-zA-z,:" "]', "", str(out)+inp)
    out = eval(sub)
    inp = input(out)