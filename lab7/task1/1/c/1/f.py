n = int(input())

if(n % 10 > 0):
    while(n != 0):
        print(int(n % 10), end = "")
        n = n // 10
else:
    n = n // 10
    while(n != 0):
        print(int(n % 10), end = "")
        n = n // 10
