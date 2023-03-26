import math

n = int(input())
k = 0
l = int(math.sqrt(n))

for i in range(1, l+1):
    if n % i == 0:
        if i * i == n:
            k += 1
        else:
            k += 2

print(k)