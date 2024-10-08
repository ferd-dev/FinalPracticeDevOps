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
   docker build -t ferni21/node-api:latest .
   ```

3. Run the Docker container:
   ```bash
   docker run -p 3000:3000 ferni21/node-api:latest:latest
   ```
4. Visit the API in your browser or Postman:
   ```bash
   http://localhost:3000/api/users
   ```
