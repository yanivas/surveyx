Welcome to the SurveyX

The project is divided into three parts

(a) SurveyX Backend
(b) SurveyX Web Interface
(c) SurveyX Contracts

# SurveyX Backend

Welcome to the SurveyX backend! This folder contains the logic for survey creation, management, and data processing.

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Usage](#usage)
- [Configuration](#configuration)

## Overview

The SurveyX backend is responsible for handling the core functionalities of the survey system. It facilitates survey creation, management, and data processing. This backend is designed to work seamlessly with the SurveyX web interface and smart contracts.

## Setup

To set up the SurveyX backend, follow these steps:

1. Navigate to the `backend` folder: `cd backend`
2. Install dependencies: `npm install`
3. Configure the environment variables (see [Configuration](#configuration) section)
4. Start the backend server: `npm start`

## Usage

Once the backend is set up and running, you can interact with it through the SurveyX web interface or any API client. The backend provides a set of API endpoints to manage surveys, questions, responses, and more.

## Configuration

The SurveyX backend uses environment variables for configuration. Create a `.env` file in the `backend` folder and specify the following variables:

```
PORT=3000
SECRET_KEY=your-secret-key
```

Adjust the values based on your environment and requirements.


# SurveyX Web Interface

Welcome to the SurveyX web interface repository! This folder contains the source code for the React.js-based user interface, allowing users to take surveys and interact with the SurveyX platform.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [License](#license)

## Overview

The SurveyX web interface provides an intuitive and responsive platform for survey designers and respondents. It leverages the power of React.js to create a dynamic and user-friendly experience. The interface allows users to take surveys, and manage survey-related settings.

## Getting Started

To get started with the SurveyX web interface, follow these steps:

1. Clone the main SurveyX repository: `git clone https://github.com/yanivas/surveyx.git`
2. Navigate to the `web` folder: `cd surveyx/web`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to access the SurveyX web interface.

## Folder Structure

The `web` folder has the following structure:

- **public:** Contains public assets, such as images and the `index.html` file.
- **src:** Contains the source code for the React.js application.
  - **components:** Reusable React components used throughout the application.
  - **pages:** Individual pages representing different sections of the web interface.
  - **styles:** Stylesheets and styling-related files.





Feel free to customize this README file further based on the specific features and details of your web interface.

## Contributing

We welcome contributions! To contribute to the SurveyX.

## License

SurveyX is licensed under the [MIT License](../../LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
