def date_fashion(you, date):
    if (you >= 8 and date >= 5 or date >= 8 and you >= 5): return 2
    if (you <= 2 or date <= 2): return 0
    return 1
