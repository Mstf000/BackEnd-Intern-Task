# Backend Intern Task

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

1. Clone the repository:

  ```bash
   git clone <your-repo-url>
   cd backend-intern-task
  ```
2. Install dependencies:

  ```bash
   npm install
  ```
3. Set up the PostgreSQL database and update the `.env` file with your database credentials:

  ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/backend_intern_task"
  ```

4. Run database migrations:

  ```bash
   npx prisma migrate dev --name init
   npx prisma generate
  ```
## Running the app

```bash
Start the NestJS application:
```

# development
```bash
npm run start
```

# watch mode
```bash
npm run start:dev
```

# production mode
```bash
npm run start:prod
```
The application will be running at `http://localhost:3000`.

## API Documentation

The API documentation is available at `http://localhost:3000/api`.

### API Endpoints

#### Cart

- **Add to Cart (POST /api/cart/add)**:
```bash
  {
    "userId": 1,
    "productId": 1,
    "quantity": 2
  }
```
- **View Cart (GET /api/cart/:userId)**

- **Update Cart (PUT /api/cart/update)**:
```bash
  {
    "userId": 1,
    "productId": 1,
    "quantity": 5
  }
```
- **Remove from Cart (DELETE /api/cart/remove)**:
```bash
  {
    "userId": 1,
    "productId": 1
  }
```
#### Orders

- **Create Order (POST /api/orders)**:
```bash
  {
    "userId": 1,
    "products": [
      { "productId": 1, "quantity": 2 }
    ]
  }
```
- **Get Order by ID (GET /api/orders/:orderId)**

- **Update Order Status (PUT /api/orders/:orderId/status)**:
```bash
  {
    "status": "Shipped"
  }
```
#### Products

- **Create Product (POST /api/products)**:
```bash
  {
    "name": "Sample Product",
    "description": "This is a sample product.",
    "price": 100.0,
    "stock": 10
  }
```
- **Get Product by ID (GET /api/products/:id)**

#### Users

- **Create User (POST /api/users)**:
```bash
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword",
    "address": "123 Main St"
  }
```
- **Get User by ID (GET /api/users/:id)**

## Test

# unit tests
```bash
npm run test
```
# e2e tests
```bash
npm run test:e2e
```
# test coverage
```bash
npm run test:cov
```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch


- LinkedIn - [Mostafa Ameen](https://www.linkedin.com/in/mostafa-ameen-72511a1bb/)


