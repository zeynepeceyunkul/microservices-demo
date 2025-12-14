# 🚀 Microservices Demo – Google Cloud Run

![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Google Cloud](https://img.shields.io/badge/Google%20Cloud-Run-blue?logo=googlecloud)
![Serverless](https://img.shields.io/badge/Architecture-Serverless-success)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

A simple **microservice-based backend** built with **Node.js**, containerized using **Docker**, and deployed on **Google Cloud Run** using a **serverless architecture**.

This project demonstrates how independent services can communicate via REST APIs and be exposed through a **single entry point (API Gateway pattern)**.

---

## 🌐 Live Demo

**Base URL**

```text
https://gateway-service-423624249820.europe-west1.run.app
```
## Available Endpoints

```text
GET /users
GET /orders
```

⚠️ Cloud Run uses scale-to-zero, so the service only runs when a request is received.

---

## 🧩 Microservices Overview

| Service | Description |
|---------|-------------|
| User Service | Returns user information |
| Order Service | Returns order data and calls User Service |
| Gateway Service | Single entry point (API Gateway pattern) |

---

## 🏗️ Architecture

```text
Client
  |
  v
Gateway Service (Cloud Run)
  |
  ├── User Service (Cloud Run)
  └── Order Service (Cloud Run)
```

- Each service is independently deployable

- Services communicate via REST (HTTP)

- No always-on servers (serverless)

---

## 🐳 Containerization

Each microservice is packaged as a Docker container:

- Same runtime everywhere

- No environment mismatch

- Easy cloud deployment

```text
Docker → Cloud Run → Live Service
```

## ☁️ Cloud & Serverless

The application is deployed on Google Cloud Run, which provides:

- ✅ Automatic scaling

- ✅ HTTPS by default

- ✅ Scale-to-zero (no traffic = no cost)

- ✅ Free tier friendly

No virtual machines, no manual scaling, no server management.

---


## 🛠️ Tech Stack

- Backend: Node.js (Express)

- Containerization: Docker

- Cloud Platform: Google Cloud Run

- Architecture: Microservices + API Gateway

- Communication: REST API (HTTP)

---

## 💰 Cost & Safety

- Uses Google Cloud Free Tier

- No background processes

- No cost when there is no traffic

- Safe for demos, assignments, and portfolios

---

## 📌 Project Structure
```text
microservices-demo/
├── user-service/
├── order-service/
├── gateway-service/
├── README.md
└── .gitignore
```

---

## 🎓 Academic / Portfolio Notes

This project was built to demonstrate:

- Microservice architecture

- Container-based deployment

- Serverless cloud infrastructure

-  API Gateway design pattern

It is suitable for:

- University assignments

- Portfolio projects

- Cloud & backend learning
