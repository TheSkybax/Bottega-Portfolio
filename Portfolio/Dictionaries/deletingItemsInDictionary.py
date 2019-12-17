teams = {
    "astros" : ["Altuve", "Correa", "Bregman"],
    "angels" : ["Trout", "Pujols"],
    "yankees": ["Judge", "Stanton"],
    "red sox": ["Price", "Betts"],
}

removed_team = teams.pop('yankees', 'No team found')

print(teams)
print(removed_team)
