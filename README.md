# 🚀 Microservices Demo – Google Cloud Run

![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Google Cloud](https://img.shields.io/badge/Google%20Cloud-Run-blue?logo=googlecloud)
![Serverless](https://img.shields.io/badge/Architecture-Serverless-success)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

A **full-stack microservice-based application** built with **Node.js** and **React**, containerized using **Docker**, and deployed on **Google Cloud Run** using a **serverless architecture**.

The project demonstrates how independent backend services communicate via REST APIs, are exposed through a **single entry point (API Gateway pattern)**, and are consumed by a frontend application.

---

## 🌐 Live Demo

### Frontend (Cloud Run)
```text
https://frontend-XXXXX.a.run.app
```
### API Gateway (Cloud Run)
```text
https://gateway-service-423624249820.europe-west1.run.app
```
### Available Endpoints
```text
GET /users
GET /orders
```
⚠️ Cloud Run uses scale-to-zero, meaning the services only run when a request is received.

---

## 🧩 Microservices Overview

**User Service**
: Returns user information.

**Order Service**
: Returns order data and communicates with the User Service.

**Gateway Service**
: Acts as a single entry point and implements the API Gateway pattern.

**Frontend**
: React application that consumes the API Gateway.

---

## 🏗️ Architecture
```text
React Frontend (Cloud Run)
        |
        v
API Gateway (Cloud Run)
        |
        ├── User Service (Cloud Run)
        └── Order Service (Cloud Run)
```
- Each service is independently deployable

- Services communicate via REST (HTTP)

- No always-on servers (serverless)

---

## 🐳 Containerization
Each service (backend and frontend) is packaged as a Docker container.

Benefits:

- Same runtime environment everywhere

- No environment mismatch

- Easy cloud deployment

```text
Docker → Cloud Run → Live Service
```

---

## ☁️ Cloud & Serverless
The application is deployed entirely on Google Cloud Run, which provides:

- ✅ Automatic scaling

- ✅ HTTPS by default

- ✅ Scale-to-zero (no traffic = no cost)

- ✅ Free tier friendly

No virtual machines, no manual scaling, no server management.

---

🛠️ Tech Stack
- Frontend: React (Vite)

- Backend: Node.js (Express)

- Containerization: Docker

- Cloud Platform: Google Cloud Run

- Architecture: Microservices + API Gateway

- Communication: REST API (HTTP)

---

## 📌 Project Structure
```text
microservices-demo/
├── user-service/
├── order-service/
├── gateway-service/
├── frontend/
├── README.md
└── .gitignore
```

---

## 🎓 Academic / Portfolio Notes
This project was built to demonstrate:

- Microservice architecture

- Container-based deployment

- Serverless cloud infrastructure

- API Gateway design pattern

- Full-stack cloud deployment

It is suitable for:

- University assignments

- Portfolio projects

- Cloud & backend learning
