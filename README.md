# Dhwani-backend

## Live server  https://dhawni-backend.herokuapp.com/

## Testing with Postman

1) Sign up
- POST: Local Server - http://localhost:3000/users
- POST: Production Server - https://dhawni-backend.herokuapp.com/users
- Body - raw
- JSON

```JSON
   "usernam" : "babai",
   "password" : "12345"
```

![](/demoPictures/Screenshot.png)


2) i. Login
- POST: Local Server - http://localhost:3000/users/login
- POST: Production Server - https://dhawni-backend.herokuapp.com/users/login
- Body - raw
- JSON

```JSON
   "usernam" : "babai",
   "password" : "12345"
```

![](/demoPictures/Screenshot1.png)

- Result: success, JWT token: 'Bearer { JWT }'

ii. Logout

- POST: Local Server - http://localhost:3000/users/logout
- POST: Production Server - https://dhawni-backend.herokuapp.com/users/logout

![](/demoPictures/Screenshot12.png)

3) states

- POST: Local Server - http://localhost:3000/states
- POST: Production Server - https://dhawni-backend.herokuapp.com/states
- Body - raw
- JSON

```JSON
"state":"Delhi"
```
![](/demoPictures/Screenshot2.png)

- GET: Local Server - http://localhost:3000/states
- GET: Production Server - https://dhawni-backend.herokuapp.com/states

![](/demoPictures/Screenshot3.png)


4) Districts

- POST: Local Server - http://localhost:3000/districts
- POST: Production Server - https://dhawni-backend.herokuapp.com/districts
- Body - raw
- JSON

```JSON
"state":"Delhi",
"district":"Budh bazar"

```

![](/demoPictures/Screenshot4.png)

- GET: Local Server - http://localhost:3000/districts
- GET: Production Server - https://dhawni-backend.herokuapp.com/districts

![](/demoPictures/Screenshot5.png)

5) Childs

- POST : Local Server - http://localhost:3000/childs
- POST : Production Server - https://dhawni-backend.herokuapp.com/childs
- Body - raw
- JSON

```JSON
    "name":"Sam Mondal",
    "sex":"male",
    "birthday":"12/03/2012",
    "fatherName":"Ratan Mondal",
    "motherName":"Beta Mondal",
    "state":"West Bengal",
    "district":"Darjeeling"
```
![](/demoPictures/Screenshot6.png)

- GET : Local Server - http://localhost:3000/childs
- GET : Production Server - https://dhawni-backend.herokuapp.com/childs

![](/demoPictures/Screenshot7.png)

