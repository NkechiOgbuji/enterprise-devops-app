#Enterprise DevOps App

Overview

This project demonstrates a simple microservices architecture built with Node.js, Docker, and Docker Compose.

The application consists of:

* User Service
* Order Service
* API Gateway

The API Gateway acts as a single entry point and routes requests to the backend microservices.
+----------------+
                 |   API Gateway  |
                 |    Port 8080   |
                 +--------+-------+
                          |
          +---------------+---------------+
          |                               |
          |                               |
+---------+---------+         +----------+---------+
|   User Service    |         |   Order Service   |
|     Port 3001     |         |     Port 3002     |
+-------------------+         +-------------------+

#Technologies Used

* Node.js
* Express.js
* Docker
* Docker Compose
* Git
* GitHub#

#Project Structure

enterprise-devops-app/
│
├── api-gateway/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
│
├── user-service/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
│
├── order-service/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md

#Features

* Containerized microservices
* API Gateway routing
* Docker networking
* Docker Compose orchestration
* Independent service deployment
* Git version control


#Build Docker Images
docker build -t user-service:v1 ./user-service

docker build -t order-service:v1 ./order-service

docker build -t api-gateway:v1 ./api-gateway

#Run Using Docker Compose
docker compose up -d

#Verify running containers:
docker ps

#Stop all services:
docker compose down

#API Endpoints

#Get Users

curl http://localhost:8080/users

#Get Orders

curl http://localhost:8080/orders


#Validation

The project was successfully validated by:

* Building Docker images
* Running containers with Docker Compose
* Verifying container status using Docker
* Testing API Gateway routing
* Accessing backend services through a single endpoint

#Learning Outcomes

Through this project, I gained hands-on experience with:

* Microservices architecture
* Docker image creation
* Container networking
* Docker Compose orchestration
* API Gateway implementation
* Git and GitHub workflows
* DevOps best practices

#Author

Nkechi Queeneth Ogbuji

Cloud & DevOps Engineer

GitHub: https://github.com/NkechiOgbuji
