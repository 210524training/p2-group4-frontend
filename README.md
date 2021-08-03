# iManage

## Project Description

**iManage**, an inventory management software, is a full-stack mobile application that provides easy tracking of assets and their repair history, repair request and response between technicians and users, and a social forum for the employees.
A user may submit a repair request to a specific asset, which is then relayed to the request queue to be processed by a technician. An available technician will then take the request off the queue, and once it is handled, the repair detail will be logged. A technician or admin may add additional assets into the system or edit them. Lastly, the application provides basic statistical analysis on the inventory.


## Technologies Used

### Frontend

* TypeScript
* [React Native with Redux](https://reactnative.dev/)
* [React Navigation](https://reactnavigation.org/)

### Backend

* [Cognito](https://aws.amazon.com/cognito/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [DynamoDB](https://aws.amazon.com/dynamodb/)

## Features

* Asset Management
* Create a new account/login with previous account
* Create forum discussions
* Statistical analysis on the inventory
* Adding/changing assets
* Creating repair ticket

## Get Started

### Frontend
> First navigate to the location where you would like to store a clone of this repository on your local device using Git Bash. Use the following command:
   - git clone https://github.com/210524training/p2-group4-frontend.git
> Once you have cloned the repository, open the folder in the terminal and install all required dependancies by typing in the following commands: 
   - npm install
   - amplify pull

> Then the navigate to the backend directory and create a .env with the following variables:

### Backend
- git clone https://github.com/210524training/p2-group4-backend.git
> Once you have cloned the repository, open the folder in the terminal and install all required dependancies by typing in the following commands: 
   - npm install

 > Then the navigate to the backend directory and create a .env with the following variables:
- AWS_PROFILE=YOUR_AWS_PROFILE
- ENVIROMENT=env
- PORT=3001
- WEB_CLIENT_ORIGIN=https://localhost:3000

## Usage

> To launch the application on a device or virtual machine, use the this command: 
   - npm start
> Once the application is loaded, your web browser will launch a page prompting you to select a virtual device.
   - If you are using a physical device, make sure to install the Expo mobile app from Google Play store(Android) or the App store(IOS) and select the Tunnel option next to connection before scanning the QR code on the screen.
> Once the application has loaded onto an device or virtual machine, you will be greeted by the login screen.




## Contributors

> Daniel Kim,
> Donovan Dixon, 
> David Quezada, 

## License

This project uses the following license: [MIT](./LICENSE).