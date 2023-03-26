x = int(input())
d = int(input())
k = 0
while (x != 0):
    if(d == int(x % 10)):
        k += 1
    x = x // 10
print(k)