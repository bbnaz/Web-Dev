n = int(input())
a = [int(i) for i in input().split()]

k = False

for i in range(1, n):
    if(a[i] * a[i - 1] > 0):
        k = True
        break


if (k):
    print("YES")
else:
    print("NO")