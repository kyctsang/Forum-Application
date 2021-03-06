# Forum-Appication

## Description
This forum is set aside for users to post topics and add comment using SPA(Single Page Application). At the first time of running this application, flyway will create tables and insert data into the database 'forum'. Then the frontend will fetch those data and display it. You may also login, create topics or add comment by using the UI, those data will be saved in you MySQL server locally and will be preserved even if the backend was interrupted. The instruction of performing the former actions has been descripted in the home page of the frontend.

## Getting started
### Dependencies
#### Front end
* ReactJS
* BootStrap
* Redux
* Redux-Sage

### Back end
* Spring Boot Kotlin
* JPA
* FlyWay
* MySQL (default port is 3306 and have to create database "forum" manually before running)

### Installing
* Put backend folder in Intellij or other IDE and run build.
* Place frontend folder in VScode or anything else, then enter the following command in the frontend folder:
```
npm install
```
* Configure username and password in backend/src/main/resources/applicaiton.properties to your MySQL database user.
* Empty database would be okay, flyway will do the migration for you, see backend/src/main/resources/db/migration/V1__setup.sql for detail.

### Executing Program
* Run backend/src/main/kotlin/forum/backend/BackendApplication.kt first.
* Run frontend.
* Open browser with the following link:
```
http://localhost:3000
```
* Functions or features of this project have been included in the Home and About page.


## Author  
Casper Tsang  
Email: kayungtsang@gmail.com  
Please feel free to email me if you have got any questions or recommendations to my project!
