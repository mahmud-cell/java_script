# x = open('write.text','r')
# contents = x.close()
# print(contents)

with open('write.text', 'r') as x:
    c = x.close()
    print(c)
