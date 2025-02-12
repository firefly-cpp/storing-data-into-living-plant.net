<p align="center">
    <img alt="biocache" width="150" src="./frontend/assets/images/icon.png">
</p>
<h1 align="center">BioCache</h1>

## About
Step into the realm of unprecedented opportunities by encoding regular text into DNA sequences, unveiling a novel method of data representation. 🚀 Using a sophisticated process, each character in the text is meticulously translated into a specific arrangement of nucleotides, constructing a distinct genetic code that captures the essence of the original message. 🧬  

Join us in exploring the convergence of information technology and biotechnology, where your words are not just text, but vital seeds in the garden of life. 🌿🔬  

## Detailed insights
The current version comes packed with exciting features, including:
* **Encoding** 🧬📝<br />
The intricate process of converting custom text into a DNA sequence involves assigning each distinct character in the text to a specific arrangement of nucleotides, ultimately creating a unique genetic code that encapsulates the original message. 
* **Decoding** 🔍🔓<br />
The process of converting the encoded DNA sequence back into its original format involves decoding the sequence of nucleotides, which are the fundamental building blocks of DNA. This intricate process entails deciphering the sequence from their encoded representations.

With our application, you can plant custom text into a DNA sequence and watch it bloom back into its original format. 🌱💬

## Requirements
* [Node.js](https://nodejs.org/en)
* [Docker](https://www.docker.com)

## Installation
### Node
To install the application, clone the repository and install nodemon by executing the following command:

```bash
npm install -g nodemon
```

Afterwards, execute the following command inside the ``frontend`` directory to install the required dependencies:

```bash
npm install
```

### Docker
The application can be installed using Docker by executing the following command in the root directory:
```bash
docker compose build
```

Alternatively, the application can be installed using the following command:
```bash
docker pull codeberg.org/firefly-cpp/storing-data-into-living-plant.net/storing-data:latest
```

## Usage
### Node
Execute the following command inside the ``frontend`` directory to launch the application:
```bash
nodemon index.js
```

### Docker
The application can be launched using Docker by executing the following command in the root directory:
```bash
docker compose up
```

Alternatively, the application can be launched using the following command:
```bash
docker run -p 3000:3000 codeberg.org/firefly-cpp/storing-data-into-living-plant.net/storing-data:latest
```

# References

Fister, K., Fister, I., Murovec, J., & Bohanec, B. (2017). [DNA labelling of varieties covered by patent protection: a new solution for managing intellectual property rights in the seed industry](https://link.springer.com/article/10.1007/s11248-016-9981-1). Transgenic research, 26, 87-95.

Fister, K., Fister, I., & Murovec, J. (2017). [The potential of plants and seeds in DNA-based information storage](https://link.springer.com/chapter/10.1007/978-3-319-59090-5_4). Understanding Information: From the Big Bang to Big Data, 69-81.
