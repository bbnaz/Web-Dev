def is_leap(year):
    leap = False
    
    # Write your logic here
    if year % 4 != 0:
        return False
    
    elif year % 100 == 0:
        if year % 400 == 0:
            return True
        else:
            return False
    else:
        return True
    
    return leap

year = int(input())
print(is_leap(year))