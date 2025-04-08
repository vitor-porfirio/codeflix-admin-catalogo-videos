# 🎬 CodeFlix - Admin Catalog Microservice

This is the **Admin Catalog Microservice** for the CodeFlix platform — a video catalog service built with a microservices architecture. This microservice is responsible for managing the core video metadata, including categories, genres, cast members, and video records.

> 🛠️ Built with **Node.js**, **NestJS**, and **Sequelize**.

---

## 🚀 Features

- ✅ CRUD for **Categories**
- ✅ CRUD for **Genres**
- ✅ CRUD for **Cast Members** (e.g. actors, directors)
- ✅ CRUD for **Videos**
- 🔗 Future integrations with other services via **RabbitMQ**
- 🔐 Auth-ready via **Keycloak**

---

## 📦 Tech Stack

- **Language**: Node.js (TypeScript)
- **Framework**: NestJS
- **ORM**: Sequelize
- **Messaging**: RabbitMQ (planned)
- **Authentication**: Keycloak
- **Containerization**: Docker
- **Testing**: Automated tests (coming soon)
- **API Documentation**: Postman collection (coming soon)

---

## 🧱 Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js (for local development, optional)

### Running with Docker

```bash
docker-compose up --build
