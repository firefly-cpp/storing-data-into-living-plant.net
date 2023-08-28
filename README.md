<p align="center">
    <img alt="interChart" width="150" src="./frontend/assets/images/icon.png">
</p>
<h1 align="center">BioCache</h1>

## Requirements
* [Node.js](https://nodejs.org/en)
* [Docker](https://www.docker.com)

## Installation
To install the application, clone the repository and install nodemon by executing the following command:

```bash
npm install -g nodemon
```

Alternatively, the application can be installed using Docker by executing the following command:
```bash
docker compose build
```

## Usage
Execute the following command inside the ``frontend`` directory to launch the application:
```bash
nodemon index.js
```

Alternatively, the application can be launched using Docker by executing the following command:
```bash
docker compose up
```

Application's user interface is available at [localhost:3000](http://localhost:3000).