# 🧮 Node.js Calculator App

A simple calculator application built using Node.js that performs basic arithmetic operations. The application is containerized with Docker and features a CI/CD pipeline managed with Jenkins, deployed on an AWS EC2 instance.

## ✨ Features

- Perform basic arithmetic operations
- Dockerized for easy deployment
- CI/CD pipeline with Jenkins
- Deployed on AWS EC2 

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Containerization:** Docker, Docker Compose
- **CI/CD:** Jenkins
- **Deployment:** AWS EC2

## 🚀 Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Docker & Docker Compose
- Node.js & npm

### Clone the Repository

```bash
git clone https://github.com/your-username/nodejs-calculator-app.git
cd nodejs-calculator-app
```

### Install Dependencies

```bash
npm install
```

### Build and Run the Application

```bash
docker-compose up --build -d
```

The app should now be running in a container.

## 🔄 CI/CD Pipeline with Jenkins

### 🏗️ Jenkins Configuration

1. Install Jenkins on your EC2 instance.
2. Configure Jenkins with Docker support.
3. Set up a pipeline using a `Jenkinsfile` (included in the repository).
4. Automate the build, test, and deployment process.

### 🌍 Deployment on AWS EC2

1. Launch an EC2 instance with Docker installed.
2. Pull the latest image and run the container:
   ```bash
   docker-compose up -d
   ```
3. The app should now be accessible via your EC2 public IP.

## 🤝 Contributing

Feel free to submit issues and pull requests to improve the project.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

For more details, visit the [GitHub Repository](https://github.com/your-username/nodejs-calculator-app).

