# Kubernetes Web Application Deployment

This project demonstrates how to deploy and manage a scalable web application using Kubernetes.

## Features

- Simple Node.js web application with two buttons and a title
- Kubernetes deployment with multiple replicas
- ConfigMaps and Secrets for environment variables
- Horizontal Pod Autoscaler for automatic scaling
- Service exposure via NodePort
- Rolling updates and rollbacks
- Persistent storage (optional)

## Setup Instructions

1. Install Minikube
2. Start Minikube cluster with at least two worker nodes
3. Apply Kubernetes manifests
4. Access the application

## Components

- Deployment: Manages the application pods
- Service: Exposes the application
- ConfigMap: Stores non-sensitive configuration
- Secret: Stores sensitive information
- HPA: Handles automatic scaling

## Testing

The project includes scripts for testing:
- Application availability
- Auto-scaling
- Rolling updates and rollbacks
- Self-healing capabilities
- Persistent storage
- Logging