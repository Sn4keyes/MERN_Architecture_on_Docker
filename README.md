# MERN_Architecture

Example of MERN architecture to create a website with a Database (Mongo), a Backend (NodeJS) and a Frontend (ReactJS) on Docker to facilitate development.

## Launch Project :

At the root of the project, enter the following command :

`docker-compose up --build`

>❗️ Attention
>
> Don't forget to launch the Docker Desktop app.

By doing this you will build the project for the first time.\
After that you can enter the following command :

`docker-compose up`  or  `docker-compose up -d`

## Down the Project :

To destroy the containers, enter the following command :

`docker-compose down`

> 🚧 Advice
>
> Remember to delete your images on your Docker Desktop application, if you ever make significant changes due to image cache problems.
> 
> ![Capture d'écran 2024-04-12 013131](https://github.com/Sn4keyes/MERN_Architecture_on_Docker/assets/57391709/6643509a-9719-4a04-90dc-31adf0ca8ddb)

## Go further :

Go to the Frontend and Backend Readme to better understand how to manage each part.

### Frontend Readme :
`./Frontend_App/Readme_Frontend.md`

### Backend ReadMe :
`./Backend_App/Readme_Backend.md`

## Deployment :

Make sure your application is ready to deploy. This includes compiling the Frontend app so that it is ready to be served statically. Also make sure that the Backend app is configured to work correctly in production.

### Choose a hosting service :

There are many hosting services available (**Heroku**, **AWS**, **Firebase**, **Netlify**, **Vercel**), each with their own pros and cons.

### Server configuration :

Configure your server for your Banckend application. This may include configuring environment variables, databases, access permissions, ...\

> 📘 Info :
>
> Make sure to install the necessary dependencies on your server using npm or yarn.

### Deployment :

Follow the instructions specific to your chosen hosting service to deploy your application. Most services provide detailed instructions on how to deploy an application.

> ❗️ Attention
>
> Make sure you configure environment variables correctly and follow security best practices.

Once your application is deployed, be sure to test it to ensure it works correctly in production.
