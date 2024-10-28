x = open('write.text','w')
x.write("python is very interesting because i love to code")


with open('write.text','r') as x:
    contents = x.read()
    print(contents)

