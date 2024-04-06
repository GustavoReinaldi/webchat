# WebChat

![Angular 12.1.0](https://img.shields.io/badge/angular-v12.1.0-blue?style=flat&logo=angular&label=Angular&color=%23F66)
![NPM Version (with dist tag)](https://img.shields.io/npm/v/express/latest?style=flat&logo=express&logoColor=%23fff&label=Express&labelColor=%23555&color=%23777)
![Socket.io - server-side](https://img.shields.io/badge/socket.io%20server-v4.7.5-blue?style=flat&logo=socket.io&logoColor=%23fff&color=%23fff)
![Socket.io - client-side](https://img.shields.io/badge/socket.io%20client-v4.7.5-blue?style=flat&logo=socket.io&logoColor=%23fff&label=Socket.io-client&labelColor=%23000&color=%23fff)
![NPM Version](https://img.shields.io/badge/NPM-v10.5.0-blue?style=flat&logo=npm&logoColor=%23fff&labelColor=%23933&color=%23777)
![Node tag](https://img.shields.io/badge/Nodejs-v20.12.0-blue?style=flat&logo=nodedotjs&logoColor=%23fff&&labelColor=%237a7&color=%23777)


This is an implementation of WebSockets in a web chat format. Basically, this is an application of Websockets concepts for study purposes.

I hope you like my implementation.


![Webchat - Print Screen](./assets/images/conversarion-demo.png)


## Run Frontend

1. Open the console in the `webchat-front` directory.
2. Run `npm install` to install all dependencies.
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Run Backend

1. Open the console in the `web-socket-back` directory. 
2. Run `npm install` and then run `node src/index.js` to start server. 
3. By default you can find the server in `http://localhost:8080`.

## Build frontend

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.