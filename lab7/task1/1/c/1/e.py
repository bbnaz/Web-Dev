n = int(input())
k = 0
while (n != 0):
    k = k + n % 10
    n = n // 10
print(k)