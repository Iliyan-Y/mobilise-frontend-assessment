# Getting Started

- From the root folder run

```
npm install
npm start
```

navigate to [localhost:3000](http://localhost:3000/)

## Frontend stand alone usage

- You can test the app without backend using username: **test** and any password for login
- any other username will throw error in order to imitate real life experience for unregistered users

## Backend usage

- requires JDK 11
- open the backend dir with suitable java editor
- install all maven dependencies
- add mongodb atlas or local connection inside backend/src/main/resources/application.properties

```
example:
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@thebubble.8spah.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
spring.data.mongodb.database=mobilise

```

- run the main method at backend/src/main/java/com/mobilise/backend/BackendApplication.java
