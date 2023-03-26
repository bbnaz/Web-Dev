def parrot_trouble(talking, hour):
    if talking is True and hour < 7 or hour > 20 and talking is True:
        return True
    else:
        return False    