username = 'jonsnow'
email = 'jon@snow.com'
password = 'thenorth'

if username == 'jonsnow' and password == 'thenorth':
    print('Access granted')
else:
    print('Access denied')

if username == 'jonsnow':
    if password == 'thenorth':
        print('Access granted')
else:
    print('Access denied')

if username == 'jonsnow' or password == 'thenorth':
    print('Access granted')
else:
    print('Access denied')

if (username == 'jonsnow' or email == 'jon@snow.com') and password == 'thenorth':
    print('Access granted')
else:
    print('Access denied')

logged_in = True
standard_user = True

if logged_in and not standard_user:
    print('Admin access granted')
else:
    print('Standard access granted')
