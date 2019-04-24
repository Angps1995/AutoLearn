# Autolearn
Build a community website to find and share the best online courses, tutorials and learning paths

## Get Started
### Backend
The backend uses Spring Boot, Spring Data REST and the database is MySQL.

#### Install
Install Maven and Java 8.

#### Run
Run `mvn spring-boot:run` in the `backend` directory and access the backend api at `localhost:8080`.

#### Access localhost from remote machine
One way to build a tunnel to localhost is using `ngrok`. The steps are as follows:
1. Install and connect your account by following instructions on https://dashboard.ngrok.com/get-started
2. Run `ngrok http 8080` to create a remote accessible link.

## Backend API documentation
[Swagger API yaml file](lunchball peeps v2.yaml)
