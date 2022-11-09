## Store Manager Project

## About
&nbsp;&nbsp; This project developed a RESTful CRUD API with the Models, Services, and Controller(MSC) architecture. The API controls an online store database created with MySQL. All application is covered with unit tests. The concept of the project was made by [Trybe](https://www.betrybe.com/).
	
## Files:
&nbsp;&nbsp; Trybe's teams previously developed all project setup and some files such as migration.sql and seed.sql.
</br>
</br>
&nbsp;&nbsp; Files developed by me:
- everything on the /src and /test folders.

## Technologies:
Technologies applied by me on this project:
- NodeJS;
- Express;
- MySQL;
- Sinon;
- Chai;
- Docker;

## How to run the project (with docker):
- Make sure you have docker installed with versions 1.29 or higher;
- Git clone the repository;
- Run the database and the node containers with `docker-compose up -d`;
- Access the node container `docker exec -it store_manager bash`; 
- Install all dependencies inside the container with `npm install`;
- You are ready to run the application! `npm start`; 


