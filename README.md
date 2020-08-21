# EDU LOOKBOOK
> A place where all edu profiles can be stored and accessed.

## Tech Stack

* Node.js
* Express.js
* JSON web token (JWT)
* Bcrypt


## Main Files: Project Structure
```bash
     |-- src
        |-- index.js' ** the main driver of the app'
        |-- server
            |-- app.js
            |-- config
            |   |-- connect.js
            |   |-- envTypes.js
            |-- controllers
            |   |-- profile.js
            |   |-- user.js
            |-- helpers
            |   |-- validation.js
            |   |-- schemas
            |       |-- profiles.js
            |       |-- users.js
            |-- models
            |   |-- profile.js
            |   |-- user.js
            |   |-- schemas
            |       |-- profile.js
            |       |-- user.js
            |       |-- usersAllowed.js
            |-- routers
                |-- profileRouter.js
                |-- userRouter.js

```


## Environment Variables

* PORT -- `server port number`
* DB_URL -- `database URL`
* SECRET -- `Secret key for verifying the token`
* NODE_ENV -- `Specifies the Server environment (development, local, production)`

## Usage
1. `clone` this repository.
2. `cd` into project root directory.
3. run `npm install` to install all dependencies.
   (you must have [node](https://nodejs.org) installed)
4. Run `npm start` to start the server.
5. Open up `Postman` and then test out the Endpoints.


----


## User CRUD Operations


**SignUp User**
----
  Signs in a single user into the Application.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/users/signup`  | POST        | `None`   |`None`    | 

* **Request Body**
    ```javascript
        {
            "username"    : "me@gmail.com",
            "method"      : "Local-auth",
            "firstName"   : "mefirst",
            "otherName"   : "meOther",
            "password"    : "mePassword",
            "userLevel"   :"1"
        }
    ```  
  

* **Request Headers**

  > None

* **Success Response:**

  **Status:** 200 OK <br />
     **Sample Content:**

   ```javascript
        {
            Message: "User account succesfully created!",
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV
            CJ9eyJpZCI6IjVmMGYwY2UxZmZjNTQ1MGI
            3YzllMzk4OSIsI"
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 409 CONFLICT <br />
    **Content:** `{ "Error": "User Already Exists" }`

  OR

  * **Status:** 417 EXPECTATION_FAILED <br />
    **Content:** `{  Error: 'Server error occured, user account creation failed!'}`

<br/>
<br/>

**Login User**
----
  Logs in a single user in the application.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/users/login`  | GET        | `None`   |`None`    | 

* **Request Body**
    ```javascript
        {
            "username"    : "me@gmail.com",
            "password"    : "mePassword"
        }
    ```  
  

* **Request Headers**

  > None

* **Success Response:**

  **Status:** 200 OK <br />
     **Sample Content:**

   ```javascript
       {
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV
          CJ9eyJpZCI6IjVmMGYwY2UxZmZjNTQ1MGI
          3YzllMzk4OSIsI"
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 400 BAD REQUEST <br />
    **Content:** `{ error: 'Invalid password, retry with correct password!' }`

  OR

  * **Status:** 404 NOT FOUND <br />
    **Content:** `{ error: 'No such user exists!', err }`

  OR

  * **Status:** 417 EXPECTATION_FAILED <br />
    **Content:** `{ error: 'Server error occured during login, please try again later!'}`

<br/>
<br/>

**Get User By ID**
----
  Returns json data about a single user.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/users/`  | GET           | `None`   |`None`    | 

* **Request Body**

  > None

* **Request Headers**

  > `{ authorization: "Bearer Token" }`

* **Success Response:**

  **Status:** 200 OK <br />
      **Sample Content:**

    ```javascript
        
        {
          "username": "username@gmail.com",
          "firstName": "firstname",
          "otherName": "otherName"
        }
        
    ```  
            
 
* **Error Response:**

  * **Status:** 403 FORBIDDEN <br />
    **Content:** `{ Error: 'Something Went Wrong!' }`

<br/>
<br/>

**Update User By ID**
----
  Updates data about a single user in the database.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/users/`  | PATCH           | `None`   |`None`   | 

*   **Request Body**
    > Fields are not all required since its an update
    ```javascript
        {
            "username"    : "me@gmail.com",
            "method"      : "Local-auth",
            "firstName"   : "mefirst",
            "otherName"   : "meOther",
            "password"    : "mePassword",
            "userLevel"   :"1"
        }
    ```

* **Request Headers**

  > `{ authorization: "Bearer Token" }`

* **Success Response:**

  **Status:** 200 OK <br />
      **Sample Content:**

    ```javascript
        {
            Message: "User has been successfully Updated"
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 404 NOT FOUND <br />
    **Content:** `{ Error: 'Something Went Wrong >>> User of Given ID was Not Found'}`

<br/>
<br/>

**Delete User By ID**
----
  Delets a single user from the Data Base.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/users/:id`  | DELETE        | `required`   |string    | 

*   **Request Body**
    
    > None

* **Request Headers**

  > `{ authorization: "Bearer Token" }`

* **Success Response:**

  **Status:** 200 OK <br />
      **Sample Content:**

    ```javascript
        {
             "Message": "User has been Deleted Successfully"
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 400 BAD REQUEST <br />
    **Content:** `{ Error: "Something went Wrong >> User OF given ID was not found",err}`


-----
<br/>
<br/>
<br/>


## Profile CRUD Operations


**Create User profile**
----
  Create in a single user profile into the Application.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/profiles/`  | POST        | `None`   |`None`    | 

*  **Request Body**
    ```javascript
        {
            "username"    : "meusername",
            "email"      : ['me1@gmail.com','me2@gmail.com'],
            "phone"   : ['0736284897','0736284897'],
            "organisation"   : [{name:"MTN",position:"PRO",   date:"24/09/2018"}],
            "skills"    : [{name:"playing",proficiency: "champion",favorite:true}],
            "address"    : [{country: "Uganda",state: "Wakiso",address_line: "plot_20"}],
            "strength"   :"Agility",
            "topics_of_interest"   :['currentStuff','Google']
        }
    ```  
  

* **Request Headers**

  > None

* **Success Response:**

  **Status:** 200 OK <br />
     **Sample Content:**

   ```javascript
        {
            Message: 'Your profile was successfully created', Profile }
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 403 BAD REQUEST <br />
    **Content:** `{  Error: 'User Profile Already Exists' }`

  OR

  * **Status:** 403 BAD REQUEST <br />
    **Content:** `{ error: 'An unknown server error occured while creating your profile, please retry!'}`

<br/>
<br/>

**View User Profiles**
----
  Logs in all single user profiles in the application.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/profiles/`  | GET        | `None`   |`None`    | 

* **Request Body**
  
  > None

* **Request Headers**

  > None

* **Success Response:**

  **Status:** 200 OK <br />
     **Sample Content:**

   ```javascript
        {
             Profiles: [] 
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 404 NOT FOUND <br />
    **Content:** `{ Message: 'No Profiles Available' }`

  OR

  * **Status:** 404 NOT FOUND <br />
    **Content:** `{ Message: `Something Went Wrong. Profiles Not Found`, Error: err }`

<br/>
<br/>

**Get User Profile By ID**
----
  Returns json data about a single user Profile.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/profiles/:id`  | GET           | `required`   |string    | 

* **Request Body**

  > None

* **Request Headers**

  > None

* **Success Response:**

  **Status:** 200 OK <br />
      **Sample Content:**

    ```javascript
        {
             profile: profile 
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 404 NOT FOUND <br />
    **Content:** `{ Message: 'profile Not Found' }`

  OR

  * **Status:** 404 NOT FOUND <br />
    **Content:** `{Message : `Something Went Wrong. User Profile of Given id >> `profileId` << was Not Found `, Error: err}`
<br/>
<br/>

**Update User Profile By ID**
----
  Updates data about a single user Profile in the database.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/profiles/:id`  | PATCH           | `required`   |string    | 

*   **Request Body**
    > Fields are not all required since its an update update only what you need to update.
    ```javascript
        {
            "username"    : "upadatedUsername",
            "email"      : ['me1@gmail.com','me2@gmail.com'],
            "phone"   : ['0736284897','0736284897'],
            "organisation"   : [{name:"MTN",position:"PRO",   date:"24/09/2018"}],
            "skills"    : [{name:"playing",proficiency: "champion",favorite:true}],
            "address"    : [{country: "Uganda",state: "Wakiso",address_line: "plot_20"}],
            "strength"   :"Agility",
            "topics_of_interest"   :['currentStuff','Google']
        }
    ```

* **Request Headers**

  > None

* **Success Response:**

  **Status:** 200 OK <br />
      **Sample Content:**

    ```javascript
        {
            Message: `User's Profile has been Updated` 
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 404 NOT FOUND <br />
    **Content:** `{ Message: `Profile of given ID >> profileId << was not Found`, Error: err }`

  OR

  * **Status:** 403 FORBIDDEN <br />
    **Content:** `{  Message: 'Username provided Already Taken >> Enter Unique Username' }`
<br/>
<br/>

**Delete User Profile By ID**
----
  Delets a single user Profile from the Data Base.

| Endpoint      | Method            | Params       |Data type |
|:------------- |:-----------------:| :-----------:|---------:|
| `/api/profiles/:id`  | DELETE        | `required`   |string    | 

*   **Request Body**
    
    > None

* **Request Headers**

  >None

* **Success Response:**

  **Status:** 200 OK <br />
      **Sample Content:**

    ```javascript
        {
             message: `User's Profile has been deleted successfully`
        }
    ```  
            
 
* **Error Response:**

  * **Status:** 400 BAD REQUEST <br />
    **Content:** `{ error: 'Profile cannot be deleted.Try again' }`


-----
<br/>

## Contributing
You can help improve the code base of the application where neccessary by raising an issue or opening a pull request.