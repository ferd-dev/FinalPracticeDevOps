# Final Practice DevOps - API with NodeJs

This project is a simple CRUD API built with Node.js, using Express.js, and following Clean Architecture principles.

## Running the project locally

1. Clone the repository:

   ```bash
   git clone https://github.com/ferd-dev/FinalPracticeDevOps.git
   cd FinalPracticeDevOps
   ```

2. Build the Docker image:

   ```bash
   docker build -t ferni21/node-api .
   ```

3. Run the Docker container:
   ```bash
   docker run -p 3000:3000 ferni21/node-api
   ```
4. Visit the API in Postman:
   ```bash
   |GET|    http://localhost:3000/api/users
   |GET|    http://localhost:3000/api/users/{id}
   |POST|   http://localhost:3000/api/users
   |PUT|    http://localhost:3000/api/users/{id}
   |DELETE| http://localhost:3000/api/users/{id}
   ```
