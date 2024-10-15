# Weather Monitoring Application

A simple weather monitoring application that provides real-time weather data using a weather API. The application is built with React for the frontend and Node.js for the backend, and it is containerized using Docker.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Docker](#docker)
- [Terraform](#terraform)
- [Contributing](#contributing)
- [License](#license)

## Features
- Fetch weather data based on latitude and longitude.
- Responsive and user-friendly frontend interface.
- Containerized application for easy deployment.
- Infrastructure setup using Terraform for simplified deployment.

## Requirements
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/) (for local development)
- [Terraform](https://www.terraform.io/downloads.html) (for infrastructure setup)

## Installation


1. **Clone the Repository**
   ```bash
   git clone https://github.com/SBAKMaged/weather-monitoring-app.git
   cd weather-monitoring-app
   ```

2. **Build the Docker Images**
   Ensure you are in the root directory of the project and run:
   ```bash
   docker-compose build
   ```

3. **Run the Application**
   After building the images, you can start the application using:
   ```bash
   docker-compose up
   ```

   The application will be accessible at:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

## Usage
- Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).
- Enter the latitude and longitude to fetch weather data.
- Click "Get Weather" to see the results.

## API Endpoints
- **Get Weather Data**
  ```
  GET http://localhost:5000/api/weather?lat={latitude}&lon={longitude}
  ```
  - **Parameters:**
    - `lat`: Latitude of the location.
    - `lon`: Longitude of the location.

## Docker
This application is containerized using Docker. Ensure Docker and Docker Compose are installed on your machine.

### Docker Commands
- To stop the application:
  ```bash
  docker-compose down
  ```

## Terraform
A Terraform setup is included to build the infrastructure required to run the application. Follow these steps to deploy the infrastructure:

### Terraform Commands
1. **Initialize Terraform**
   ```bash
   terraform init
   ```

2. **Plan the Deployment**
   ```bash
   terraform plan
   ```

3. **Apply the Configuration**
   ```bash
   terraform apply
   ```

After the infrastructure is set up, you can proceed to run the Docker containers.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
