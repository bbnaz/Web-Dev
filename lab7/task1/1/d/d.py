n = int(input())
a = [int(i) for i in input().split()]

k = 0

for i in range(1, n):
    if(a[i - 1] < a[i]):
        k += 1

print(k)