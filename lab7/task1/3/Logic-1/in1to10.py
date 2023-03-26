def in1to10(n, outside_mode):
    if (n >= 1 and n <= 10 and outside_mode is False): return True 
    elif n <= 1 and outside_mode is True or n >=10 and outside_mode is True: return True
    else: return False