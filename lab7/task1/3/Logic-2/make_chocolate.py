def make_chocolate(small, big, goal):
    if big < goal:
        s = goal - big
    if s <= small:
        return s
    else:
        s = goal % 5
    return (s if(s<=small) else -1)
    
    return -1