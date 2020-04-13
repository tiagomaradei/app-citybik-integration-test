# laravel-docker-integration-test

## Challenge

Make an application that has integration with the CityBikes API https://api.citybik.es/v2/ following requirements

### 1) Store only the necessary data in the Database

### 2) The user can view all access points in Brazil
Interface: Table of Shared Bicycle Points available in Brazil
Columns:
  - Place Name
  - Location (City / Country)
  - Number of Bicycles available
  
### 3) User can search by name or city
Interface: Table search results, puts only what you think necessary the user

### 4) Bonus: Find the nearest location
Interface: Table search results, puts only what you think necessary the user


## Tech
  - Use Docker and docker-compose
  - PHP 7
  - Framework Laravel >= 5.4
  - PostgreSQL >= 9.4 ou MySQL 5.x.x
  - Bootstrap v3.x.x
  - JQuery, Vue.js, Angular2 ou React (aberto)


## Build and Run
- Clone from your git or fork

```sh
$ docker-compose build
$ docker-compose up -d
```
- Access ```localhost:8000```

