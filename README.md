# Blog-API WITH SEQEUIZE ORM
## mode dev ##
### clone project blog-API ###
- git clone https://github.com/AmineKotti/Blog-API
 
### Add database in phpMyAdmin
* Open http://localhost:9080/


### add SQL requete in phpMyAdmin
* DROP DATABASE IF EXISTS blogdb;
  CREATE DATABASE blogdb;

 ### Run Project ###  
* On doit par la suite appeler Dockerfile.dev dans la docker-compose-dev       
#### docker-compose   
 * build docker-compose
 ```bash
docker-compose build   
```
* up docker-compose  
```bash  
docker-compose up -d
```  
## CURL post user:
``` bash
curl --location --request POST 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName":"Alice",
    "lastName":"Smith",
    "email":"Alice.Smith@gmail.com"
}'
```   

![GitHub Logo](https://user-images.githubusercontent.com/36281616/140239476-8d0d7078-c5ef-44c9-b660-a106c3599425.PNG)



## CURL get user by id :
``` bash
curl --location --request GET 'http://localhost:3000/user/2'
```  
![GitHub Logo](https://user-images.githubusercontent.com/36281616/140239517-2741c798-75d2-40eb-8e17-5343dcaa9c4b.PNG)

## CURL get post by post id:
``` bash
curl --location --request GET 'http://localhost:3000/post/1'  
```  




