# Backend Intern Task



<!-- ## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. -->

## Installation

1. Clone the repository:

  ```bash
   git clone https://github.com/Mstf000/BackEnd-Intern-Task.git
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
- Email - [mostafaameenfouad@gmail.com](mostafaameenfouad@gmail.com)


