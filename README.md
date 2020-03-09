# Library Api Application 
 This applicaiton is an API that manages a library , it has features including 
1) authentication for students and admin(staff members)
2) CRUD operations for books , 
    Books can be added to library 
    Books can be searched for using various criteria
        1) Book titles 
        2) Book Authors 
        3) Book Category 
    Books can be deleted from the library by only administrators 
3)Books can be borrowed by students and returned 
    Multiple books can be borrowed by one student. 



# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
