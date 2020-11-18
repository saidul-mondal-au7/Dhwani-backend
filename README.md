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

![](/demoPictures/Screenshot (59).png)


2) Login
- POST: Local Server - http://localhost:3000/users/login
- POST: Production Server - https://dhawni-backend.herokuapp.com/users/login
- Body - raw
- JSON

```JSON
   "usernam" : "babai",
   "password" : "12345"
```

- Result: success, JWT token: 'Bearer { JWT }'

3) states
- POST: Local Server - http://localhost:3000/states
- POST: Production Server - https://dhawni-backend.herokuapp.com/states
- Body - raw
- JSON

```JSON
"state":"Delhi"
```


- GET: Local Server - http://localhost:3000/states
- GET: Production Server - https://dhawni-backend.herokuapp.com/states


4) Districts
- POST: Local Server - http://localhost:3000/districts
- POST: Production Server - https://dhawni-backend.herokuapp.com/districts
```JSON
"state":"Delhi",
"district":"Budh bazar"
```
- GET: Local Server - http://localhost:3000/districts
- GET: Production Server - https://dhawni-backend.herokuapp.com/districts

5) Childs
- POST : Local Server - http://localhost:3000/childs
- POST : Production Server - https://dhawni-backend.herokuapp.com/childs

```JSON
    "name":"Sam Mondal",
    "sex":"male",
    "birthday":"12/03/2012",
    "fatherName":"Ratan Mondal",
    "motherName":"Beta Mondal",
    "state":"West Bengal",
    "district":"Darjeeling"
```

- GET : Local Server - http://localhost:3000/childs
- GET : Production Server - https://dhawni-backend.herokuapp.com/childs

