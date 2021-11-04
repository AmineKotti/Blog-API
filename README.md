# Blog-API

# Blog-API
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

![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834420-e20bcdcb-3a83-4e9b-a023-3704a3dcc0c2.PNG)



## CURL get user by id :
``` bash
curl --location --request GET 'http://localhost:3000/user/2'
```  
![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834567-f2acaeb7-0157-46d4-89b8-5202b427a299.PNG)


## CURL get post by post id:
``` bash
curl --location --request GET 'http://localhost:3000/post/1'  
```  
![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834742-7b32a924-8c31-4396-a730-82fb1f6d85a8.PNG)

![GitHub Logo](https://user-images.githubusercontent.com/36281616/139834773-abc959d2-44a5-4eb8-9f2b-639edda4122f.PNG)






