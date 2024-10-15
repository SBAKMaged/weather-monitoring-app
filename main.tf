terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.0"
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/docker_engine"  //Change this line according to your Docker Endpoint
}
resource "docker_image" "frontend" {
  name         = "sbakmaged/weather-app-frontend:latest"
  keep_locally = false
}

resource "docker_container" "frontend" {
  image = docker_image.frontend.name  # Updated to use .name
  name  = "weather-app-frontend"
  ports {
    internal = 3000
    external = 3000
  }
}

resource "docker_image" "backend" {
  name         = "sbakmaged/weather-app-backend:latest"
  keep_locally = false
}

resource "docker_container" "backend" {
  image = docker_image.backend.name  # Updated to use .name
  name  = "weather-app-backend"
  ports {
    internal = 5000
    external = 5000
  }
}

resource "local_file" "docker_compose" {
  content = <<-EOT
    version: '3'
    services:
      backend:
        image: sbakmaged/weather-app-backend:latest
        ports:
          - "5000:5000"
        environment:
          - RAPIDAPI_KEY=c65d30f075msh8042f3e90a468f9p188e92jsn8e7dadc26166

      frontend:
        image: sbakmaged/weather-app-frontend:latest
        ports:
          - "3000:3000"
        depends_on:
          - backend
  EOT

  filename = "./docker-compose.yml"
}

resource "null_resource" "docker_compose_up" {
  provisioner "local-exec" {
    command = "docker-compose -f ${local_file.docker_compose.filename} up -d"
  }
}
