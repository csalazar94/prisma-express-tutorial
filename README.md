# Building a Flexible and Scalable Node.js Backend with Express: A Step-by-Step Tutorial
This tutorial walks through the project structure, implementing the controller, service, router and using the dependency injection pattern in a nodejs express application.

# Installation
You can follow this tutorial and understand how this project work on this medium [link](https://medium.com/@csalazar94/building-a-flexible-and-scalable-node-js-backend-with-express-a-step-by-step-tutorial-5a8633335b48).

```
npm install
```

# Usage
```
npm start
```

# API Endpoints
### POST /users
Create a new user.

#### Request Body
```
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response Body
```
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

## GET /users
Get a list of all users.

### Response Body
```
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com"
  }
]
```

## GET /users/:id
Get one user by id.

### Response Body
```
{
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
}
```
