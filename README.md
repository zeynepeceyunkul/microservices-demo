\# Microservices Demo (Google Cloud Run)



This project demonstrates a simple microservice architecture deployed on Google Cloud Run.



\## Services

\- User Service: Returns user data

\- Order Service: Returns order data and communicates with User Service

\- Gateway Service: Acts as a single entry point (API Gateway pattern)



\## Live API

Base URL:

https://gateway-service-423624249820.europe-west1.run.app



\### Endpoints

\- GET /users

\- GET /orders



\## Technologies

\- Node.js (Express)

\- Docker

\- Google Cloud Run (Serverless)

\- REST API



\## Architecture

Client → Gateway Service → Microservices



\## Notes

Cloud Run uses scale-to-zero, so there is no cost when there is no traffic.



