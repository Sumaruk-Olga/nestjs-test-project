## Description

This project is a simplified version of a Facebook-like application. It is built using Nest.js, Mongoose, and MongoDB. The application includes user registration, login, creating, updating and removing posts, and searching all users and posts and by their id, all secured with JWT-based authentication.

## Features

- User Registration
- User Login with JWT Authentication
- Create Posts
- Update Post
- Delete Post
- Fetch All Posts
- Fetch Post by Id
- Fetch All Users
- Fetch User by Id

## Tech Stack

- **Backend Framework**: Nest.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT
- **Language**: TypeScript

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
The application should now be running on http://localhost:3000

## API Endpoints

Auth Endpoints

Register

POST /auth/signup

```
Body
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

Login

POST /auth/login

```
Body
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```


User Endpoints

Get User

GET /users/:id

```
Headers:
Authorization: Bearer <JWT_TOKEN>
```

Get All Users

GET /users

```
Headers:
Authorization: Bearer <JWT_TOKEN>
```


Post Endpoints

Create Post

POST /posts

```
Headers:
Authorization: Bearer <JWT_TOKEN>
Body
{
  "post": "This is a new post"
}
```

Get All Posts

GET /posts

```
Headers:
Authorization: Bearer <JWT_TOKEN>
```

Update Post

PUT /posts/:id

```
Headers:
Authorization: Bearer <JWT_TOKEN>
Body
{
  "post": "This is a new post"
}
```

Remove Post

DELETE //posts/:id

```
Headers:
Authorization: Bearer <JWT_TOKEN>
```