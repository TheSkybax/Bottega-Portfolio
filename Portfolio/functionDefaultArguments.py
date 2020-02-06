def greeting(name = 'Guest'):
    print(f'Hi {name}!')

greeting()
greeting('Kristine')

def some_function(collection = []):
    collection.append(1)
    return collection

print(some_function())
print(some_function())
